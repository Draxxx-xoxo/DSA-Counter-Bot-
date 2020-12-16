const Discord = require('discord.js');
const client = new Discord.Client();
const { mainprefix, token } = require('./config.json');



client.once('ready', async () => {
    console.log('approval.js Running!');
});

client.on('message', async message => {
    
    if (message.content.toLowerCase().startsWith(`c!submit`))
    {
        var msg = '';
        var strategy = '';
        var team_name = '';
        var team_member = '';
        var counter_team = '';
        var counter_team_strategy = '';
        var servers = [];

        msg = message.content.replace('e!submit ', '');

        // ********************************
        // Parse Title
        // ********************************
        if (msg.indexOf('tn[') >= 0){
            var start = msg.indexOf('tn[');
            var end = msg.indexOf(']');
            team_name = msg.substring(start + 3, end);

            msg = msg.replace('tn[' + team_name + ']', '');
        }

        // ********************************
        // Parse Description
        // ********************************
        if (msg.indexOf('tm[') >= 0){
            var start = msg.indexOf('tm[');
            var end = msg.indexOf(']');
            team_member = msg.substring(start + 3, end);

            msg = msg.replace('tm[' + team_member + ']', '');
        }

        if (msg.indexOf('s[') >= 0){
            var start = msg.indexOf('s[');
            var end = msg.indexOf(']');
            strategy = msg.substring(start + 2, end);

            msg = msg.replace('s[' + strategy + ']', '');
        }

        if (msg.indexOf('ct[') >= 0){
            var start = msg.indexOf('ct[');
            var end = msg.indexOf(']');
            counter_team = msg.substring(start + 3, end);

            msg = msg.replace('ct[' + counter_team + ']', '');
        }

        if (msg.indexOf('cts[') >= 0){
            var start = msg.indexOf('cts[');
            var end = msg.indexOf(']');
            counter_team_strategy = msg.substring(start + 4, end);

            msg = msg.replace('cts[' + counter_team_strategy + ']', '');
        }

            const embed = new Discord.MessageEmbed()
                .setColor('#ddbfac')
                .setTitle(team_name)
                .setDescription('__**Team**__ ```' + team_member + '```' )
                .addFields(
                    { name: '__**Strategy**__', value: '```' + strategy + '```'},
                    { name: '__**Team 1**__', value: '```' + counter_team + '```\n' + counter_team_strategy},

                )

            message.channel.send(embed);        
                
    }
});


client.login(token);