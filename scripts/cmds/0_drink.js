const fs = require("fs");
module.exports.config = {
  name: "Drink",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "drink",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Drink")==0 || event.body.indexOf("drink")==0 || event.body.indexOf("DRINK")==0 || event.body.indexOf("daru")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\n आ जाओ मिलकर पार्टी करे🍺",
        attachment: fs.createReadStream(__dirname + `/cache/drink.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
