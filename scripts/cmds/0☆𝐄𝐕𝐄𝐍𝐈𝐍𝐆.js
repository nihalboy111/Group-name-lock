const fs = require("fs");
modulconst fs = require("fs");
module.exports.config = {
	name: "evening",
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
	if (event.body.indexOf("Good evening")>=0 || (event.body.indexOf("good evening")>=0 || (event.body.indexOf("GOOD EVENING")>=0 || (event.body.indexOf("Gd evening")>=0)))) {
		var msg = {
				body: `💝GOOD EVENING BABU😘`,
				attachment: fs.createReadStream(__dirname + `/noprefix/evening.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }