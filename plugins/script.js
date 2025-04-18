/* 
ᴄʀᴇᴀᴛᴇᴅ ʙʏ :  𝙲𝚈𝙱𝙴𝚁 𝙰𝚂𝙷𝚄𝚄 𝙾𝙵𝙲
contact me 94760091093
ᴘʟᴇᴀꜱᴇ ᴅᴏɴᴛ ʀᴇᴍᴏᴠᴇ ᴏᴡɴᴇʀ ᴄʀᴇᴅɪᴛꜱ 💀📍
*/

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "script",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🎗️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/prince2133/DEVIL-TECH-MD';

    try {
        // Validate and extract repo info
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("Invalid GitHub URL format.");

        const [, username, repoName] = match;

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*╭━━〔 𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃 〕━━┈⊷*
*┃◈╭───────────────·๏*
*┃◈┃• 𝐎𝐰𝐧𝐞𝐫 : ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*
*┃◈┃• 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : v1.0.0*
*┃◈└─────────────┈⊷*
*╰─────────────────┈⊷*
*╭━━━〔 𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃 〕━━━┈⊷*
*┃◈╭───────────────·๏*
*┃◈┃📑 𝐁𝐎𝐓 𝐑𝐄𝐏𝐎 : https://github.com/${username}/${repoName}*
*┃◈┃*
*┃◈┃📑 𝐁𝐎𝐓 𝐖𝐄𝐁 : coming soon*
*┃◈┃*
*┃◈┃📑 𝐁𝐎𝐓 𝐂𝐇𝐀𝐍𝐄𝐋 : https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s*
*┃◈┃*
*┃◈┃📑 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌 : 94760091093*
*┃◈└──────────────┈⊷*
*╰─────────────────────┈⊷*
> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`;

        // Send message with video and externalAdReply
        await conn.sendMessage(from, {
            video: { url: 'https://files.catbox.moe/h3u0el.mp4' },
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
                    thumbnailUrl: 'https://i.imgur.com/c0pAsWe.jpeg',
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });
        
        // Send an audio file
        await conn.sendMessage(from, {
            audio: { url: 'https://cdn.ironman.my.id/i/hmxjch.mp4' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
                
