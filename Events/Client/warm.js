//=====================================| Import the Module |=====================================\

const color = require('colors');

//=====================================| Code |=====================================\

module.exports = {
    name: 'warn',
    once: true,

    async execute(error, client) {
            console.log(`${color.bold.yellow(`[WARN]`)} ` + `${error}`.red);
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