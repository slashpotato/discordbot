const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Clears messages')

		.addIntegerOption(amount =>
			amount.setName('amount')
				.setDescription('Anount of messages to delete')
				.setRequired(true),
		),

	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');
		await interaction.channel.bulkDelete(amount);
		await interaction.reply({ content: 'Deleted ' + amount + ' messages', ephemeral: true });
	},
};