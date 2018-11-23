module.exports = function(channel) {
  channel.join().then(connection => {
    const dispatcher = connection.playFile('./download/song.mp3')
  })
  .catch(console.error);
}
