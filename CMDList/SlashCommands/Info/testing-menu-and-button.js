// //=====================================| Import the Module |=====================================\

// const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, SelectMenuBuilder, ApplicationCommandType } = require('discord.js');
// const { errorCmdLogsInt } = require(`../../../Structures/Functions/errorCmdLogs.js`);
// const Settings = require(`../../../Structures/Settings/settings.json`);
// const Config = require(`../../../Structures/Settings/config.json`);
// const Emoji = require(`../../../Structures/Settings/emojis.json`);
// const Embed = require(`../../../Structures/Settings/embed.json`);
// const { author, version } = require(`../../../package.json`);
// require('ms');

// //=====================================| Code |=====================================\

// module.exports = {
//     name: 'testing',
//     cooldown: 15,
//     category: 'Info',
//     description: 'testing the other command',
//     type: ApplicationCommandType.ChatInput,
//     //========| Options Settings |========\\
//     guildOnly: false,
//     toggleOff: false,
//     voiceOnly: false,
//     nsfwOnly: false,
//     maintenanceCmd: false,
//     //========| Permissions Settings |========\\
//     botPerms: ['SEND_MESSAGES', 'READ_MESSAGE_HISTORY', 'USE_EXTERNAL_EMOJIS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS'],
//     userPerms: ['SEND_MESSAGES'],

//     async execute(client, interaction, args, prefix) {
//         try {
//             const embedz = new EmbedBuilder()
//                 .setTitle('Please testing button menu/select menu/modal')

//             const btnRow = new ActionRowBuilder().addComponents(
//                 new ButtonBuilder().setCustomId('testingb1').setLabel('Testing Button').setStyle(ButtonStyle.Success),
//                 new ButtonBuilder().setCustomId('testingbm1').setLabel('Testing Modal').setStyle(ButtonStyle.Success),
//             )

//             const menuRow = new ActionRowBuilder().addComponents(
//                 new SelectMenuBuilder().setCustomId('testings1').setPlaceholder('please select one').addOptions([
//                     { label: 'select 1', value: 'select1' },
//                 ])
//             )

//             interaction.reply({
//                 embeds: [embedz],
//                 components: [btnRow, menuRow]
//             })

//         } catch (error) {
//             errorCmdLogsInt(client, interaction, error);
//         }
//     },
// };




// /**
// /////////////////////////////////////////////////////////////////////
// ////                                                             ////
// \\\\               Handlers Coded by GalaXd#9165                 \\\\
// ////                                                             ////
// \\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
// ////                                                             ////
// \\\\                    All Right Reserved!                      \\\\
// ////                                                             ////
// /////////////////////////////////////////////////////////////////////
//  */