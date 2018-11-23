const { exec } = require('child_process');

module.exports = function(youtubeId, receiver) {
  console.log("Downloading " + youtubeId);
  exec('youtube-dl https://www.youtube.com/watch?v=' + youtubeId + ' -f bestaudio -o "download/%(id)s' /*+ '.%(ext)s'*/ + '"',
  (err, stdout, stderr) => {
    receiver(youtubeId);
  });
  return youtubeId;
}
