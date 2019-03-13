const fs = require('fs-extra');
//const request = require('request');
const https = require('https');

module.exports = function(searchTerm, receiver) {
  console.log("Searching for " + searchTerm);
  fs.readJson('./youtubeApiKey.json').then(api => {
    requestUrl = {
      host: "https://www.googleapis.com",
      path: "/youtube/v3/search?q=" + searchTerm + "&maxResults=1&part=snippet&key=" + api.key
    };
    
    var req = https.get(requestUrl.host + requestUrl.path, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));

      // Buffer the body entirely for processing as a whole.
      var bodyChunks = [];
      res.on('data', function(chunk) {
        // You can process streamed parts here...
        bodyChunks.push(chunk);
      }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);
        values = JSON.parse(body);
        id = values.items[0].id.videoId;
        console.log("id: " + id);
        receiver(id);
      })
    })

    req.on('error', function(e) {
      console.log('ERROR: ' + e.message);
    });


    
    /*console.log(requestUrl);
    request.post(requestUrl,
      function (error, response, body) {
        if (!error) {
          console.log("Response body: " + body);
          console.log("Response headers: " + response.headers);
          console.log("Response status code: " + response.statusCode);
          values = JSON.parse(body);
          id = values.items[0].id.videoId;
          console.log("id: " + id);
          receiver(id);
        }
        else {
          console.log("Request error: " + error)
        }
      }
    );*/
  });
}
