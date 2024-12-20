const fs = require("fs");
module.exports.config = {
  name: "chumma",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("kiss") ||
     react.includes("ummm") ||
     react.includes("chumma") ||
     react.includes("chuma") ||
     react.includes("चुम्मा") ||
react.includes("किस्स")) {
    var msg = {
        body: `${name} ये लो बाबू चुम्मा जल्दी से पकड़ लो वरना कोई ले लेगा🙈😘👈`,attachment: fs.createReadStream(__dirname + `/noprefix/kiss.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }