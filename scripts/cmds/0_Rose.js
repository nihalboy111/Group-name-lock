const fs = require("fs");
module.exports.config = {
  name: "Rose",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "rose",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Rose")==0 || event.body.indexOf("rose")==0 || event.body.indexOf("ful")==0 || event.body.indexOf("gulab")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\n ये लो बेबी आपकी तरह खूबसूरत फूल🌹",
        attachment: fs.createReadStream(__dirname + `/cache/Rose.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
