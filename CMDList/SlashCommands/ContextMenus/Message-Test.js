//=====================================| Import the Module |=====================================\

const { EmbedBuilder, ApplicationCommandType, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require('discord.js');
const { errorCmdLogsInt } = require(`../../../Structures/Functions/errorCmdLogs.js`);
const Settings = require(`../../../Structures/Settings/settings.json`);
const Config = require(`../../../Structures/Settings/config.json`);
const Emoji = require(`../../../Structures/Settings/emojis.json`);
const Embed = require(`../../../Structures/Settings/embed.json`);
const { author, version } = require(`../../../package.json`);
require('ms');

//=====================================| Code |=====================================\

module.exports = {
    name: 'Copy',
    cooldown: 15,
    category: 'Context',
    type: ApplicationCommandType.Message,
    //========| Options Settings |========\\
    ownerOnly: false,
    guildOnly: false,
    toggleOff: false,
    voiceOnly: false,
    nsfwOnly: false,
    maintenanceCmd: false,
    //========| Permissions Settings |========\\
    botPerms: [],
    userPerms: [],
    //========| Options Settings |========\\
    options: [],

    async execute(client, interaction, args, prefix) {
        try {
            const target = await interaction.targetMessage;
            interaction.reply({
                ephemeral: true,
                content: `I copied text: \`${target}\``
            })

        } catch (error) {
            errorCmdLogsInt(client, interaction, error);
        }
    },
};




/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */