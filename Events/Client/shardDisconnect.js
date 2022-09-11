//=====================================| Import the Module |=====================================\

const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'shardDisconnect',
    once: true,

    async execute(event, id, client) {
        console.log(`${color.bold.red(`[SHARD ID DISCONNECT]`)} ` + `[${id}]`.cyan);
        console.log(`${color.bold.red(`[SHARD EVENT DISCONNECT]`)} ` + `${event}`.yellow);
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