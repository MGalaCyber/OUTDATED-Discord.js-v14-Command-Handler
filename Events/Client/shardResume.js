//=====================================| Import the Module |=====================================\

const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'shardResume',
    once: true,

    async execute(id, replayedEvents, client) {
        console.log(`${color.bold.green(`[SHARD ID RESUME]`)} ` + `[${id}]`.cyan);
        console.log(`${color.bold.green(`[SHARD RESUME]`)} ` + `${replayedEvents}`.yellow);
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