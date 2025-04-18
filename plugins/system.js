





const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime" ,"runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*╭─「 ᴅᴇᴠɪʟ ᴛᴇᴄʜ ᴍᴅ ʙᴏᴛ ɪɴꜰᴏ🌟 」─●●►*
*┃❖╭──────────────────·๏*
*╏❖│ 📌 Ｃʀᴇᴀᴛᴏʀ : ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*
*╏❖│ 📟 Ｖᴇʀꜱɪᴏɴ : v1.0.0*
*╏❖│ 🧬 Ｕᴘ Ｔɪᴍᴇ : ${runtime(process.uptime())}*
*╏❖│ 📈 Ｒᴀᴍ Ｕꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB*
*╏❖│ 🕯️ Ｐʟᴀᴛ Ｆʀᴏᴍ : heroku*
*╏❖│ ⚙️ Ｈᴏꜱᴛ Ｎᴀᴍᴇ : ${os.hostname()}*
*┃❖└────────────────┈⊷*
*╰──────────────────────●●►*

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`;

        // Send message with video and externalAdReply
        await conn.sendMessage(from, {
            video: { url: 'https://files.catbox.moe/fwjl3x.m4v' },
            caption: status,
            contextInfo: {
                mentionedJid: ['94760091093@s.whatsapp.net'],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395467876104@newsletter',
                    newsletterName: "𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: '𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃',
                    body: 'Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ ❗',
                    mediaType: 1,
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s',
                    thumbnailUrl: 'https://i.ibb.co/zhvB3bLg/7535.jpg',
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });
        
        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/8olg10.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});