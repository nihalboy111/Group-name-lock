module.exports.config = {
  name: "welcome",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN",
  description: "THIS BOT IS MADE BY JULMI JAAT",
  commandCategory: "PROFILE DP",
  cooldowns: 0
};

module.exports.run = async function({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
      let name = await Users.getNameUser(event.messageReply.senderID) 
  uid = event.messageReply.senderID
  var callback = () =>   api.sendMessage({body:`${name} 💞 आपके आने से आज ये शाम खाश हो गई,
सारे दिन की परेशानियाँ पल भर में ख़त्म हो गई..!!
«☆☆☆☆☆☆☆☆☆☆☆☆☆»
हमारी महफ़िल में लोग बिन बुलायें आते हैं,
क्योकि यहाँ स्वागत में फूल नहीं पलकें बिछाये जाते हैं..!!
«☆☆☆☆☆☆☆☆☆☆☆☆☆»
धन्य हुए आज तो हम मिट गए सारे अधियारे,
आँखो को बहुत सुकून आया जो आप हमारे ग्रुप पधारे..!!
«☆☆☆☆☆☆☆☆☆☆☆☆☆»
आये वो हमारी ग्रुप में कुछ इस तरह,
कि हर तरफ़ चाँद-तारे झिलमिलाने लगे,
देखकर दिल उनको झूमने लगा, 💞`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 

  }
}
}