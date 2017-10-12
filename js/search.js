"use strict";
var fs = require('fs');
var lunr = require('lunr');
var buildIndex = require('./buildIndex');
buildIndex();
let index;
fs.readFile('./test.json', (err, data) => {
  index = lunr.Index.load(JSON.parse(JSON.stringify(data)));
})
  // Event when the form is submitted
$("#site_search").submit(function(event){
  event.preventDefault();
  console.log(index);
  var query = $("#search_box").val();
  var results = index.search(query);
  display_search_results(results);
}

function display_search_results(results) {
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          // Build a snippet of HTML for this result
          var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';

          // Add the snippet to the collection of results.
          $search_results.append(appendString);
        });
      } else {
        // If there are no results, let the user know.
        $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
      }
    });
  }
