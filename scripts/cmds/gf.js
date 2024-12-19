module.exports = {
 config: {
	 name: "gf",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "gf") {
 return message.reply({
 body: " 「 MASTI TIME\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/nWD4xk3.mp4")
 });
 }
 }
}
