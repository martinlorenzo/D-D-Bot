const comando = require ('discord.js-commando');

class D12RollCommand extends comando.Command {

    constructor(client){
        super(client, {
            name: 'd12',
            group: 'd12',
            memberName : 'd12',
            description: 'Rolls a d12 dice'
        });
    }

    async run(message, args){
        //We pass all the message and the arguments.
        var roll = Math.floor(Math.random() * 12 +1);
        message.reply("You rolled a " + roll);
    }

}
module.exports = D12RollCommand;

