const fs = require("fs");
module.exports.config = {
	name: "Chay",
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
	if (event.body.indexOf("tea")>=0 || (event.body.indexOf("chai")>=0 || (event.body.indexOf("Chay")>=0 || (event.body.indexOf("Tea")>=0)))) {
		var msg = {
				body: "ये लो बाबू चाय पी लो😋",
				attachment: fs.createReadStream(__dirname + `/noprefix/ttea.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
