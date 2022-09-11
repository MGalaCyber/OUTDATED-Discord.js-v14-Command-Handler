//=====================================| Import the Module |=====================================\

const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'shardReconnecting',
    once: true,

    async execute(id, client) {
        console.log(`${color.bold.red(`[SHARD RECONNECTING]`)} ` + `[${id}]`.cyan);
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