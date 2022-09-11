//=====================================| Import the Module |=====================================\\

const { readdirSync } = require('fs');
const color = require('colors');

// ========================================| Code |======================================= \\

module.exports = async (client) => {
    const selectFolders = readdirSync(`${process.cwd()}/CMDList/SelectMenus`);
    for (const folder of selectFolders) {
        const selectFiles = readdirSync(`${process.cwd()}/CMDList/SelectMenus/${folder}/`).filter(file => file.endsWith('.js'));
        for (const file of selectFiles) {
            const select = require(`${process.cwd()}/CMDList/SelectMenus/${folder}/${file}`);
            client.selecMenus.set(select.name, select);
        };
        console.log(`${color.bold.green(`[SELECTMENU COMMAND]`)} ` + `[${selectFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
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