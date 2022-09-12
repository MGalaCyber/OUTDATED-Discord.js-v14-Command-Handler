//=====================================| Import the Module |=====================================\\

const { readdirSync } = require('fs');
const color = require('colors');

// ========================================| Code |======================================= \\

module.exports = async (client) => {
    const modalFolders = readdirSync(`${process.cwd()}/CMDList/ModalMenus`);
    for (const folder of modalFolders) {
        const modalFiles = readdirSync(`${process.cwd()}/CMDList/ModalMenus/${folder}/`).filter(file => file.endsWith('.js'));
        for (const file of modalFiles) {
            const modal = require(`${process.cwd()}/CMDList/ModalMenus/${folder}/${file}`);
            client.modals.set(modal.name, modal);
        };
        console.log(`${color.bold.green(`[MODALS COMMAND]`)} ` + `[${modalFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
    };
};




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