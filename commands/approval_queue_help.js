const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Help Command',
	execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Approval Queue Help Commands")
        .addFields(
            { name: 'Team Name', value: 'tn' },
            { name: 'Team Member', value: 'tm' },
            { name: 'Strategy', value: 's' },
            { name: 'Counter Team', value: 'ct' },
            { name: 'Counter Team Strategy', value: 'cts' },
            { name: 'Exapmle', value: 'c!submit tn[Team Name Here] tm[Team Member Here] s[Strategy Here] ct[Counter Team] cts[Counter Team Strategy]' },

        )
    
        message.channel.send(embed);
	},
};
