const fs = require("fs");
module.exports.config = {
  name: "Golgape",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "Golgpa",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Golgpe")==0 || event.body.indexOf("golgpe")==0 || event.body.indexOf("Golgapa")==0 || event.body.indexOf("golgapa")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\n ये लो बेबी गोलगप्पे खाओ😋",
        attachment: fs.createReadStream(__dirname + `/cache/2.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😚", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
