const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.login(config.bot_token)

client.on('ready', () => {
	console.log('[i] Ready')
	client.user.setGame('Thanks Aren!!')
})

client.on('message', message => {
	if(message.content == 'pr:ping') {
		message.channel.send('im tired but thanks aren for helping me with the thing and stuff')
	}
	if(message.content == 'pr:poweroff' &7 message.author.id == '297201585090723841') {
		process.exit(0)
	}
	if(message.content == 'pr:gittest') {
		message.channel.send('it works')
	}
})
