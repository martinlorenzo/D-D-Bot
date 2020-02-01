const comando = require ('discord.js-commando');

class D10RollCommand extends comando.Command {

    constructor(client){
        super(client, {
            name: 'd10',
            group: 'd10',
            memberName : 'd10',
            description: 'Rolls a d10 dice'
        });
    }

    async run(message, args){
        //We pass all the message and the arguments.
        var roll = Math.floor(Math.random() * 10 +1);
        message.reply("You rolled a " + roll);
    }

}
module.exports = D10RollCommand;

