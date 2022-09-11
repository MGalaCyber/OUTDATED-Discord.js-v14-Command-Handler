//=====================================| Import the Module |=====================================\

const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'shardError',
    once: true,

    async execute(error, id, client) {
        console.log(`${color.bold.red(`[SHARD ID ERROR]`)} ` + `[${id}]`.cyan);
        console.log(`${color.bold.red(`[SHARD ERROR]`)} ` + `${error}`.yellow);
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