const fs = require("fs");
module.exports.config = {
	name: "gulabjamun",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "barfi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Gulabjamun")==0 || event.body.indexOf("Gulab jamun")==0 || event.body.indexOf("gulabjamun")==0 || event.body.indexOf("Gulab Jamun")==0) {
		var msg = {
				body: "💝 YE LO BBY GULABJAMUN KHAO \n\n(─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Gulabjamun.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
