const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/yCYYyEJ.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Ameen*
*owner number wa.me/917994909899*

*💘𝙎𝙋𝙍𝙀𝘼𝘿❥︎𝙇𝙊𝙑𝙀☯︎💘*

*github link : https://github.com/Dilmano/Amalser_v1*

*audio commads : https://github.com/Dilmano/Amalser_v1/tree/master/uploads*
`}) 

}));
