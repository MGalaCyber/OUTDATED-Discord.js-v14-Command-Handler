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
    name: 'ping',
    cooldown: 15,
    category: 'Info',
    description: 'View Discord bot ping.',
    type: ApplicationCommandType.ChatInput,
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
            interaction.reply({
                ephemeral: true,
                content: 'pong!'
            })
            //     // Function Uptime
            //         let days = Math.floor(client.uptime / 86400000)
            //         let hours = Math.floor(client.uptime / 3600000) % 24
            //         let minutes = Math.floor(client.uptime / 60000) % 60
            //         let seconds = Math.floor(client.uptime / 1000) % 60

            //     // Latency Check
            //         let webLatency = new Date() - interaction.createdAt
            //         let apiLatency = client.ws.ping
            //         let totalLatency = webLatency + apiLatency

            //     // Emoji
            //         let emLatency = {
            //             Green: '🟢',
            //             Yellow: '🟡',
            //             Red: '🔴'
            //         }

            // interaction.reply({
            //     embeds: [
            //         new EmbedBuilder()
            //             .setColor(totalLatency < 200 ? Embed.Colors.successcolor : totalLatency < 500 ? Embed.Colors.stanbycolor : Embed.Colors.wrongcolor)
            //             .setTitle(`Returns Latency And API Ping`)
            //             .setFields([
            //                 {
            //                     name: `📡 Websocket Latency`,
            //                     value: `\`${webLatency <= 200 ? emLatency.Green : webLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${webLatency}\`ms`,
            //                     inline: true
            //                 },
            //                 {
            //                     name: `🛰 API Latency`,
            //                     value: `\`${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${apiLatency}\`ms`,
            //                     inline: true
            //                 },
            //                 {
            //                     name: `⏲ Uptime`,
            //                     value: `\`${days}Days\` : \`${hours}Hrs\` : \`${minutes}Mins\` : \`${seconds}Secs\``,
            //                     inline: true
            //                 }
            //             ])
            //             .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
            //     ],
            //     ephemeral: true
            // })

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