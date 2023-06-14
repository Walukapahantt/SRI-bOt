import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'en'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:1.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `*◈ ${user.registered === true ? user.name : `👉 ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`} ◈*
◍ ► WELCOME @${m.sender.split("@")[0]}

▻ *ʙᴏᴛ ɴᴀᴍᴇ* : ${packname}
▻ *ᴏᴡɴᴇʀ*      : Wᴀʟᴜᴋ𝙰 ᴾᴬᴴᴬᴺ
▻ *ᴠᴇʀꜱɪᴏɴ*   : ${vs}

🪀 Enjoy In the 𝚂𝚁𝙸 ᴮᴼᵀ 🍆 
        Have a Great Day 😇
            Powered by Replit 🎲

╭──❰ *${lenguajeGB.smsMenuTotal1()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creadora' : 'owner'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'contacto' : 'contact'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cuentasgb' : 'account'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'donar' : 'donate'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'codigo' : 'sc'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gruposgb' : 'groupsgb'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instalarbot' : 'installbot'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'estado' : 'status'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'velocidad' : 'ping'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogata' : 'infobot'}
│ ${lenguajeGB.lenguaje() == 'es' ? 'términos y condiciones' : 'terms'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal2()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'serbot' : 'jadibot'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bots' : 'subsbots'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'pausarsb' : 'pausesb'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'eliminarsesion' : 'delsession'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal3()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *texto*' : 'googlef *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bot *texto*' : 'simsimi *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *texto*' : 'chatgpt *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yts *texto*' : 'yts *text*'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal4()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'imagen *texto*' : 'gimage *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'facebook *enlace*' : 'facebookdl *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mediafire *enlace*' : 'mediafiredl *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *nombre o enlace*' : 'play *name*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yta *enlace*' : 'yta *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytv *enlace*' : 'ytv *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmax *enlace*' : 'ytmax *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytadoc *enlace*' : 'ytadoc *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytvdoc *enlace*' : 'ytvdoc *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ytmaxdoc *enlace*' : 'ytmaxdoc *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tiktok *enlace*' : 'tkdl *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'openiamage *texto*' : 'dalle *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'midjourney *texto*' : 'openjourney *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotify *texto o enlace*' : 'spotify *text or link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'spotifysearch *texto*' : 'spotifysearch *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'instagram *enlace*' : 'instagram *link*'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal5()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *sticker*' : 'toimg *sticker*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'url *imagen*' : 'tourl *image*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp4 *sticker*' : 'tovideo *sticker*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gif *video*' : 'togif *video*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp3 *video o audio*' : 'tovn *video or audio*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tts *texto*' : 'totts *text*'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal6()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'infogrupo' : 'groupinfo'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'admins' : 'dmins'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'enlace' : 'linkgroup'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'inspeccionar *enlace*' : 'inspect *link*'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal7()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'notificar *texto*' : 'hidetag'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'sacar *tag*' : 'kick *tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invitar *número*' : 'invite *number*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'daradmin *tag*' : 'promote *tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'quitaradmin *tag*' : 'demote *tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'prohibir *tag*' : 'deprive *tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desprohibir *tag*' : 'undeprive *tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarwelcome *texto*' : 'setwelcome'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarbye *texto*' : 'setbye'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiardesc *texto*' : 'setdesc'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarnombre *texto*' : 'setname'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarpp *imagen*' : 'setppgc *image*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevoenlace' : 'resetlink'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo abrir' : 'group open'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo cerrar' : 'group close'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invocar' : 'tagall'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal8()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarbass' : 'editbass'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarvibra' : 'editvibra'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarblown' : 'editblown'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editardeep' : 'editdeep'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarearrape' : 'editearrape'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarfast' : 'editfast'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarfat' : 'editfat'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarnightcore' : 'editnightcore'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarrobot' : 'editrobot'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarslow' : 'editslow'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editarsmooth' : 'editsmooth'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editartupai' : 'edittupai'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'editaraudio8d' : 'editaudio8d'}
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal9()}* ❱
│ ${usedPrefix}bass
│ ${usedPrefix}blown
│ ${usedPrefix}deep
│ ${usedPrefix}earrape
│ ${usedPrefix}fast
│ ${usedPrefix}fat
│ ${usedPrefix}nightcore
│ ${usedPrefix}reverse
│ ${usedPrefix}robot
│ ${usedPrefix}slow
│ ${usedPrefix}smooth
│ ${usedPrefix}tupai
│ ${usedPrefix}audio8d
│ ${usedPrefix}echo
│ ${usedPrefix}distortion
│ ${usedPrefix}pitch
│ ${usedPrefix}reverb
│ ${usedPrefix}flanger
│ ${usedPrefix}apulsator
│ ${usedPrefix}tremolo
│ ${usedPrefix}chorus
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal10()}* ❱
│ ${usedPrefix}on
│ ${usedPrefix}off
╰────────────⦁

╭──❰ *${lenguajeGB.smsMenuTotal12()}* ❱
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'respaldo' : 'backup'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banusuario *@tag*' : 'banuser *@tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanusuario *@tag*' : 'unbanuser *@tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tenerpoder' : 'autoadmin'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevabiobot *texto*' : 'setbiobot *texto*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevonombrebot *texto*' : 'setbiobot *texto*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevafotobot *imagen*' : 'setppbot *image*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'actualizar' : 'update'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banearchat' : 'banchat'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanearchat' : 'unbanchat'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'salir' : 'leave'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bloquear *@tag*' : 'block *@tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbloquear *@tag*' : 'unblock *@tag*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'obtenercodigo *nombre de archivo*' : 'getplugin *filename*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'borrardatos *número*' : 'deletedatauser *number*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'unete *enlace*' : 'join *link*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcsubbot *texto*' : 'bcsubbot *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcc *texto*' : 'bcchats *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcgc *texto*' : 'broadcastgc *text*'}
│ ${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bc *texto*' : 'broadcastall *text*'}
╰────────────⦁
 `.trim()
    
const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'report' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
