//const Discord = require('discord.js'); //creating discord object
const comando = require('discord.js-commando');
const bot = new comando.Client(); // Para conectarse al server 

bot.registry.registerGroup('d3', 'd3');
bot.registry.registerGroup('d6', 'd6');
bot.registry.registerGroup('d10', 'd10');
bot.registry.registerGroup('d12', 'd12');
bot.registry.registerGroup('d20', 'd20');
bot.registry.registerGroup('initiative', 'initiative');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");



/* Function to reply user with something predetermined.
bot.on('message', (message) => {
console.log(message.content);

    if (message.content.substr(0,message.content.length) == 'hello'){

        
        message.channel.sendMessage('Hey how are you doing?');
        //message.reply('pong');
    }


});*/

bot.login('NjcyMjA5NDEwMTM4ODMyOTE5.XjIJ_g.UaMkLC-PqStkBD1YD-qydblE1Xg');
