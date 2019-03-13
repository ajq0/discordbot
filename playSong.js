const playFile = require('./playFile.js');
const downloadSong = require('./downloadSong');
const searchSong = require('./searchSong');

module.exports = function(searchTerm, channel) {
  console.log("playSong");
  searchSong("despacito", function(id) {
    downloadSong(id, function(file) {
      playFile(file, senderVoiceChannel);
    });
  });
}
