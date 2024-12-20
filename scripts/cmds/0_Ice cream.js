const fs = require("fs");
module.exports.config = {
  name: "icecream",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "icecream",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Icecream")==0 || event.body.indexOf("icecream")==0 || event.body.indexOf("ice-cream")==0 || event.body.indexOf("ICE-CREAM")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\nये लो बाबू आइस्क्रीम खाओ😋",
        attachment: fs.createReadStream(__dirname + `/cache/1.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥶", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
