const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //console.log('ID: ' + client.user.id);
});

client.on('message', message => {
	if (message.channel == '<The #channelID goes here>'){ //Channel = #reading
		if (message.author.id != '486505424305127448'){ //Author != BOT
			var check = message.content;
			var numberOfLineBreaks = (check.match(/\n/g)||[]).length;

			//console.log('Number of Breaks: ' + numberOfLineBreaks);

			var deleted = 0;

			if (numberOfLineBreaks == 3){
				var splitted_check = check.split("\n"); //Split on line breaks

				if (splitted_check[0].substring(0,16) != 'Artist - Title: '){ //First Line
					message.delete(5000);
					deleted = 1;
				}
				if (splitted_check[1].substring(0,16) != 'Mapset creator: '){ //Second Line
					message.delete(5000);
					deleted = 1;
				}
				if (splitted_check[2].substring(0,6) != 'Link: '){			  //Third Line
					message.delete(5000);
					deleted = 1;
				}															  //Last Line
				if (splitted_check[3].substring(0,30) != 'Description/Reason for Loved: '){
					message.delete(5000);
					deleted = 1;
				}

				if (splitted_check[3].length > 255){
					message.delete(5000);
					message.reply('Please don\'t use more than 255 characters on your description');
				}
			}
			else{
				message.delete(5000);
				deleted = 1;
			}

			if (Boolean(deleted)){
				message.reply('Please use the right format (See pinned message)');
			}
		}
		else{
			message.delete(4900);
		}
	}
});

client.login('Your API Key goes here');
