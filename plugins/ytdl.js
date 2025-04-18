/*
ʏᴏᴜᴛᴜʙᴇ ᴍᴘ3 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴘʟᴜɢɪɴ
ᴄʀᴇᴀᴛᴇᴅ ʙʏ :  𝙲𝚈𝙱𝙴𝚁 𝙰𝚂𝙷𝚄𝚄 𝙾𝙵𝙲
contact me 94760091093
ᴘʟᴇᴀꜱᴇ ᴅᴏɴᴛ ʀᴇᴍᴏᴠᴇ ᴏᴡɴᴇʀ ᴄʀᴇᴅɪᴛꜱ 💀📍
*/

const config = require('../config');
const { cmd, commands } = require('../command');
const yts = require('yt-search');
const { ytsearch } = require('@dark-yasiya/yt-dl.js');
const ddownr = require('denethdev-ytmp3'); // Importing the denethdev-ytmp3 package for downloading

cmd({
  pattern: "song",
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");
    
    // Search for the song using yt-search
    const searchResults = await yts(q);
    if (!searchResults || searchResults.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const songData = searchResults.videos[0];
    const songUrl = songData.url;

    // Using denethdev-ytmp3 to fetch the download link
    const result = await ddownr.download(songUrl, 'mp3'); // Download in mp3 format
    const downloadLink = result.downloadUrl; // Get the download URL

    let songDetailsMessage = `*〘 ＹＯＵＴＵＢＥ ＡＵＤＩＯ ＤＬ 〙*\n\n*◈=========================◈*\n\n*╭┈──────────────────┈⊷*\n`;
    songDetailsMessage += `*┃* 🎶 *Title:* *${songData.title}*\n`;
    songDetailsMessage += `*┃* 👀 *Views:* *${songData.views}*\n`;
    songDetailsMessage += `*┃* ⏳ *Duration:* *${songData.timestamp}*\n`;
    songDetailsMessage += `*┃* 📆 *Uploaded:* *${songData.ago}*\n`;
    songDetailsMessage += `*┃* 📽 *Channel:* *${songData.author.name}*\n`;
    songDetailsMessage += `*┃* 🖇 *URL:* *${songData.url}*\n*╰────────────────────┈⊷*\n\n*⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁*\n\n`;
    songDetailsMessage += `*Choose Your Download Format:*\n\n*╭┈─────────────────┈⊷*\n`;
    songDetailsMessage += `*┃1 │❯❯◦ Audio File 🎶*\n`;
    songDetailsMessage += `*┃2 │❯❯◦ Voice File 🎤*\n`;
    songDetailsMessage += `*┃3 │❯❯◦ Document File 📂*\n*╰───────────────────┈⊷*\n\n`;
    songDetailsMessage += `> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Ꭰᴇᴠɪʟ Ꭲᴇᴄʜ Ꮇᴅ*`;

    // Send the video thumbnail with song details
    const sentMessage = await messageHandler.sendMessage(from, {
      image: { url: songData.thumbnail },
      caption: songDetailsMessage,
    }, { quoted: quotedMessage });

    // Listen for the user's reply to select the download format
    messageHandler.ev.on("messages.upsert", async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) return;

      const userReply = message.message.extendedTextMessage.text.trim();

      // Handle the download format choice
      if (message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        switch (userReply) {
          case '1': // Audio File
            await messageHandler.sendMessage(from, {
              audio: { url: downloadLink },
              mimetype: "audio/mpeg"
            }, { quoted: quotedMessage });
            break;
          case '2': // Audio File
            await messageHandler.sendMessage(from, {
              audio: { url: downloadLink },
              mimetype: "audio/mpeg", ptt: true
            }, { quoted: quotedMessage });
            break;
          case '3': // Document File
            await messageHandler.sendMessage(from, {
              document: { url: downloadLink },
              mimetype: 'audio/mpeg',
              fileName: `${songData.title}.mp3`,
              caption: `> *${songData.title}🎶*\n\n\n *${songData.title}🎶*\n\n> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Ꭰᴇᴠɪʟ Ꭲᴇᴄʜ Ꮇᴅ*`
            }, { quoted: quotedMessage });
            break;
          default:
            reply("*Invalid Option. Please Select A Valid Option 🙄*");
            break;
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply("*An Error Occurred While Processing Your Request 😔*");
  }
});


//video dl

cmd({
  pattern: "video",
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");
    
    // Search for the song using yt-search
    const searchResults = await yts(q);
    if (!searchResults || searchResults.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const songData = searchResults.videos[0];
    const songUrl = songData.url;

    // Using denethdev-ytmp3 to fetch the download link
    const result = await ddownr.download(songUrl, 'mp3'); // Download in mp3 format
    const downloadLink = result.downloadUrl; // Get the download URL

    let songDetailsMessage = `*〘 ＹＯＵＴＵＢＥ ＶＩＤＥＯ ＤＬ 〙*\n\n*◈=========================◈*\n\n*╭┈──────────────────┈⊷*\n`;
    songDetailsMessage += `*┃* 🎶 *Title:* *${songData.title}*\n`;
    songDetailsMessage += `*┃* 👀 *Views:* *${songData.views}*\n`;
    songDetailsMessage += `*┃* ⏳ *Duration:* *${songData.timestamp}*\n`;
    songDetailsMessage += `*┃* 📆 *Uploaded:* *${songData.ago}*\n`;
    songDetailsMessage += `*┃* 📽 *Channel:* *${songData.author.name}*\n`;
    songDetailsMessage += `*┃* 🖇 *URL:* *${songData.url}*\n*╰────────────────────┈⊷*\n\n*⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁*\n\n`;
    songDetailsMessage += `*Choose Your Download Format:*\n\n*╭┈─────────────────┈⊷*\n`;
    songDetailsMessage += `*┃1.1 │❯❯◦ Video File 🎶*\n`;
    songDetailsMessage += `*┃2.1 │❯❯◦ Document File 📂*\n*╰───────────────────┈⊷*\n\n`;
    songDetailsMessage += `> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Ꭰᴇᴠɪʟ Ꭲᴇᴄʜ Ꮇᴅ*`;

    // Send the video thumbnail with song details
    const sentMessage = await messageHandler.sendMessage(from, {
      image: { url: songData.thumbnail },
      caption: songDetailsMessage,
    }, { quoted: quotedMessage });

    // Listen for the user's reply to select the download format
    messageHandler.ev.on("messages.upsert", async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) return;

      const userReply = message.message.extendedTextMessage.text.trim();

      // Handle the download format choice
      if (message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        switch (userReply) {
          case '1.1': // Audio File
            await messageHandler.sendMessage(from, {
              video: { url: downloadLink },
              mimetype: "video/mp4"
            }, { quoted: quotedMessage });
            break;
          case '2.1': // Document File
            await messageHandler.sendMessage(from, {
              document: { url: downloadLink },
              mimetype: 'video/mp4',
              fileName: `${songData.title}.mp4`,
              caption: `> *${songData.title}🎶*\n\n\n *${songData.title}🎶*\n\n> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Ꭰᴇᴠɪʟ Ꭲᴇᴄʜ Ꮇᴅ*`
            }, { quoted: quotedMessage });
            break;
          default:
            reply("*Invalid Option. Please Select A Valid Option 🙄*");
            break;
        }
      }
    });
  } catch (error) {
    console.error(error);
    reply("*An Error Occurred While Processing Your Request 😔*");
  }
});

