var promises = [],
    searchQuery = window.location.search.substring(1);

var jsonFiles = ['/search_index.json','/corpus.json'];

// Loop over JSON files, make a XML Http Request, and push result to the `promises` array.
jsonFiles.forEach(function(f) {
    promises.push(xhrRequest(f));
});

// If we've made all our promises.
Promise.all(promises).then(function(values) {
    if (searchQuery) {
        var idx = lunr.Index.load(JSON.parse(values[0]));
        var docs = JSON.parse(values[1]);
        var lunrQueryString = buildLunrQueryString(searchQuery);
        console.log(lunrQueryString);
        var results = idx.search(lunrQueryString);
        displaySearchResults(results, docs, 'search_results');
    }
}, function(err) {
    console.log(err)
});



// --- Helper Functions ---

// Displays search results
function displaySearchResults(results, docs, search_container) {
    var search_results= document.getElementById(search_container);
    
    if (results.length) {
        console.log(results);
        search_results.innerHTML = "";
        
        results.forEach(function(result) {
            var item = docs.filter(doc => doc.id === result.ref);
            var html = resultSnippet(item[0]);

            Object.keys(result.matchData.metadata).forEach(function(term) {
                Object.keys(result.matchData.metadata[term]).forEach(function(fieldName) {
                    var field = html.querySelector('[data-field=' + fieldName + ']'),
                        positions = result.matchData.metadata[term][fieldName].position;
                    wrapTerms(field, positions);
                });
            });

            search_results.appendChild(html);
        });

    } else {
        search_results.innerHTML = "No results found for your query.";
    }
}

function resultSnippet(doc) {
    var li = document.createElement('li'),
        article = document.createElement('article'),
        header = document.createElement('header'),
        section = document.createElement('section'),
        h2 = document.createElement('h2'),
        a = document.createElement('a'),
        p1 = document.createElement('p'),
        h4 = document.createElement('h4')

    publicationDate = '';
    if (publicationDate = doc.date) {
        publicationDate = publicationDate.split(' ')[0] + " EST"; // Get YYYY-MM-DD
        publicationDate = new Date(publicationDate);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        publicationDate = publicationDate.toLocaleString('en-US', options);
    }

    a.dataset.field = 'title';
    a.href;

    if (doc.layout == 'post'){
        a.href = '/blog/' + doc.url;
    } else  {
        a.href = '/' + doc.layout + '/' + doc.url;
    }
 
    a.textContent = doc.title;

    postMetadata = [];

    if (doc.author) {
        authorName = doc.author.split('-').map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
        postMetadata.push('author: ' + authorName);
    }
    if (doc.categories) {
        postMetadata.push('categories: ' + doc.categories);
    }
    if (publicationDate) {
        postMetadata.push('published: ' + publicationDate);
    }

    h4.dataset.field = 'content';
    h4.textContent = doc.content;
    h4.style.textOverflow = 'ellipsis';
    h4.style.overflow = 'hidden';
    h4.style.whiteSpace = 'nowrap';

    li.appendChild(article);
    article.appendChild(header);
    article.appendChild(section);
    header.appendChild(h2);
    h2.appendChild(a);
    section.appendChild(h4);
    if (postMetadata) {
        p1.textContent = postMetadata.join(' / ');
        section.appendChild(p1);
    }

    return li;
  }

// Returns a Promise on successful XMLHttpRequest.
function xhrRequest(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('get',url);
        request.onload = function() {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error("File failed to load. Error code: " + request.StatusText));
            }
        };
        request.onerror = function() {
            reject(Error("The request failed."));
        };
        request.send();
    });
}

// Returns URL query string as an array.
function returnQueryArray(query_string) {
    var query_array = new Array();
    var searchVars = query_string.split('&');
    if (searchVars) {
        for (var i=0; i<searchVars.length;i++) {
            var pair = searchVars[i].split("=");
            query_array[pair[0]] = pair[1];
        }
    }
    return query_array;
}

// Builds a Lunr query string from an array.
function buildLunrQueryString(queryString, searchInputName="keywords") {
    var queryArray = new Array(),
        LunrQueryString = '',
        vars = returnQueryArray(queryString);
    if (vars) {
        console.log(vars);
        for (var key in vars) {
            value = vars[key];
            if (value != '') {
                if (key == searchInputName) {
                    termsArray = value.split(' ');
                    queryVariable = '+'+termsArray.join(' +');
                } else {
                    queryVariable = "+"+key+":"+value;
                }
                queryArray.push(queryVariable);
            }
        }
        LunrQueryString = queryArray.join(" ");
    }
    return LunrQueryString;
}

function wrapTerms(element, matches) {
    var nodeFilter = {
      acceptNode: function (node) {
        if (/^[\t\n\r ]*$/.test(node.nodeValue)) {
          return NodeFilter.FILTER_SKIP
        }
        return NodeFilter.FILTER_ACCEPT
      }
    }
    var index = 0,
        matches = matches.sort(function (a, b) { return a[0] - b[0] }).slice(),
        previousMatch = [-1, -1],
        match = matches.shift(),
        walker
    if (element instanceof Element) {
        walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          nodeFilter,
          false
        )
    } else {
        return 'not an element';
    }
    while (node = walker.nextNode()) {
      if (match == undefined) break
      if (match[0] == previousMatch[0]) continue

      var text = node.textContent,
          nodeEndIndex = index + node.length;

      if (match[0] < nodeEndIndex) {
        var range = document.createRange(),
            tag = document.createElement('mark'),
            rangeStart = match[0] - index,
            rangeEnd = rangeStart + match[1];

        tag.dataset.rangeStart = rangeStart
        tag.dataset.rangeEnd = rangeEnd

        range.setStart(node, rangeStart)
        range.setEnd(node, rangeEnd)
        range.surroundContents(tag)
        index = match[0] + match[1]

        // the next node will now actually be the text we just wrapped, so
        // we need to skip it
        walker.nextNode()
        previousMatch = match
        match = matches.shift()
      } else {
        index = nodeEndIndex
      }
    }
}
