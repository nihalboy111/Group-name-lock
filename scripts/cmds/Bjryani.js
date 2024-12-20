const fs = require("fs");
module.exports.config = {
	name: "biryani",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "biryani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("BIRYANI")==0 || event.body.indexOf("Biryani")==0 || event.body.indexOf("biryani")==0 || event.body.indexOf(".biryani")==0) {
		var msg = {
				body: "💝 YE LO BBY BIRYANI KHAO 🥗\n\n(-─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Biryani.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
