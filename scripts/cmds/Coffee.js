const fs = require("fs");
module.exports.config = {
	name: "Coffee",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Coffee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Coffee")==0 || event.body.indexOf("coffee")==0 || event.body.indexOf("COFFEE ")==0 || event.body.indexOf("cofe")==0) {
		var msg = {
				body: "🙂𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐎𝐅𝐅𝐄𝐄🙂🤟\n\n(─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─)",
				attachment: fs.createReadStream(__dirname + `/cache/Coffee.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
