const comando = require ('discord.js-commando');

class D20RollCommand extends comando.Command {

    constructor(client){
        super(client, {
            name: 'd20',
            group: 'd20',
            memberName : 'd20',
            description: 'Rolls a d20 dice'
        });
    }

    async run(message, args){
        //We pass all the message and the arguments.
        var roll = Math.floor(Math.random() * 20 +1);
        message.reply("You rolled a " + roll);
    }

}
module.exports = D20RollCommand;

