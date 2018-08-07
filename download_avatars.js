var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
  var URL = {
    uri: 'api.github.com',
    path: `/repos/${repoOwner}/${repoName}/contributors`
  }
const options = {
  url: 'https://' + URL.uri + URL.path,
  headers: {
    'User-Agent': 'request'
  }
};

  request.get(options, function (error, result) {

  cb(error, result);
  console.log('error:', error);
  console.log('result:', result); // Print the response status code if a response was received
  });
}

getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});