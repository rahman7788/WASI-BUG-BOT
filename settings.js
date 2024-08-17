
const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "923415404892"
global.ownername = "🐛 MR Ak "
global.ytname = "YT: Dont have"
global.socialm = "GitHub: private"
global.location = "Pakistan, Lahore"

global.ownernumber = 923415404892'  //creator number
global.ownername = ' MR Ak ' //owner name
global.botname = 'WASI TECH BUG BOT ' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'AK'

//console view/theme
global.themeemoji = '🪀'
global.wm = "AK TECH"

//theme link
global.link = 'https://whatsapp.com'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = true//auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '🚨DGXeon🚨',
}
global.bimg = '' 
//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Wasimedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
