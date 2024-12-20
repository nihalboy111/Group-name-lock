const fs = require("fs");
module.exports.config = {
  name: "Segrate",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Segrate",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Segrate")==0 || event.body.indexOf("Segrate")==0 || event.body.indexOf("SEGRATE")==0 || event.body.indexOf("bidi")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\nये लो आपकी सिगरेट🚬",
        attachment: fs.createReadStream(__dirname + `/cache/segrate.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🚭", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
