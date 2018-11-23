(aynsc function(){

  const Discord = require('discord.js')
  const fs = require('fs-extra')

  let token = ''

  fs.readJson('./auth.json').then( f => {

    token = f.token

    console.log(token)

    const bot = new Discord.Client()

    bot.on('ready', ()=>{
      console.log('HI')
    })

    bot.on('message', msg =>{

      const name = msg.author.username
      const channel = msg.channel
      const message = msg.content

      if(name === 'super-monkey-bot') return


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
      }*/\

    })

    bot.login(token)
  })
})()
