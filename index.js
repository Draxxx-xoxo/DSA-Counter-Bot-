const fs = require('fs');
const Discord = require('discord.js');
const { mainprefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

approval = require('./approval_queue');
counter_team = require('./counter_team');


client.on('message', message => {
	if (!message.content.startsWith(mainprefix) || message.author.bot) return;

	const args = message.content.slice(mainprefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
        client.commands.get('help').execute(message, args);
	}

	else if (command === 'approval') {
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
    }
});


client.login(process.env.token);