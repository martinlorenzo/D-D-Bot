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
        var lmao = [];
        message.argString.trimStart();
        playerArray.push(message.argString.split(","));
        var newPos, temp;
        for (var i = playerArray[0].length - 1; i > 0; i--){
            newPos = Math.floor(Math.random()* (i + 1));
            temp = playerArray[0][i];
            playerArray[0][i] = playerArray[0][newPos];
            playerArray[0][newPos] = temp;
        }
              
        message.channel.sendMessage(playerArray[0]);
    }


}
module.exports = RollInitiativeCommand;

