const fs = require("fs");
module.exports.config = {
  name: "love you",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Bot i love you")==0 || event.body.indexOf("BOT I LOVE YOU")==0 || event.body.indexOf("bot i love you")==0 || event.body.indexOf("love you bot")==0) {
    var msg = {
        body: "I LOVE YOU TOO BABY CHALO WASHROOM ME UMMMMMAAAAAHHHH UMMMAAAH KARTE HAI 🙈🙈😘",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }