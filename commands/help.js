const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Help Command',
	execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle("This is a dummy test")
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
    
        message.channel.send(embed);
	},
};
