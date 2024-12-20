const fs = require("fs");
module.exports.config = {
	name: "pasta",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pasta",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("PASTA")==0 || event.body.indexOf("Pasta")==0 || event.body.indexOf("pasta")==0 || event.body.indexOf(".pasta")==0) {
		var msg = {
				body: "💝 YE LO BBY PASTA KHAO 🥐\n\n(─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Pasta.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥐", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
