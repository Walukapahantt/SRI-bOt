let { MessageType } = (await import('@adiwajshing/baileys')).default 
import { promises } from 'fs'
import { join } from 'path'
import fs from 'fs'
import os, { cpus as _cpus, totalmem, freemem } from 'os';
import util from 'util'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { sizeFormatter } from 'human-readable'

let handler = async (m, { conn, command, usedPrefix, args, text, __dirname, isOwner, isRowner, DevMode }) => {
let name, _uptime, _muptime, uptime, totalreg, fkontak, rtotalreg, frep, _package, taguser, groups
const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4] 
frep = { contextInfo: { externalAdReply: {title: wm, body: lenguajeGB.smsCreApoyo(), sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const isCommand1 = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i.test(command)  
const isCommand2 = /^(cuenta(s)?oficiales?|gataig|(cuentas|account)s?g?b|(ig)?gata|(cuentasgata))$/i.test(command)  
const isCommand3 = /^(gata(bot)?groups?|grupos(ofc|degatabot|gb)|grupogb|groupsgb|gatagroups?|grupos|group(ofc|sofc))$/i.test(command) 
const isCommand4 = /^(c(ó|o)digo|sc|git|script)$/i.test(command) 
const isCommand5 = /^(instalar(gata)?bot|proceso(del)?bot|bot(install|proceso)|installbot)$/i.test(command) 
const isCommand6 = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i.test(command) 
const isCommand7 = /^(group(s|list|o(lista)?)|list(a)?(de)?grupo(s)?|grupolista)$/i.test(command) 
const isCommand8 = /^(info(gata|bot)|informaci(ón|on)(gata|bot))$/i.test(command) 
const isCommand9 = /^(contactos?|contacts?)$/i.test(command) 
const isCommand10 = /^(ping|speed|velocidad|rapidez|velocity)$/i.test(command) 
const isCommand11 = /^(dona(te|si)|donar|apoyar|paypal|donating|aportar)$/i.test(command) 
const isCommand12 = /^(report|request|reporte|bugs|bug|reportowner|reportes|reportar)$/i.test(command) 

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
  
switch (true) {     
case isCommand1:
name = await conn.getName(m.sender)
_uptime = process.uptime() * 1000
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
uptime = clockString(_uptime)
totalreg = Object.keys(global.db.data.users).length
rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
try{
let estado = `*╭𝄗𝄗✦ --${lenguajeGB.smsEstado1()}-- ✦𝄗𝄗⬣*
 ⎸ *⍟ ${lenguajeGB.smsEstado2()}*
 ⎸ ❉ ➺ ${vs}
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *${lenguajeGB.smsEstado3()}* ➺ *_${Object.keys(global.db.data.users).length}_*
 ⎸ ❉ *${lenguajeGB.smsEstado4()}* ➺ *_${rtotalreg}/${totalreg}_*
 ⎸ ❉ *${lenguajeGB.smsEstado5()}* ➺ *_${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_* 
 ⎸ ❉ *${lenguajeGB.smsEstado6()}* ➺ *_${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_* 
 ⎸ ┈┈┈┈┈┈┈┈┈┈┈
 ⎸ ❉ *${lenguajeGB.smsEstado7()}* ➺ *_${uptime}_*
*╰𝄗𝄗𝄗𝄗𝄗⬣*`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', estado, fkontak)
} catch (e) {
reportError(e)
}   
break
    
case isCommand2:
try{
let media = './media/menus/Menu2.jpg'
let str = `
◎ *GITHUB*
*${md}*\n
◎ *INSTAGRAM*
*${ig}*\n
◎ *YOUTUBE*
*${yt}*\n
◎ *FACEBOOK*
*${fb}*\n
${lenguajeGB.smsOfc2()}`.trim() 
await conn.sendFile(m.chat, media, 'gata.jpg', lenguajeGB.smsOfc1() + '\n\n' + str, fkontak)  
} catch (e) {
reportError(e)
}    
break
    
  case isCommand3:
try{
let str = `
${lenguajeGB.smsGrupoOfc1()}
_⭔ ${grupo[0]}_\n
_⭔ ${grupo[1]}_\n
_⭔ ${grupo[2]}_\n
_⭔ ${grupo[3]}_\n
_⭔ ${grupo[4]}_\n\n
${lenguajeGB.smsGrupoOfc2()}
_⭔ ${grupo[5]}_\n
_⭔ ${grupo[6]}_\n
_⭔ ${grupo[7]}_\n
_⭔ ${grupo[8]}_`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', str, fkontak)   
} catch (e) {
reportError(e)
}    
break
    
case isCommand4:
try{ 
_package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', `*_${_package.homepage}_*\n\n` + lenguajeGB.smsPrivadoDonar(), fkontak)    
} catch (e) {
reportError(e)
}    
break
    
case isCommand5:
let codigo = `termux-setup-storage
apt update
apt upgrade
pkg install -y git nodejs ffmpeg imagemagick yarn
git clone https://github.com/GataNina-Li/GataBotLite-MD 
cd GataBotLite-MD
yarn install
npm install
npm start`
let codigo2 = `
heroku/nodejs\n
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git\n
https://github.com/clhuang/heroku-buildpack-webp-binaries.git`
let codigo3 = `
git clone https://github.com/GataNina-Li/GataBotLite-MD
cd GataBotLite-MD
npm install
npm update
node .`
try{	
let termux = `*◎ T E R M U X*\n\n${codigo}`
let replit = `*◎ R E P L I T*\n\nhttps://replit.com/github/GataNina-Li/GataBotLite-MD`
let heroku = `*◎ H E R O K U*\n\nhttps://heroku.com/deploy?template=https://github.com/GataNina-Li/GataBotMDLite-Heroku`
let windows = `*◎ W I N D O W S / V P S / R D P*\n
⎔ _Git_
https://git-scm.com/downloads
⎔ _NodeJS_
https://nodejs.org/en/download
⎔ _FFmpeg_
https://ffmpeg.org/download.html
⎔ _ImageMagick_
https://imagemagick.org/script/download.php
⎔ _Yarn_
https://classic.yarnpkg.com/en/docs/install#windows-stable`
await conn.reply(m.chat, termux + '\n\n' + replit + '\n\n' + heroku + '\n\n' + windows, fkontak)
} catch (e) {
reportError(e)
}    
break
    
case isCommand6:
try{   
taguser = conn.getName(m.sender)
_package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let pp = await conn.profilePictureUrl(`${global.conn.user.jid.split`@`[0]}` + '@s.whatsapp.net', 'image').catch(_ => gataImg.getRandom())
let aa = `*_🌼 ${lenguajeGB.smsCreA()} ${taguser}, ${lenguajeGB.smsCreB()} ${_package.name} ${lenguajeGB.smsCreC()}_*\n\n` 
let bb = `${packname}\n*◎ Wa.me/${owner[0][0]}*\n\n`
await conn.sendFile(m.chat, pp, 'gata.jpg', aa + bb + ig, fkontak) 
} catch (e) {
reportError(e)
}    
break
    
case isCommand7:
try{
let txt
groups = Object.values(await conn.groupFetchAllParticipating())
txt = `${packname} ${lenguajeGB.smsLisA()}
${lenguajeGB.smsLisB()} ${groups.length}\n`

for (let i = 0; i < groups.length; i++) {
txt += ` 
${lenguajeGB.smsLisC()} ${groups[i].subject}
${lenguajeGB.smsLisD()} ${groups[i].id}
${isOwner ? `${lenguajeGB.smsLisE()} ${groups[i].participants.length}` : ''}\n`
}
m.reply(txt.trim())
} catch (e) {
reportError(e)
}     
break
    
case isCommand8:
try{
_uptime = process.uptime() * 1000
uptime = clockString(_uptime) 
totalreg = Object.keys(global.db.data.users).length
rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])] 
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
//const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
groups = chats.filter(([id]) => id.endsWith('@g.us'))
let old = performance.now()
let neww = performance.now()
let speed = neww - old
//let pp = './media/menus/Menu1.jpg'

let info = `
*${lenguajeGB.smsCreInfo().slice(0, -1)}*
🌺꙰᠁❥ *◜${lenguajeGB.smsBT1()}◞* ⇢ ${author}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT2()}◞* ⇢ ${vs}
🌺꙰᠁❥ *◜${lenguajeGB.smsBT3()}◞* ⇢ ( ${usedPrefix} )
🌻꙰᠁❥ *◜${lenguajeGB.smsBT4()}◞* ⇢ ${chats.length - groups.length}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT5()}◞* ⇢ ${groups.length}
🌺꙰᠁❥ *◜${lenguajeGB.smsBT6()}◞* ⇢ ${chats.length}
🌻꙰᠁❥ *◜${lenguajeGB.smsBT7()}◞* ⇢ ${uptime}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT8()}◞* ⇢ ${totalreg}
🌺꙰᠁❥ *◜${lenguajeGB.smsEstado4().toUpperCase()}◞* ⇢ ${rtotalreg}/${totalreg}
🌻꙰᠁❥ *◜${lenguajeGB.smsVl1()}◞* ⇢ ${(speed * 1000).toFixed(0) / 1000}
🌼꙰᠁❥ *◜${lenguajeGB.smsBT9()}◞* ⇢ ${totaljadibot.length}`.trim()

await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', info, fkontak) 
} catch (e) {
reportError(e)
}     
break

//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li
case isCommand9:
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto1() : desc2}`
let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeGB.smsContacto2() : desc2}`
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : lenguajeGB.smsContacto3() 
description = official[0][0] == String(contact[0]) ? 'Solo temas de GataBot' : official[1][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : official[2][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : official[3][0] == String(contact[0]) ? lenguajeGB.smsContacto4() : desc === '' ? lenguajeGB.smsContacto5() : desc
correo = official[0][0] == String(contact[0]) ? 'socialplus.gata@gamil.com' : official[1][0] == String(contact[0]) ? 'thelolibotm@gmail.com' : official[2][0] == String(contact[0]) ? 'alexismaldonado90700@gmail.com' : mail === '' ? lenguajeGB.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '🇪🇨 Ecuador' : official[1][0] == String(contact[0]) ? '🇦🇷 Argentina' : official[2][0] == String(contact[0]) ? '🇲🇽 México' : official[3][0] == String(contact[0]) ? '🇧🇷 Brazil' : country === '' ? lenguajeGB.smsContacto7() : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/GataNina-Li' : official[1][0] == String(contact[0]) ? 'https://github.com/elrebelde21' : official[2][0] == String(contact[0]) ? 'https://github.com/Azami19' : official[3][0] == String(contact[0]) ? 'https://github.com/Abiguelreyes75' : md    
lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://www.youtube.com/@TheLoliBot-MD' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, lenguajeGB.smsContacto8(), mail === '' ? 'centergatabot@gmail.com' : mail, lenguajeGB.smsContacto7(), md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })
/*function handler(m) {
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}*/
} catch (e) {
reportError(e)
} 
break
    
case isCommand10:
try {
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let caption = `${htki} *${lenguajeGB.smsVl1()}* ${htka}
🚀 *${Math.round(neww - old)}* ms
🚀 *${speed}* ms
*${htjava} ${lenguajeGB.smsVl2()}
*🟢 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
${lenguajeGB.smsVl3()} ${format(freemem())}
${lenguajeGB.smsVl4()} \`\`\`${os.platform()}\`\`\`
${lenguajeGB.smsVl5()} _${os.hostname()}_
${readMore}
${lenguajeGB.smsVl6()}
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
${cpus[0] ? `*Uso total de la CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', caption.trim(), fkontak) 
} catch (e) {
reportError(e)
}   
break
    
case isCommand11:
try { 
let donar = lenguajeGB.smsMensajeDonar().trim()
await conn.sendFile(m.chat, img21, 'gata.jpg', lenguajeGB.smsTituloDonar() + '\n\n' + donar + '\n\n' + paypal + '\n' + ig, fkontak) 
await conn.reply(m.sender, lenguajeGB.smsPrivadoDonar() + '\n\n' + paypal + '\n' + md, m)
} catch (e) {
reportError(e)
}     
break
    
case isCommand12:
if (!text) throw lenguajeGB.smsReportGB1(usedPrefix, command)
if (text.length < 8) throw lenguajeGB.smsReportGB2()
if (text.length > 1000) throw lenguajeGB.smsReportGB3()

let urs = m.sender.split('@')[0]
for (let i = 0; i < global.owner.length; i++) {
let ownerNumber = global.owner[i][0]
if (global.owner[i][2] === true) {
let aa = ownerNumber + '@s.whatsapp.net'
let teks = lenguajeGB.smsReportGB4(urs, text)
setTimeout(async function() {
await conn.reply(aa, m.quoted ? teks + m.quoted.text : teks, null, { mentions: [m.sender] }, { quoted: fkontak })
}, 3000 * i)
}}
await m.reply(lenguajeGB.smsReportGB5())
break
}}

handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?|cuenta(s)?oficiales?|gataig|(cuentas|account)s?g?b|(ig)?gata|(cuentasgata))|gata(bot)?groups?|grupos|groupsgb|grupos(ofc|degatabot|gb)|grupogb|gatagroups?|group(ofc|sofc)|c(ó|o)digo|sc|git|script|instalar(gata)?bot|proceso(del)?bot|bot(install|proceso)|installbot|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador|group(s|list|o(lista)?)|list(a)?(de)?grupo(s)?|grupolista|info(gata|bot)|informaci(ón|on)(gata|bot)|contactos?|contacts?|ping|speed|velocidad|rapidez|velocity|dona(te|si)|donar|apoyar|paypal|donating|aportar|report|request|reporte|bugs|bug|reportowner|reportes|reportar$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
