//=====================================| Import the Module |=====================================\\

const { glob } = require('glob');
const { promisify } = require('util');
const proGlob = promisify(glob);

// ========================================| Code |======================================= \\

async function loadFiles(dirNames) {
    const Files = await proGlob(`${process.cwd().replace(/\\/g, '/')}/${dirNames}/**/*.js`);
    Files.forEach((file) => delete require.cache[require.resolve(file)]);
    return Files;
}

module.exports = { loadFiles };




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