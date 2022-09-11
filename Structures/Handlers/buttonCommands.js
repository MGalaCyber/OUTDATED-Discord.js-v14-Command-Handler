//=====================================| Import the Module |=====================================\\

const { readdirSync } = require('fs');
const color = require('colors');

// ========================================| Code |======================================= \\

module.exports = async (client) => {
    const buttonFolders = readdirSync(`${process.cwd()}/CMDList/ButtonMenus`);
    for (const folder of buttonFolders) {
        const buttonFiles = readdirSync(`${process.cwd()}/CMDList/ButtonMenus/${folder}/`).filter(file => file.endsWith('.js'));
        for (const file of buttonFiles) {
            const button = require(`${process.cwd()}/CMDList/ButtonMenus/${folder}/${file}`);
            client.buttons.set(button.name, button);
        }
        console.log(`${color.bold.green(`[BUTTON COMMANDS]`)} ` + `[${buttonFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
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