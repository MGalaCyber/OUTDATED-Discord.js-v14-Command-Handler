//=====================================| Import the Module |=====================================\\

const Config = require('../Settings/config.json');
const { readdirSync } = require('fs');
const color = require('colors');
require('dotenv').config();

// ========================================| Code |======================================= \\

function loadCommands(client) {
    let commandsArray = [];
    
    const commandsFolder = readdirSync(`${process.cwd()}/CMDList/SlashCommands`);
    let commands = 0;
    for (const folder of commandsFolder) {
      const commandFiles = readdirSync(`${process.cwd()}/CMDList/SlashCommands/${folder}`).filter((file) =>file.endsWith(".js"));  
      for (const file of commandFiles) {
        const commandFile = require(`${process.cwd()}/CMDList/SlashCommands/${folder}/${file}`);
        client.slashCommands.set(commandFile.data.name, commandFile);

          commandsArray.push(commandFile.data.toJSON());
          commands++;
  
        continue;
      }
    }
    client.application.commands.set(commandsArray).then(
        console.log(`${color.bold.green(`[SLASH COMMAND]`)} ` + `[${commandFile.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `global was loaded!`.yellow)
        );
    }
  
  function unloadCommands(client) {
    client.application.commands.set([]);
    return console.log(`${color.bold.red(`[SLASH COMMAND]`)} ` + `unloaded commands!`.yellow)
  }
  
  module.exports = { loadCommands, unloadCommands };




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