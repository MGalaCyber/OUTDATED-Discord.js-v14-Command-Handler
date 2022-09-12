//=====================================| Import the Module |=====================================\

const { errorCmdLogsInt } = require(`../../../Structures/Functions/errorCmdLogs.js`);
const Settings = require(`../../../Structures/Settings/settings.json`);
const Config = require(`../../../Structures/Settings/config.json`);
const Emoji = require(`../../../Structures/Settings/emojis.json`);
const Embed = require(`../../../Structures/Settings/embed.json`);
const { author, version } = require(`../../../package.json`);
const { EmbedBuilder } = require('discord.js');

//=====================================| Code |=====================================\

module.exports = {
    name: 'testingm1',
    authorOnly: false,
    category: 'Testing',

    async execute(client, interaction, prefix) {
        try {
            const text = interaction.fields.getTextInputValue('input-text');
            interaction.channel.send({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setTitle('Success modal handler')
                        .setDescription(`You have sent a \`${text}\``)
                ]
            })

            interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setColor(Embed.Colors.SuccessColor)
                        .setTitle(`${Emoji.Message.SUCCESS} Testing Modal Submitted!`)
                ]
            })

        } catch (error) {
            errorCmdLogsInt(client, interaction, error);
        }
    }
}