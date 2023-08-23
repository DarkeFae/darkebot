const { SlashCommandBuilder } = require('discord.js');
console.log('ping.js loaded');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping1')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