//voice dl

cmd({
  pattern: "voice",
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");
    
    // Search for the song using yt-search
    const searchResults = await yts(q);
    if (!searchResults || searchResults.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const songData = searchResults.videos[0];
    const songUrl = songData.url;

    // Using denethdev-ytmp3 to fetch the download link
    const result = await ddownr.download(songUrl, 'mp3'); // Download in mp3 format
    const downloadLink = result.downloadUrl; // Get the download URL

    let songDetailsMessage = `╭━━━〔 *ＤＥＶＩＬ ＴＥＣＨ  ＭＤ* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *Use headphones for best experience🎧🎶💆‍♂️*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━━━━━━━━━━━━━━━━❐━⪼
┇๏ *Title* -  *${songData.title}*
┇๏ *Duration* - *${songData.timestamp}*
┇๏ *Uploader* -  *${songData.author.name}*
┇๏ *Release Date* -  *${songData.ago}*
┇๏ *Views* -  *${songData.views}*
┇๏ *Url* -  *${songData.url}*
╰━━━━━━━━━━━━━━━━━❑━⪼

*🌟 𝗙𝗼𝗹𝗹𝗼𝘄 𝗨𝘀 -* https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Ꭰᴇᴠɪʟ Ꭲᴇᴄʜ Ꮇᴅ*`;

    // Send the video thumbnail with song details
    await messageHandler.sendMessage(from, {
      image: { url: songData.thumbnail },
      caption: songDetailsMessage,
    }, { quoted: quotedMessage });

    // Send the song as a PTT (Push-To-Talk)
    await messageHandler.sendMessage(from, {
      audio: { url: downloadLink },
      mimetype: "audio/mpeg",
      ptt: true, // PTT enabled
    }, { quoted: quotedMessage });

  } catch (error) {
    console.error(error);
    reply("*An Error Occurred While Processing Your Request ❗*");
  }
});

