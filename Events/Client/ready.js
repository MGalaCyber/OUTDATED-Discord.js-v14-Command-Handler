//=====================================| Import the Module |=====================================\\

const Settings = require(`../../Structures/Settings/settings.json`);
const Config = require(`../../Structures//Settings/config.json`);
const Emoji = require(`../../Structures//Settings/emojis.json`);
const Embed = require(`../../Structures//Settings/embed.json`);
const { author, version } = require(`../../package.json`);
const { ActivityType } = require('discord.js');
const Discord = require('discord.js');
const color = require('colors');
require('dotenv').config();
require('ms');

//=====================================| Code |=====================================\\

module.exports = {
  name: 'ready',
  once: true,
  
  async execute(client) {
      console.table({
          'Name': client.user.tag,
          'Author': `${author}`,
          'Version': `v${version}`,
          'Status': `${client.user.presence.status}`,
          'Prefix': Config.SETTINGS.PREFIX,
          'Discord.js': `v${Discord.version}`,
          'Node.js': `${process.version}`,
          'Guilds': client.guilds.cache.size,
          'Users': client.users.cache.size,
          'Channels': client.channels.cache.size,
          'Modal Guide': client.modals.size,
          'Buttons Guide': client.buttons.size,
          'Select Guide': client.selectMenus.size,
          'Message Commands': client.commands.size,
          'Slash Commands': client.slash.size,
          'Memory Usage': `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
          'CPU Usage': `${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%`,
          'Platform': process.platform,
          'Arch': process.arch,
      });
      
      console.log(`${color.bold.green(`[READY]`)} ` + `${client.user.tag} is online!`.yellow);
  
      //======================< Activity >======================\
      setInterval(async () => {
        // Animated Status Presence
        const activities = [
          `${Config.SETTINGS.PREFIX}help > ${client.commands.size + client.slash.size} Commands`,
          `/help > ${client.guilds.cache.size} Guilds`,
        ];
  
        client.user.setActivity(activities[Math.floor(Math.random() * activities.length)], {
          type: ActivityType.Listening, // PLAYING, STREAMING, LISTENING, WATCHING
          url: "https://www.twitch.tv/",
      });
      }, 30000);
  }
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