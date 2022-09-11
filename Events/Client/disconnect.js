//=====================================| Import the Module |=====================================\

const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'disconnect',
    once: true,
    
    async execute(client) {
        console.log(`${color.bold.red(`[DISCONNECT]`)} ` + `${client.user.tag}`.magenta + `has been disconnected from the Discord API.`.yellow);
        client.destroy();
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