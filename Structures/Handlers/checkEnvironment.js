//=====================================| Import the Module |=====================================\\

const Config = require(`../Settings/config.json`);
const colors = require('colors');

//=====================================| Code |=====================================\\

module.exports = async (client) => {
    if (!process.env.MONGO_URI) {
      throw new Error(`${colors.bold.red(`[ALERT | DATABASE]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow).then(() => {
          process.exit(1);
      });
    }
    
    if (!process.env.TOKEN) {
        throw new Error(`${colors.bold.red(`[ALERT | TOKEN]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow).then(() => {
            process.exit(1);
        });
    }
    
    if (!Config.DEVELOPER.OWNER) {
        throw new Error(`${colors.bold.red(`[ALERT | CONFIG: OWNER]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow).then(() => {
            process.exit(1);
        });
    }
    
    if (!Config.SETTINGS.PREFIX) {
        throw new Error(`${colors.bold.red(`[ALERT | CONFIG: PREFIX]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow).then(() => {
            process.exit(1);
        });
    }
    
    if (!Config.SETTINGS.LogsSystem.ErrorChannel) {
        throw new Error(`${colors.bold.red(`[ALERT | CONFIG: LOGS SYSTEM]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow).then(() => {
            process.exit(1);
        });
    }
    
    // if (!Config.CONNECTIONS.OAUTHO2_INVITE) {
    //     throw new Error(`${colors.bold.red(`[ALERT | CONFIG: INVITE URL]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow);
    // }
    
    // if (!Config.CONNECTIONS.DISCORD_SUPPORT) {
    //     throw new Error(`${colors.bold.red(`[ALERT | CONFIG: INVITE SERVER]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow);
    // }
    
    if (!Config.SERVER_ID.OFFICIAL) {
        throw new Error(`${colors.bold.red(`[ALERT | CONFIG: SERVER OFFICIAL]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow).then(() => {
            process.exit(1);
        });
    }
    
    if (!Config.SERVER_ID.TEST) {
        throw new Error(`${colors.bold.red(`[ALERT | CONFIG: SERVER TEST]`)} ` + `The environment variable is not setup! Please input your module variable.`.yellow).then(() => {
            process.exit(1);
        });
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