const fs = require("fs");
module.exports.config = {
	name: "hate u",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Shankar Suman", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I hate you")>=0 || (event.body.indexOf("I hate you")>=0 || (event.body.indexOf("hate you")>=0 || (event.body.indexOf("hate")>=0)))) {
		var msg = {
				body: "𝐈 𝐇𝐀𝐓𝐄 𝐔 𝐓𝐎🤧😏",
				attachment: fs.createReadStream(__dirname + `/noprefix/hate.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
