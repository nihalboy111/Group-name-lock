const fs = require("fs");
module.exports.config = {
  name: "hooka",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "huka",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Huka")==0 || event.body.indexOf("huka")==0 || event.body.indexOf("HUKA")==0 || event.body.indexOf("HOKA")==0) {
    var msg = {
        body: "─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\n आ जाओ हुक्का पीते हा😜",
        attachment: fs.createReadStream(__dirname + `/cache/Huka.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤩", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }
