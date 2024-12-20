const path = require("path");
const fs = require("fs");

let bannedWords = {};
let warnings = {};
let badWordsActive = {};

module.exports.config = {
  name: "badwords",
  version: "1.0.0",
  hasPermission: 1,
  credits: "ABHI YADAV",
  description: "THIS BOT IS MADE BY ABHI YADAV",
  usePrefix: true,
  commandCategory: "admin",
  usages: "add [word] | remove [word] | list | on | off",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID } = event;

  const loadWords = () => {
    const wordFile = path.join(__dirname, `../commands/cache/${threadID}.json`);
    if (fs.existsSync(wordFile)) {
      const words = fs.readFileSync(wordFile, "utf8");
      bannedWords[threadID] = JSON.parse(words);
    } else {
      bannedWords[threadID] = [];
    }
  };

  loadWords();

  if (!badWordsActive[threadID]) return; 

  const isAdmin = (await api.getThreadInfo(threadID)).adminIDs.some(adminInfo => adminInfo.id === api.getCurrentUserID());

  if (!isAdmin) {
    api.sendMessage("Bot Need Admin Privilege", threadID);
    return;
  }

  const messageContent = event.body.toLowerCase();
  const hasBannedWord = bannedWords[threadID].some(bannedWord => messageContent.includes(bannedWord.toLowerCase()));

  if (hasBannedWord) {
    if (!warnings[senderID]) warnings[senderID] = 0;

    warnings[senderID]++;
    if (warnings[senderID] === 2) {
      api.sendMessage("आपको पहले ही वार्निंग ⚠️ दिया था की गाली मत देना दुबारा पर अपने मेरी बात नही मानी इसलिए आपको इस ग्रुप से निकाला जाता है। निकलो अब 😡", threadID, messageID);
      api.removeUserFromGroup(senderID, threadID); 
      warnings[senderID] = 1;
    } else {
      api.sendMessage(`आपको लास्ट वार्निंग ⚠️ दी जा रही है। अगर इस बार अपने गाली दिया तो आपको ग्रुप से निकाल दिया जाएगा 😡✊`, threadID, messageID);
    }
  }
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;

  if (!args[0]) {
    return api.sendMessage("Please specify an action (add, remove, list, on, off) and appropriate data.", threadID);
  }

  const wordFile = path.join(__dirname, `../commands/cache/${threadID}.json`);
  if (fs.existsSync(wordFile)) {
    const words = fs.readFileSync(wordFile, "utf8");
    bannedWords[threadID] = JSON.parse(words);
  } else {
    bannedWords[threadID] = [];
  }

  const isAdmin = (await api.getThreadInfo(threadID)).adminIDs.some(adminInfo => adminInfo.id === api.getCurrentUserID());

  if (!isAdmin) {
    api.sendMessage("🛡️ | Bot Need Admin Privilege in short you need to admin the bot to your group chat!", threadID);
    return;
  }

  const action = args[0];
  const word = args.slice(1).join(' ');

  switch (action) {
    case 'add':
      bannedWords[threadID].push(word);
      api.sendMessage(`✅ | Added ${word} to the list of banned words.`, threadID);
      break;
    case 'remove':
      const index = bannedWords[threadID].indexOf(word);
      if (index !== -1) {
        bannedWords[threadID].splice(index, 1);
        api.sendMessage(`✅ | Removed ${word} from the list of banned words.`, threadID);
      } else {
        api.sendMessage(`The word ${word} wasn't found on the list of banned words.`, threadID);
      }
      break;
    case 'list':
      api.sendMessage(`📝 | List of banned words:\n${bannedWords[threadID].join(', ')}`, threadID);
      break;
    case 'on':
      badWordsActive[threadID] = true;
      api.sendMessage(`Badwords has been activated.`, threadID);
      break;
    case 'off':
      badWordsActive[threadID] = false;
      api.sendMessage(`Badwords has been deactivated.`, threadID);
      break;
    default: 
      api.sendMessage("Invalid action. Please use 'add', 'remove', 'list', 'on' or 'off'.", threadID);
  }

  fs.writeFileSync(wordFile, JSON.stringify(bannedWords[threadID]), "utf8");
}