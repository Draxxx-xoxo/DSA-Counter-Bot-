const fs = require('fs');
const Discord = require('discord.js');
const { counterprefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


client.once('ready', () => {
	console.log('Counter Teams Ready!');
});



	

client.on('message', message => {
    
	let rawdata = fs.readFileSync('./counter_team.json');
	let counterteam = JSON.parse(rawdata);
	

    if (message.content.toLowerCase().startsWith(counterprefix)){

		var command = message.content.replace(counterprefix, '');
		var command = message.content.slice(10);


		var characters = counterteam[command].Characters
		var spells = counterteam[command].Spells 
		var strategy = counterteam[command].Strategy
		var counter_team = counterteam[command].Counter_Team
		var counter_team_strategy = counterteam[command].Counter_Team_Strategy


		const embed = new Discord.MessageEmbed()
		.setColor('#ddbfac')
		.setTitle(command)
		.setDescription('__**Team**__ ```' + characters + '||' + spells + '```' )
		.addFields(
			{ name: '__**Strategy**__', value: '```' + strategy + '```'},
			{ name: '__**Team 1**__', value: '```' + counter_team + '```\n' + counter_team_strategy},

		)
		message.channel.send(embed);
		console.log(command);
	}
});


client.login(token);