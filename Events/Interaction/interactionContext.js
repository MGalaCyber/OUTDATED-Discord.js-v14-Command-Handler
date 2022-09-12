//=====================================| Import the Module |=====================================\

const { EmbedBuilder, InteractionCreate, InteractionType, Collection, PermissionsBitField, ChannelType } = require('discord.js');
const { errorCmdLogsInt } = require(`../../Structures/Functions/errorCmdLogs.js`);
const { onCoolDownInt } = require(`../../Structures/Functions/onCoolDown.js`);
const Settings = require(`../../Structures/Settings/settings.json`);
const Config = require(`../../Structures/Settings/config.json`);
const Emoji = require(`../../Structures/Settings/emojis.json`);
const Embed = require(`../../Structures/Settings/embed.json`);
const { author, version } = require(`../../package.json`);
const cooldown = new Collection();
const prefix = '/';

//=====================================| Code |=====================================\

module.exports = {
    name: 'interactionCreate',

    /**
     * 
     * @param {Client} client 
     * @param {InteractionCreate} interaction 
     */
    
    async execute(interaction, client) {
        try {
            //=====================================| Command Handling |=====================================\\
            if (interaction.isContextMenuCommand()) {
                if (!interaction.guild) {
                    return interaction.reply({
                        ephemeral: true,
                        content: `${Emoji.Message.ERROR} You do not have to use this command in DMs!`
                    })
                }
                if (interaction.user.bot) return;

                const command = client.slash.get(interaction.commandName);
                if (!command) return client.slash.delete(interaction.commandName);

            // ========================================| Other list Handler |======================================= \\

            // ====================< Official/Private Guilds only Check >=================== \\
                const private = Config.SERVER_ID.OFFICIAL && Config.SERVER_ID.TEST;
                if (command.guildOnly && !private.includes(interaction.guild.id)) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You can't use this Command!`)
                                .setDescription(`The command \`${interaction.commandName}\` can only be used in the official server.`)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ],
                        components: [
                            new ActionRowBuilder().addComponents(
                                    new ButtonBuilder().setLabel('Click here').setStyle(ButtonStyle.Link).setURL(Config.CONNECTIONS.SUPPORT_URL.DISCORD_SUPPORT).setEmoji(Emoji.Buttons.Others.Support).setDisabled(false),
                                )
                            ]
                    })
                }

            // ====================< Enable/Disable Check >=================== \\
                if (command.toggleOff) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You can't use this Command!`)
                                .setDescription(`The command \`${interaction.commandName}\` has been disabled by the Developer! Please try again later.`)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }

            // ====================< Enable/Disable Check >=================== \\
                if (command.maintenanceCmd) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You can't use this Command!`)
                                .setDescription(`The command \`${interaction.commandName}\` has been maintenance, because the command is currently bug fixed! Please try again later.`)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }

                // ====================< Voice Only Check >=================== \\
                if (command.voiceOnly && !interaction.type === ChannelType.GuildVoice) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You can't use this Command!`)
                                .setDescription(`The command \`${interaction.commandName}\` only can use if you join to the voice! Please join to voice and Please try again later.`)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }

            // ====================< NSFW only Check >=================== \\
                if (command.nsfwOnly && !interaction.channel.nsfw) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setDescription(`${Emoji.Message.ERROR} This command can only be used in NSFW channels!`)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }

            // ====================< Bots Permissions Check >=================== \\
                if (command.botPerms && !interaction.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms))) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setDescription(`${Emoji.Message.ERROR} I don't have the required permissions to use this command\n \`${command.botPerms.join(`, `)}\``)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }

            // ====================< Members Permissions Check >=================== \\
                if (command.userPerms && !interaction.memberPermissions.has(PermissionsBitField.resolve(command.userPerms))) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setDescription(`${Emoji.Message.ERROR} You don't have the required permissions to use this command\n \`${command.userPerms.join(`, `)}\``)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }

            // ====================< Cooldown Check InterrorCmdLogsInt=================== \\
                if (command.cooldown && onCoolDownInt(interaction, command)) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} You have been cooldown for \`${command.cooldown}\` seconds!`)
                                .setDescription(`Please wait \`${onCoolDownInt(interaction, command).toFixed(1)}\` Before using the \`${command.name}\` command again!`)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }
    
            // ====================< Start Command >=================== \\
                try {
                    command.execute(client, interaction, prefix);
                } catch (error) {
                    console.log(error);
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setDescription(`${Emoji.Message.ERROR} There was an error trying to execute that command!`)
                                .setDescription(`There was an error trying to execute that command.`)
                                .addField('Error', `\`\`\`${error}\`\`\``)
                                .setFooter(`${Embed.footertext} · v${version}`, client.user.displayAvatarURL())
                        ]
                    })
                }
            }
    
        } catch (error) {
            errorCmdLogsInt(client, interaction, error);
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