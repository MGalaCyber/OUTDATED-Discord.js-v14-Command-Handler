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
    name: 'Avatar',
    cooldown: 15,
    category: 'Context',
    type: ApplicationCommandType.User,
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
            const target = await interaction.targetMember;
            interaction.reply({
                ephemeral: true,
                embeds: [
                    new EmbedBuilder()
                        .setTitle('Avatar of ' + target.tag)
                        .setImage(target.displayAvatarURL({ dynamic: true }))
                ]
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