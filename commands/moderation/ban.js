const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans member')

		.addUserOption(member =>
			member.setName('member')
				.setDescription('Member to ban')
				.setRequired(true),
		),

	async execute(interaction) {
		const member = interaction.options.getUser('member');
		// guild.members.ban('84484653687267328');
		await interaction.reply({ content: 'Banned ' + member, ephemeral: true });
	},
};