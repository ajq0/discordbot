const playFile = require('./playFile.js');
const downloadSong = require('./downloadSong');
const searchSong = require('./searchSong');

module.exports = function(searchTerm, channel) {
  searchSong("despacito", function(id) {
    downloadSong(id, function(file) {
      playFile(file, senderVoiceChannel);
    });
  });
}
