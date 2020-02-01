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

    async run(message, args){
        //We pass all the message and the arguments.
        var roll = Math.floor(Math.random() * 12 +1);
        message.reply("You rolled a " + roll);
    }

}
module.exports = RollInitiativeCommand;

