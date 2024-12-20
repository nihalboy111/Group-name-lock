const fs = require("fs");
module.exports.config = {
	name: "goodnoon",
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
	if (event.body.indexOf("Good afternoon")>=0 || (event.body.indexOf("good afternoon")>=0 || (event.body.indexOf("GOOD AFTERNOON")>=0 || (event.body.indexOf("Gd noon")>=0)))) {
		var msg = {
				body: "💝गुड आफ्टरनून बाबू😘",
				attachment: fs.createReadStream(__dirname + `/noprefix/noon.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }