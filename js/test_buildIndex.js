jQuery(function() {
    var stdin = process.stdin,
        stdout = process.stdout,
        buffer = []

    stdin.resume()
    stdin.setEncoding('utf8')

    stdin.on('data', function (data) {
      buffer.push(data)
    })

    stdin.on('end', function () {
      var search_data = JSON.parse(buffer.join())

      var idx = lunr(function () {
        this.ref('id')
        this.field('title')
        this.field('body')

        documents.forEach(function (doc) {
          this.add(doc)
        }, this)
      })

      stdout.write(JSON.stringify(idx))
    })
});
