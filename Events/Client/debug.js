//=====================================| Import the Module |=====================================\

const Settings = require('../../Structures/Settings/settings.json');
const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'debug',
    once: true,
  
    async execute(info, client) {
      if (Settings.Enable_debug) {
          console.log(`${color.bold.green(`[DEBUG]`)} ` + `${String(info)}`.yellow);
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