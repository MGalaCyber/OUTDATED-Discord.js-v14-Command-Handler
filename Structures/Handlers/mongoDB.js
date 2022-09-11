//=====================================| Import the Module |=====================================\\

const mongoose = require('mongoose');
const colors = require('colors');

//=====================================| Code |=====================================\\

mongoose.connect(process.env.MONGO_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// mongoose.Promise = global.Promise

mongoose.connection.on('connected', async (client) => {
  console.log(`${colors.bold.green(`[DATABASE]`)} ` + `Connected to MongoDB!`.yellow);
})

mongoose.connection.on('disconnected', async (client) => {
  console.log(`${colors.bold.red(`[DATABASE]`)} ` + `Disconnected from MongoDB!`.yellow);
})

mongoose.connection.on('error', async (client, err) => {
  console.log(`${colors.bold.red(`[DATABASE]`)} ` + `Error: `.yellow + `${err}`.bgRed);
})


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