const { Events } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setPresence({
			status: 'dnd',
		});
		const timestamp = Date.now();
		client.channels.cache.get(process.env.LOG_CHANNEL).send('`[<t:' + timestamp + ':f>]` Started bot');
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
