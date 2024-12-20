const fs = require("fs");
module.exports.config = {
	name: "jalebi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "jalebi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("JALEBI")==0 || event.body.indexOf("Jalebi")==0 || event.body.indexOf("jalebi")==0 || event.body.indexOf(".jalebi")==0) {
		var msg = {
				body: "💝 YE LO BBY JALEBI KHAO 🥨\n\n(─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Jalebi.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
