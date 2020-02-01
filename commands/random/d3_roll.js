const comando = require ('discord.js-commando');

class D3RollCommand extends comando.Command {

    constructor(client){
        super(client, {
            name: 'd3',
            group: 'd3',
            memberName : 'd3',
            description: 'Rolls a d3 dice'
        });
    }

    async run(message, args){
        //We pass all the message and the arguments.
        var roll = Math.floor(Math.random() * 3 +1);
        message.reply("You rolled a " + roll);
    }

}


module.exports = D3RollCommand;