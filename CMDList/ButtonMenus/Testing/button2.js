//=====================================| Import the Module |=====================================\

const { EmbedBuilder, ModalBuilder, ActionRowBuilder, TextInputComponent } = require('discord.js');
const { errorCmdLogsInt } = require(`../../../Structures/Functions/errorCmdLogs.js`);
const Settings = require(`../../../Structures/Settings/settings.json`);
const Config = require(`../../../Structures/Settings/config.json`);
const Emoji = require(`../../../Structures/Settings/emojis.json`);
const Embed = require(`../../../Structures/Settings/embed.json`);
const { author, version } = require(`../../../package.json`);

//=====================================| Code |=====================================\

module.exports = {
    name: 'testingbm1',
    authorOnly: false,
    category: 'Testing',
    botPerms: ['SEND_MESSAGES', 'EMBED_LINKS'],
    userPerms: ['SEND_MESSAGES', 'VIEW_MESSAGE_HISTORY'],

    async execute(client, interaction, prefix) {
        try {
            const testingModal = new ModalBuilder()
                .setCustomId('testingm1')
                .setTitle('Testing')
                testingModal.addComponents(
                    new ActionRowBuilder().addComponents(
                        new TextInputComponent()
                            .setCustomId('input-text')
                            .setLabel(`Input text here?`)
                            .setStyle('SHORT') // SHORT or PARAGRAPH
                            .setMinLength(18)
                            .setMaxLength(18)
                            .setPlaceholder('Write your text here...')
                            .setRequired(true)
                    ),
                )

            await interaction.showModal(testingModal);

        } catch (error) {
            errorCmdLogsInt(client, interaction, error);
        }
    }
}