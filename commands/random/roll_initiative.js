const comando = require ('discord.js-commando');

class RollInitiativeCommand extends comando.Command {

    constructor(client){
        super(client, {
            name: 'initiative',
            group: 'initiative',
            memberName : 'initiative',
            description: 'Rolls initiative'
        });
    }

    async run(message){
        var temp;
        var a=1;
        var playerArray= [];
        for (var i = 0; i <= message.argString.length; i++){
            if (message.argString.charAt(i) == ","){
               // message.channel.sendMessage(message.argString.charAt(i));
                temp = message.argString.slice(a,i);
                a=i;
                playerArray.push(temp); 
            }
        }
        
        message.channel.sendMessage(playerArray);
    }
//   martin,rod  r  i  g  o  ,  l  o  r  e  n  z  o
//  012345678910 11 12 13 14 15 16 17 18 19 20 21 22 

}
module.exports = RollInitiativeCommand;

