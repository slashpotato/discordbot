const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verifymsg')
		.setDescription('Send verify message'),

	async execute(interaction) {
		const btn_verify = new ButtonBuilder()
			.setCustomId('btn_verify')
			.setLabel('Verify')
			.setEmoji('✅')
			.setStyle(ButtonStyle.Primary);

		const row = new ActionRowBuilder()
			.addComponents(btn_verify);

		await interaction.channel.send({
			content: 'Please, press this button to verify!',
			components: [row],
		});
	},
};
