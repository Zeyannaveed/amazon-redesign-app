const mongoose = require('mongoose')
require('dotenv').config();
const mongourl = process.env.mongo_url

main().then(console.log('connect to mongo')).catch(err => console.log(err));

async function main() {
  await  mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
}


module.exports = main;