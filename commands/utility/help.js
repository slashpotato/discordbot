const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Lists available commands'),
	async execute(interaction) {
		await interaction.reply({ content: 'WIP', ephemeral: true });
	},
};
