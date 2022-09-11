/******************************************************************************************| INFORMATION |******************************************************************************************
 * @INFO :
 * 1.0 Import the required modules.
    * 1.1 Validating script for the advertisement.                                                  //////////////////////////////////////////////////////////////////////////////////////////////
 * 2.0 Create the Discord bot Client.                                                               ////                                                                                      ////
 * 3.0 Create the commands for the bot.                                                             \\\\                                        @NOTICE                                       \\\\
 * 4.0 Create/Custom the events for the bot.                                                        ////    This source code is public, it is forbidden to sell and buy this handler code     ////
 * 5.0 Create the functions for the bot.                                                            \\\\       if you want to use this handler code, please give credit from the owner        \\\\
 * 6.0 Create/Custom the variables for the bot.                                                     ////    it is forbidden to change the contents of the code (especially the core code)     ////
 *                                                                                                  \\\\                  it is forbidden to delete the credit in the code!                   \\\\
 *                                                                                                  ////                                                                                      ////
 * @CREDITS : MGalaCyber Development                                                                //////////////////////////////////////////////////////////////////////////////////////////////
 * @VERSION : 1.0.0
 * @GITHUB : MGalaCyber
**************************************************************************************| All Right Reserved! |**************************************************************************************/

//=====================================| Import the Module |=====================================\\

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder, Client, Collection } = require('discord.js');
const clientSettingsObject = require(`./Structures//Functions/clientSettingsObject.js`);
const Settings = require(`./Structures//Settings/settings.json`);
const Config = require(`./Structures//Settings/config.json`);
const Emoji = require(`./Structures//Settings/emojis.json`);
const Embed = require(`./Structures//Settings/embed.json`);
const client = new Client(clientSettingsObject());
const color = require('colors');
require('dotenv').config();
require('ms');

module.exports = client;

//=====================================| COLLECTIONS |=====================================\\

client.commands = new Collection();
client.slashCommands = new Collection();

client.selecMenus = new Collection();
client.buttons = new Collection();
client.modal = new Collection();

client.categories = new Collection();
client.cooldowns = new Collection();
client.buttons = new Collection();
client.aliases = new Collection();
client.events = new Collection();

client.Databases = require(`${process.cwd()}/Structures/Handlers/mongoDB.js`);

//=====================================| HANDLERS |=====================================\\

const handlersModules = [
    'events', 'checkEnvironment',
    'messageCommands', /*'slashCommands',*/ 'modalCommands', 'selectCommands', 'buttonCommands',
    Settings.antiCrash ? 'antiCrash' : null
];

handlersModules.forEach(handler => {
    require(`./Structures//Handlers/${handler}`)(client);
});

const { loadCommands, unloadCommands } = require('./Structures/Handlers/slashCommands');

//=====================================| LOGIN TO BOT |=====================================\\

client.login(process.env.TOKEN).then(() => {
    loadCommands(client);
}).catch((err) => console.log(err));




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