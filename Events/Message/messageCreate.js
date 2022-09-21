//=====================================| Import the Module |=====================================\\

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Message, Collection, PermissionsBitField, ChannelType } = require('discord.js');
const { errorCmdLogsMsg } = require(`../../Structures/Functions/errorCmdLogs.js`);
const { onCoolDownMsg } = require(`../../Structures/Functions/onCoolDown.js`);
const Settings = require(`../../Structures/Settings/settings.json`);
const Config = require(`../../Structures/Settings/config.json`);
const Emoji = require(`../../Structures/Settings/emojis.json`);
const Embed = require(`../../Structures/Settings/embed.json`);
const { author, version } = require(`../../package.json`);
// =======================================================
const prefix = Config.SETTINGS.PREFIX;
const cooldown = new Collection();

//=====================================| Code |=====================================\\

module.exports = {
    name: 'messageCreate',

    /**
     * 
     * @param {Message} message 
     * @param {Client} client 
     * @returns 
     */
    async execute(message, client) {
        try {
            //=====================================| Command Handling |=====================================\\
            if (!message.content.startsWith(prefix) || message.author.bot) return;

            // ====================< Mention Prefix >=================== \\
            if (message.content.startsWith(`<@${client.user.id}>`)) {
                return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.successsolor)
                            .setTitle(`${Emoji.Message.SUCCESS} ${message.author.username} I am here!`)
                            .setDescription(`You can use \`${prefix}help\` to see all the message commands. or, you can use \`/help\` to see all the slash commands.`)
                            .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }
    
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
            const command = client.commands.get(commandName)
                || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
                || client.commands.find(cmd => cmd.cooldowns && cmd.cooldowns.includes(commandName))
                || client.commands.find(cmd => cmd.category && cmd.category.includes(commandName))
                || client.commands.find(cmd => cmd.description && cmd.description.includes(commandName))
                || client.commands.find(cmd => cmd.usage && cmd.usage.includes(commandName))
            ;
    
            // ====================< If the command doesn't exist, return >=================== \\
            if (!command) {
                return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.wrongcolor)
                            .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You have entered an invalid command!`)
                            .setDescription(`The command \`${commandName}\` does not exist.\nPlease use \`${prefix}help\` to see all the commands.`)
                            .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                    ]
                }).then(m => setTimeout(() => m.delete(), 6000));
            }
    
            // ========================================| Other list Handler |======================================= \\
            
            // ====================< Owners only Check >=================== \\
                const staff = Config.DEVELOPER.OWNER;
                if (command.ownerOnly && !staff.includes(message.author.id)) {
                    return message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You have entered an invalid command!`)
                                .setDescription(`The command \`${commandName}\` does not exist.\nPlease use \`${prefix}help\` to see all the commands.`)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                            ]
                        }).then(m => setTimeout(() => m.delete(), 6000));
                    }
    
            // ==================== Official/Private Guilds only Check =================== \\
                const private = Config.SERVER_ID.OFFICIAL && Config.SERVER_ID.TEST;
                if (command.guildOnly && !private.includes(message.guild.id)) {
                    return message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You have entered an invalid command!`)
                                .setDescription(`The command \`${commandName}\` can only be used in the official server.`)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                            ],
                            components: [
                                new ActionRowBuilder().addComponents(
                                        new ButtonBuilder().setLabel('Click here').setStyle(ButtonStyle.Link).setURL(Config.CONNECTIONS.SUPPORT_URL.DISCORD_SUPPORT).setEmoji(Emoji.Buttons.Others.Support).setDisabled(false),
                                    )
                                ]
                        }).then(m => setTimeout(() => m.delete(), 6000));
                    }

            // ====================< Enable/Disable Check >=================== \\
                if (command.toggleOff) {
                    return message.reply({

                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You can't use this Command!`)
                                .setDescription(`The command \`${message.commandName}\` has been disabled by the Developer! Please try again later.`)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                        ]
                    })
                }

            // ====================< MaintenanceCmd Check >=================== \\
                if (command.maintenanceCmd) {
                    return message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You can't use this Command!`)
                                .setDescription(`The command \`${message.commandName}\` has been maintenance, because the command is currently bug fixed! Please try again later.`)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                        ]
                    })
                }

            // ====================< Voice Only Check >=================== \\
                if (command.voiceOnly && !message.type === ChannelType.GuildVoice) {
                    return message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You can't use this Command!`)
                                .setDescription(`The command \`${message.commandName}\` only can use if you join to the voice! Please join to voice and Please try again later.`)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                        ]
                    })
                }
    
            // ====================< NSFW only Check >=================== \\
                if (command.nsfwOnly && !message.channel.nsfw) {
                    return message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} ${message.author.username} This command only works in NSFW channels!`)
                                .setDescription(`Please go to the NSFW channel to use this command!`)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                            ]
                        }).then(m => setTimeout(() => m.delete(), 6000));
                    }
    
            // ====================< Bots Permissions Check >=================== \\
                if (command.botPerms && !message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
                    return message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} I do not have the required permissions to execute this command!`)
                                .setDescription(`I need the following permissions: \`${command.botPerms}\``)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                            ]
                        }).then(m => setTimeout(() => m.delete(), 6000));
                    }
    
            // ====================< Users Permissions Check >=================== \\
                if (command.userPerms && !message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
                    return message.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} ${message.author.username} You do not have the required permissions to execute this command!`)
                                .setDescription(`You need the following permissions: \`${command.userPerms}\``)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                            ]
                        }).then(m => setTimeout(() => m.delete(), 6000));
                    }
    
            // ====================< Cooldown Check >=================== \\
            if (onCoolDownMsg(message, command)) {
                return message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.wrongcolor)
                            .setTitle(`${Emoji.Message.ERROR} ${message.author.username}, You have been cooldown for \`${command.cooldown}\` seconds!`)
                            .setDescription(`Please wait \`${onCoolDownMsg(message, command).toFixed(1)}\` Before using the \`${command.name}\` command again!`)
                            .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                        ]
                    }).then(m => setTimeout(() => m.delete(), onCoolDownMsg(message, command) * 1000));
                }
            
            // ====================< Start Command >=================== \\
            try {
                command.execute(message, args, client, prefix);
            } catch (error) {
                console.error(error);
                message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(Embed.Colors.wrongcolor)
                            .setTitle(`${Emoji.Message.ERROR} ${message.author.username} There was an error trying to execute that command!`)
                            .setDescription(`There was an error trying to execute that command.`)
                            .addField('Error', `\`\`\`${error}\`\`\``)
                            .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                        ]
                    }).then(m => setTimeout(() => m.delete(), 6000));
                }
    
        // ====================< Error Logs >=================== \\
        } catch (error) {
            errorCmdLogsMsg(client, message, error);
        }
    }
}




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