//group song dl

cmd({
  pattern: "song2",
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");
    
    // Search for the song using yt-search
    const searchResults = await yts(q);
    if (!searchResults || searchResults.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const songData = searchResults.videos[0];
    const songUrl = songData.url;

    // Using denethdev-ytmp3 to fetch the download link
    const result = await ddownr.download(songUrl, 'mp3'); // Download in mp3 format
    const downloadLink = result.downloadUrl; // Get the download URL

    let songDetailsMessage = `*╭━〔ＮＥＸＵＳ ＢＥＡＴＳ ＭＤ〕━┈⊷*\n*┃▸╭───────────*\n*┃▸┃๏ Use headphones for best experience🎧🎶💆‍♂️*\n*┃▸└───────────···๏*\n*╰────────────────┈⊷\n*╭┈──────────────────┈⊷*\n`;
    songDetailsMessage += `*┃* 🎶 *Title:* *${songData.title}*\n`;
    songDetailsMessage += `*┃* 👀 *Views:* *${songData.views}*\n`;
    songDetailsMessage += `*┃* ⏳ *Duration:* *${songData.timestamp}*\n`;
    songDetailsMessage += `*┃* 📆 *Uploaded:* *${songData.ago}*\n`;
    songDetailsMessage += `*┃* 📽 *Channel:* *${songData.author.name}*\n`;
    songDetailsMessage += `*┃* 🖇 *URL:* *${songData.url}*\n*╰────────────────────┈⊷*\n\n`;
    songDetailsMessage += `*මෙ වගේ ලස්සනම ලස්සන සින්දු අහන්න හැමදාම අපිත් එක්ක සෙට් වෙලා ඉන්න හරිද...🥺💫✨💕*\n\n`;
    songDetailsMessage += `*📍ඇබ්බැහි වෙන සුළු Group එකක්.. 😳🥵''🫶*\n\n`;
    songDetailsMessage += `*https://chat.whatsapp.com/JZpyPucscWw8lturbucMDQ*\n\n`;
    songDetailsMessage += `> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Nᴇxᴜꜱ Bᴇᴀᴛꜱ Mᴅ*`;

    // Send the video thumbnail with song details
    const sentMessage = await messageHandler.sendMessage(from, {
      image: { url: songData.thumbnail },
      caption: songDetailsMessage,
    }, { quoted: quotedMessage });

            await messageHandler.sendMessage(from, {
              audio: { url: downloadLink },
              mimetype: "audio/mpeg"
            }, { quoted: quotedMessage });

  } catch (error) {
    console.error(error);
    reply("*An Error Occurred While Processing Your Request 😔*");
  }
});

