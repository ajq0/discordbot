module.exports = function(file, channel) {
  console.log("Playing file " + file);
  
  channel.join().then(connection => {
    const dispatcher = connection.playFile(file, {volume: 0.05});
    
  })
  .catch(console.error);
}
