const fs = require("fs");
module.exports.config = {
  name: "pizza",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "pizza",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Pizza")==0 || event.body.indexOf("pizz")==0 || event.body.indexOf("PIZZA")==0 || event.body.indexOf("pizza")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\n🍕 𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐏𝐈𝐙𝐙𝐀 𝐊𝐇𝐀𝐎 😋",
        attachment: fs.createReadStream(__dirname + `/cache/pizza.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