// MP4 video download
// MP4 video download with options
cmd({ 
    pattern: "mp4", 
    alias: ["video2"], 
    react: "🎥", 
    desc: "Download YouTube video", 
    category: "main", 
    use: '.mp4 < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }

        let ytmsg = `📹 *Video Details*
🎬 *Title:* ${yts.title}
⏳ *Duration:* ${yts.timestamp}
👀 *Views:* ${yts.views}
👤 *Author:* ${yts.author.name}
🔗 *Link:* ${yts.url}

*Choose download format:*
1. 📄 Document (no preview)
2. ▶️ Normal Video (with preview)

_Reply to this message with 1 or 2 to download._`;

        let contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363395467876104@newsletter',
                newsletterName: 'DEVIL-TECH-MD',
                serverMessageId: 143
            }
        };

        // Send thumbnail with options
        const videoMsg = await conn.sendMessage(from, { image: { url: yts.thumbnail }, caption: ytmsg, contextInfo }, { quoted: mek });

        conn.ev.on("messages.upsert", async (msgUpdate) => {
            const replyMsg = msgUpdate.messages[0];
            if (!replyMsg.message || !replyMsg.message.extendedTextMessage) return;

            const selected = replyMsg.message.extendedTextMessage.text.trim();

            if (
                replyMsg.message.extendedTextMessage.contextInfo &&
                replyMsg.message.extendedTextMessage.contextInfo.stanzaId === videoMsg.key.id
            ) {
                await conn.sendMessage(from, { react: { text: "⬇️", key: replyMsg.key } });

                switch (selected) {
                    case "1":
                        await conn.sendMessage(from, {
                            document: { url: data.result.download_url },
                            mimetype: "video/mp4",
                            fileName: `${yts.title}.mp4`,
                            contextInfo
                        }, { quoted: replyMsg });
                        break;

                    case "2":
                        await conn.sendMessage(from, {
                            video: { url: data.result.download_url },
                            mimetype: "video/mp4",
                            contextInfo
                        }, { quoted: replyMsg });
                        break;

                    default:
                        await conn.sendMessage(
                            from,
                            { text: "*Please Reply with ( 1 , 2 or 3) ❤️" },
                            { quoted: replyMsg }
                        );
                        break;
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});

// MP3 song download
cmd({ 
    pattern: "song3", 
    react: "🎶", 
    desc: "Download YouTube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
            return reply("Failed to fetch the audio. Please try again later.");
        }
        
        let ytmsg = `🎵 *Song Details*
🎶 *Title:* ${yts.title}
⏳ *Duration:* ${yts.timestamp}
👀 *Views:* ${yts.views}
👤 *Author:* ${yts.author.name}
🔗 *Link:* ${yts.url}

*Choose download format:*
1. 📄 MP3 as Document
2. 🎧 MP3 as Audio (Play)
3. 🎙️ MP3 as Voice Note (PTT)

_Reply with 1, 2 or 3 to this message to download the format you prefer._`;
        
        let contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363354023106228@newsletter',
                newsletterName: '𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃',
                serverMessageId: 143
            }
        };
        
        // Send thumbnail with caption only
  const songmsg = await conn.sendMessage(from, { image: { url: yts.thumbnail }, caption: ytmsg, contextInfo }, { quoted: mek });

  
     
                     conn.ev.on("messages.upsert", async (msgUpdate) => {
        

                const mp3msg = msgUpdate.messages[0];
                if (!mp3msg.message || !mp3msg.message.extendedTextMessage) return;

                const selectedOption = mp3msg.message.extendedTextMessage.text.trim();

                if (
                    mp3msg.message.extendedTextMessage.contextInfo &&
                    mp3msg.message.extendedTextMessage.contextInfo.stanzaId === songmsg.key.id
                ) {
                
                            
                   await conn.sendMessage(from, { react: { text: "⬇️", key: mp3msg.key } });

                    switch (selectedOption) {
case "1":   

      
      
   await conn.sendMessage(from, { document: { url: data.result.downloadUrl }, mimetype: "audio/mpeg", fileName: `${yts.title}.mp3`, contextInfo }, { quoted: mp3msg });   
      
      
break;
case "2":   
await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg", contextInfo }, { quoted: mp3msg });
break;
case "3":   
await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg", ptt: true, contextInfo }, { quoted: mp3msg });
break;


default:
                            await conn.sendMessage(
                                from,
                                {
                                    text: "*invalid selection please select between ( 1 or 2 or 3) 🔴*",
                                },
                                { quoted: mp3msg }
                            );
             }}});
           
    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});
