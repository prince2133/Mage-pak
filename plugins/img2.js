const {
  cmd,
  commands
} = require('../command');
const axios = require('axios');

cmd({
  pattern: 'imgsearch',
  alias: ['img','pin','image'],
  react: '🔍',
  desc: 'Search for images on Google',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
        return reply(`*🔎 ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ sᴇᴀʀᴄʜ ᴋᴇʏᴡᴏʀᴅs ᴇxᴀᴍᴘʟᴇ: .ɪᴍᴀɢᴇ ᴄᴀᴛ*`);
    }

    try {
        await conn.sendMessage(m.chat, { react: { text: "🔍", key: m.key } });

        const apiResponse = await axios.get(`https://apis.davidcyriltech.my.id/googleimage`, {
            params: { query: text }
        });

        const { success, results } = apiResponse.data;

        if (!success || !results || results.length === 0) {
            return reply(`❌ No images found for "${text}". Try another search.`);
        }

        const maxImages = Math.min(results.length, 5);
        for (let i = 0; i < maxImages; i++) {
            await conn.sendMessage(m.chat, {
                image: { url: results[i] },
                caption: `🖼️ *ɪᴍᴀɢᴇ sᴇᴀʀᴄʜ*\n\n🔎 *ǫᴜᴇʀʏ:* "${text}"\n📄 *ʀᴇsᴜʟᴛ:* ${i + 1}/${maxImages}\n\n> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`,
            }, { quoted: m });
        }

        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error("Error in Image Search:", error);
        reply(`❌ *Error fetching images. Try again later.*`);
    }
});
