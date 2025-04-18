const config = require('../config');
const {cmd , commands} = require('../command');
const os = require("os");

cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = `* _𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃 𝑺𝑬𝑻𝑻𝑰𝑵𝑮𝑺_


╭══════════════════════○
┣━ *𝗪𝗢𝗥𝗞 𝗠𝗢𝗗𝗘 😈*
> *1.1  Public Work*
> *1.2  Private Work*
> *1.3  Group Only*
> *1.4  Inbox Only*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘 😈*
> *2.1 Auto Voice On*
> *2.2 Auto Voice Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗔𝗧𝗨𝗦 𝗦𝗘𝗘𝗡 😈*
> *3.1 Auto Read Status On*
> *3.2 Auto Read Status Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 😈*
> *4.1 Auto sticker On*
> *4.2 Auto sticker Off*
╭══════════════════════○
┣━ *𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬😈*
> *5.1 Auto reply On*
> *5.2 Auto reply Off*
╭══════════════════════○
┣━ *𝗕𝗢𝗧 𝗢𝗡𝗟𝗜𝗡𝗘 𝗢𝗙𝗙𝗟𝗜𝗡𝗘 😈*
> *6.1 Online On*
> *6.2 Online Off*
╭══════════════════════○
┣━ *𝗠𝗦𝗚 𝗥𝗘𝗔𝗗 😈*
> *7.1 Read Msg On*
> *7.2 Read Msg Off*
╭══════════════════════○
┣━ *𝗠𝗦𝗚 𝗥𝗘𝗔𝗖𝗧 😈*
> *8.1 Auto React On*
> *8.2 Auto React Off*
╭══════════════════════○
┣━ *𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 😈*
> *9.1 Anti Link On*
> *9.2 Anti Link Off*
> *9.3 Anti Link Remove*
╰═══════════════════════○
╭══════════════════════○
┣━ *𝗢𝗪𝗡𝗘𝗥 𝗥𝗘𝗔𝗖𝗧 😈*
> *10.1 Owner React On*
> *10.2. Owner React Off*
╰═══════════════════════○


* *🔢 Reply Below This Number Change To 𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃 Bot Change Setting*

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/zhvB3bLg/7535.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update config.MODE:public" );
                        break;
                    case '1.2':               
                        reply(".update config.MODE:private");
                        break;
                    case '1.3':               
                          reply(".update config.MODE:group");
                      break;
                    case '1.4':     
                        reply(".update config.MODE:inbox");
                      break;
                    case '2.1':     
                        reply(".update config.AUTO_VOICE:true");
                        break;
                    case '2.2':     
                        reply(".update config.AUTO_VOICE:false");
                    break;
                    case '3.1':    
                        reply(".update config.AUTO_READ_STATUS:true");
                    break;
                    case '3.2':    
                        reply(".update config.AUTO_READ_STATUS:false");
                    break;                    
                    case '4.1':    
                        reply(".update config.AUTO_STICKER:true");
                    break;
                    case '4.2':    
                        reply(".update config.AUTO_STICKER:false");
                    break;                                        
                    case '5.1':    
                        reply(".update config.AUTO_REPLY:true");
                    break;
                    case '5.2':    
                        reply(".update config.AUTO_REPLY:false");
                    break;                        
                    case '6.1':    
                        reply(".update config.ALLWAYS_OFFLINE:true");
                    break; 
                    case '6.2':    
                        reply(".update config.ALLWAYS_OFFLINE:false");
                    break;                       
                    case '7.1':    
                        reply(".update config.READ_MESSAGE:true");
                    break;
                    case '7.2':    
                        reply(".update config.READ_MESSAGE:false");
                    break;
                    case '8.1':    
                        reply(".update config.AUTO_REACT:true");
                    break;
                    case '8.2':    
                        reply(".update config.AUTO_REACT:false");
                    break;
                    case '9.1':    
                        reply(".update ANTI_LINK:true");
                        reply(".update ANTI_LINKK:false");
                    break;
                    case '9.2':    
                        reply(".update ANTI_LINKK:true");
                        reply(".update ANTI_LINK:false");
                    break;
                    case '9.3':    
                        reply(".update ANTI_LINK:false");
                        reply(".update ANTI_LINKK:false");
                    break;
                    case '10.1':    
                        reply(".update config.OWNER_REACT:true");
                    break;
                    case '10.2':    
                        reply(".update config.OWNER_REACT:false");
                    break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
