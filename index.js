const playSong = require('./playSong');
(function(){
  
  
  const Discord = require('discord.js')
  const fs = require('fs-extra')
  const _ = require('lodash')

  process.on('uncaughtException', (err) => {
    fs.writeSync(1, `Caught exception: ${err}\n`);
  });
  
  process.on('unhandledRejection', (reason, p) => {
      console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
      // application specific logging, throwing an error, or other logic here
  });

  let token = ''

  fs.readJson('./auth.json').then( f => {

    token = f.token

    const bot = new Discord.Client()

    bot.on('ready', ()=>{
    
      server = bot.guilds.first()

      let activeVoiceChannels = bot.channels.filter(e=>e.type === 'voice' && e.members.array().length > 0)
      //console.log(activeVoiceChannels)

     /* let rec = []
      activeVoiceChannels.tap(c => {
        c.join().then(connection => {
          //const reciever = connection.createReciever()
          //console.log(reciever)
        })
      })*/
      
    })

    bot.on('message', msg =>{

      const name = msg.author.username
      const channel = msg.channel
      const message = msg.content

      if(name === 'eschenBot') return
      
      console.log(name)
      console.log(message)

      //channel.send('!play despacito')
      
      if(message=="Playtest")
      {
        if (bot.voiceConnections.array().length >= 1)
        {
          console.log("already connected");
        }
        senderVoiceChannel = bot.channels.find(e=>e.type === 'voice' && e.members.array().find(e=>e.id == msg.author.id))
        playSong("despacito", senderVoiceChannel);
        
        bot.on('voiceStateUpdate', update =>{
          if(senderVoiceChannel.members.array().length == 1) {
            senderVoiceChannel.leave()
          }
        })
      }


      //msg.edit(newVal, )

      /*
        else if(name === 'Bolivar'){
        channel.send('stfu stephan')
      }else if(name === 'Supermonkey'){
        channel.send('thats cool ma nigga')
      }else if(name === 'CheeseNCrack'){
        channel.send('ur cool too')
      }else if(name === 'Rythm'){
        channel.send('thats my jam')
      }else{
        console.log(name)
      }*/

    })

    bot.login(token)
  })
})()
