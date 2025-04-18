/* 
ᴄʀᴇᴀᴛᴇᴅ ʙʏ :  𝙲𝚈𝙱𝙴𝚁 𝙰𝚂𝙷𝚄𝚄 𝙾𝙵𝙲
contact me 94760091093
ᴘʟᴇᴀꜱᴇ ᴅᴏɴᴛ ʀᴇᴍᴏᴠᴇ ᴏᴡɴᴇʀ ᴄʀᴇᴅɪᴛꜱ 💀📍
*/

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

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
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

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
*┃◈┃📑 𝐁𝐎𝐓 𝐑𝐄𝐏𝐎 : coming soon*
*┃◈┃*
*┃◈┃📑 𝐁𝐎𝐓 𝐖𝐄𝐁 : coming soon*
*┃◈┃*
*┃◈┃📑 𝐁𝐎𝐓 𝐂𝐇𝐀𝐍𝐄𝐋 : https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s*
*┃◈┃*
*┃◈┃📑 𝐎𝐖𝐍𝐄𝐑 𝐍𝐔𝐌 : 94760091093*
*┃◈└──────────────┈⊷*
*╰─────────────────────┈⊷*
> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/zhvB3bLg/7535.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395467876104@newsletter',
                    newsletterName: '☇ 𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃 🤖͎𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://i.imgur.com/2Sp3cqD.mp4' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395467876104@newsletter',
                    newsletterName: '☇ 𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃 🤖𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
                