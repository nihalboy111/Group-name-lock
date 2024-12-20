const fs = require("fs");
module.exports.config = {
name: "welcome",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "dungkon",
  description: "welcome",
  commandCategory: "No command marks needed",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("wellcome")==0 || (event.body.indexOf("@")==0 || (event.body.indexOf("wlcm")==0 || (event.body.indexOf("welcome")==0)))) {
    var msg = {
        body: "✰─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─\n─━━◉❖ 𝐰𝐞𝐥𝐥𝐜𝐨𝐦𝐞 𝐡𝐨 𝐠𝐲𝐚 𝐣𝐢🤗❖◉━━─  ❥═≛🥰 𝐮𝐦𝐦𝐚 😘 𝐮𝐦𝐦𝐚💋≛═❥  ─━━◉❖𝐭𝐡𝐚 💘 𝐭𝐡𝐚 👻𝐤𝐚𝐥 𝐤🙌❖◉━━─✺\n◉❖जुल्मी≛जाट❖◉:",
        attachment: fs.createReadStream(__dirname + `/noprefix/welcome.mp4`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }