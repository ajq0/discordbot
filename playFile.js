module.exports = function(file, channel) {
  console.log("Playing file " + file);
  
  channel.join().then(connection => {
    console.log("joined channel, playing now");
    
    connection.on('error', message =>{
      console.log(message);
    });
    connection.on('debug', message =>{
      console.log(message);
    });
    connection.on('disconnect', e =>{
      console.log("Disconnected");
    });
    
    
    //const dispatcher = connection.playFile(file, {volume: 1});
    const dispatcher = connection.playFile("./download/test.mp3");
    dispatcher.on('error', message =>{
      console.log(message);
    });
    dispatcher.on('debug', message =>{
      console.log(message);
    });
    dispatcher.on('speaking', speaking =>{
      console.log("Speaking: " + speaking);
    });
    dispatcher.on('end', message =>{
      console.log("Ended. Reason: " + message);
    });
    dispatcher.on('start', e =>{
      console.log("starting");
    });
    
    console.log("resuming");
    
    dispatcher.resume();
    
  })
  .catch(console.error);
}
