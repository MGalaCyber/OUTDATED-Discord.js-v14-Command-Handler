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
    name: 'testings1',
    authorOnly: false,
    category: 'Testing',
    botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
    userPerms: ['SEND_MESSAGES', 'VIEW_MESSAGE_HISTORY'],

    async execute(client, interaction, prefix) {
        try {
            interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setTitle('Success select handler')
                ]
            })

        } catch (error) {
            errorCmdLogsInt(client, interaction, error);
        }
    }
}