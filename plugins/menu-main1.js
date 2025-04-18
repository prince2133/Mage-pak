const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const { runtime } = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    use: '.menu',
    category: "main",
    desc: "main menu with bot status and commands",
    react: "📃",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        let status = `*╭━━〘 ＤＥＶＩＬ ＴＥＣＨ ＭＤ 〙━━●●►*
*┃➩╭─────────────────·๏*
*┃➩┃ 👋 Usᴇʀ Nᴀᴍᴇ* : *${pushname}*
*┃➩┃ ❗ Uᴘ Tɪᴍᴇ -* *${runtime(process.uptime())}*
*┃➩┃ ❗ Rᴀᴍ Uꜱᴇɢᴇ -* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB*
*┃➩┃ ⚙️ Cʀᴇᴀᴛᴏʀ* : *ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*
*┃➩┃ 🎭 Vᴇʀsɪᴏɴ* : *v1.0.0*
*┃➩└────────────────┈⊷*
*╰━━━━━━━━━━━━━━━━━━━━━━━●●►*

*╭━━〘 ＭＡＩＮ ＣＯＭＭＡＮＤＳ 〙━━►*
*┃❖╭──────────────────·๏*
*┃❖┃•  1. Ｍᴇɴᴜ*
*┃❖┃•  2. Ｍᴇɴᴜ2*
*┃❖┃•  3. Ｍᴇɴᴜ3*
*┃❖┃•  4. Ｒᴇꜱᴛᴀʀᴛ*
*┃❖┃•  5. Ａʏꜱᴛᴇᴍ*
*┃❖┃•  6. Ａʟɪᴠᴇ*
*┃❖┃•  7. Ａʟɪᴠᴇ2*
*┃❖┃•  8. Ａʙᴏᴜᴛ*
*┃❖┃•  9. Ｐɪɴɢ*
*┃❖┃• 10. Ｐɪɴɢ2*
*┃❖┃• 11. Ｖᴇʀꜱɪᴏɴ*
*┃❖┃• 12. Ｒᴇᴘᴏ*
*┃❖┃• 13. Ｏᴡɴᴇʀ*
*┃❖┃• 14. Ｓᴇᴛᴛɪɴɢ*
*┃❖└────────────────┈⊷*
*╰━━━━━━━━━━━━━━━━━━━━━━━━►*

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`;

        const thumb = await axios.get('https://i.ibb.co/zhvB3bLg/7535.jpg', { responseType: 'arraybuffer' });

        // Send video and status message
        await conn.sendMessage(from, {
            video: { url: 'https://files.catbox.moe/ai7kzg.mp4' },
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
                    thumbnail: Buffer.from(thumb.data),
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/TECH-HORIZON-OWNER/PROJECT-FSD/raw/refs/heads/main/audio/AUD-20250323-WA0003.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in menu command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});