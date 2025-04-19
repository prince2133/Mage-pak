// XVIDEO DOWNLOAD COMMAND

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.dark-yasiya-api.site/' // API LINK ( DO NOT CHANGE THIS!! )



cmd({
    pattern: "xvideo",
    alias: ["xvdl","xvdown"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝗆𝖾 𝖥𝖾𝗐 𝖶𝗈𝗋𝖽 !")
    
const xv_list = await fetchJson(`${apilink}/search/xvideo?text=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
🔥    *XVIDEO DOWNLOADER*   🔥

❍⚯───────────────────────────────⚯❍       
🔮 *Title* - ${xv_info.result.title}
🔮 *Views* - ${xv_info.result.views}
🔮 *Like* - ${xv_info.result.like}
❍⚯───────────────────────────────⚯❍

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`

// Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: msg,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃',
          newsletterJid: "120363395467876104@newsletter",
          },
          externalAdReply: {
              title: `ASHUU BABA 18+`,
              body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
              thumbnailUrl: xv_info.result.image,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });


} catch (error) {
    console.error(error);
    reply("*An Error Occurred While Processing Your Request 😔*");
  }
});

cmd({
    pattern: "xvideo2",
    alias: ["xvdl2","xvdown2"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo < text >',
    filename: __filename
},
async(conn, mek, m, { from, quoted, reply, q }) => {
    try {
        if (!q) return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝗆𝖾 𝖥𝖾𝗐 𝖶𝗈𝗋𝖽 !");

        const xv_list = await fetchJson(`${apilink}/search/xvideo?text=${q}`);
        if (!xv_list.result || xv_list.result.length === 0) return await reply("No results found!");

        const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`);
        if (!xv_info.result || !xv_info.result.dl_link) return await reply("Couldn't fetch video info. Please try another keyword.");

        const msg = `
🔥    *XVIDEO DOWNLOADER*   🔥

❍⚯───────────────────────────────⚯❍       
🔮 *Title* - ${xv_info.result.title}
🔮 *Views* - ${xv_info.result.views}
🔮 *Like* - ${xv_info.result.like}
❍⚯───────────────────────────────⚯❍

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`;

        const sentMsg = await conn.sendMessage(from, {
            text: msg,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃',
                    newsletterJid: "120363395467876104@newsletter",
                },
                externalAdReply: {
                    title: `ASHUU BABA 18+`,
                    body: `Can't Find The Information. You Can Try Another Way. Error Code 4043`,
                    thumbnailUrl: xv_info.result.image,
                    sourceUrl: `https://www.xvideos.com`, // added sourceUrl to prevent issues
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: mek });

        // SEND VIDEO
        await conn.sendMessage(from, {
            document: { url: xv_info.result.dl_link },
            mimetype: "video/mp4",
            fileName: xv_info.result.title,
            caption: xv_info.result.title
        }, { quoted: mek });

    } catch (error) {
        console.log(error);
        await reply(`Error: ${error.message || error}`);
    }
});