const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DRK-MD=of8kQKJC#WHRyeIWSnfNOiwuHM8HxLHVn55BdzGfqkPS_vZyQ6kY", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "mongodb://mongo:GllbBPZxDIPEGHWzjUexoPbHPmmoouRA@metro.proxy.rlwy.net:26064", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/zhvB3bLg/7535.jpg",
BOT_NAME: process.env.BOT_NAME || "DEVIL-TECH-MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
// make true or false status auto seen
PREFIX: process.env.PREFIX || "/",
// add your prifix for bot   
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
OWNER_REACT: process.env.OWNER_REACT || "false",
// make this true or false for owner react on all msgs
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
};
