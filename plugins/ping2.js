

//---------------------------------------------------------------------------

const config = require('../config')
const fs = require('fs')
const os = require("os")
const { cmd } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('../lib/functions')

// Fixed & merged ping3 and ping4 logic
cmd({
    pattern: "ping3",
    react: "⚡️",
    desc: "Check bot's ping (ping3)",
    category: "main",
    use: '.ping3',
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*🚀 Testing Ping 3...*' }, { quoted: mek })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*⚡️ Ping3 Result: ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`❌ *Error (ping3):* ${e.message}`)
    }
})

cmd({
    pattern: "ping4",
    react: "⚡️",
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try{
const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*_🚀 Testing Ping ..._*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*⚡️ ping: ${ping}ms*`}, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})