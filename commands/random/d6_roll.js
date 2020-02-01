const comando = require ('discord.js-commando');

class D6RollCommand extends comando.Command {

    constructor(client){
        super(client, {
            name: 'd6',
            group: 'd6',
            memberName : 'd6',
            description: 'Rolls a d6 dice'
        });
    }

    async run(message, args){
        //We pass all the message and the arguments.
        var roll = Math.floor(Math.random() * 6 +1);
        message.reply("You rolled a " + roll);
    }

}
module.exports = D6RollCommand;