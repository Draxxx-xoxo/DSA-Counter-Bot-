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

	if (command === 'approval') {
        client.commands.get('approval_queue_help').execute(message, args);
    }
});


client.login(token);