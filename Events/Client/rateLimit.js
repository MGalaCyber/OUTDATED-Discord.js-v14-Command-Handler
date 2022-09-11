//=====================================| Import the Module |=====================================\

const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'rateLimit',
    once: true,

    async execute(rateLimitData, client) {
        console.log(`${color.bold.red(`[RATE LIMIT]`)} ` + `${rateLimitData.method} ${rateLimitData.path}`.yellow);
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