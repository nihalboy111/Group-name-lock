const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "new2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "THE_FAHEEM",
  usePrefix: false,
  description: "goibot",
  commandCategory: "system",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
   const data = [
    "1435018460122444",
    "387545538037997",
    "526220484778050",
    "526220691444696",
    "526220814778017",
    "526220978111334",
    "526221104777988",
    "526221318111300",
    "526221564777942",
    "526221711444594",
    "526221971444568",
    "387545531371331",
    "237318537087806",
     "997238374196368"
  ];
  const sticker = data[Math.floor(Math.random() * data.length)];

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage({sticker: "629261957190121"}, event.threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage({sticker: "1426730794071698"}, event.threadID);
   };


   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage({sticker: "2523888217886078"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage({sticker: "2523888217886078"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage({sticker: "2523888217886078"}, event.threadID);
   };
   if ((event.body.toLowerCase() == "love") || (event.body.toLowerCase() == "Love")) {
    return api.sendMessage({sticker: "526221104777988"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
     return api.sendMessage({sticker: "526225161444249"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
     return api.sendMessage({sticker: "466044071430389"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "Assalamualaikum")) {
      return api.sendMessage({sticker: "466040564764073"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "ma ja rha") || (event.body.toLowerCase() == "ma ja rhi")) {
      return api.sendMessage({sticker: "466044418097021"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
      return api.sendMessage({sticker: "466044418097021"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "faheem") || (event.body.toLowerCase() == "Faheem")) {
     return api.sendMessage({sticker: "466043651430431"}, event.threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
      return api.sendMessage({sticker: "466042908097172"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
      return api.sendMessage({sticker: "466042908097172"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
      return api.sendMessage({sticker: "466043324763797"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
      return api.sendMessage({sticker: "1193275907437966"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
      return api.sendMessage({sticker: "1193275907437966"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
      return api.sendMessage({sticker: "1193275907437966"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
      return api.sendMessage({sticker: "1193275907437966"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
      return api.sendMessage({sticker: "178517509293270"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
      return api.sendMessage({sticker: "193082987877305"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage({sticker: "237317540421239"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
      return api.sendMessage({sticker: "237317540421239"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
      return api.sendMessage({sticker: "237317540421239"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
      return api.sendMessage({sticker: "237317540421239"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
      return api.sendMessage({sticker: "237317540421239"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
      return api.sendMessage({sticker: "237317540421239"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage({sticker: "1841028525949923"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
      return api.sendMessage({sticker: "1841028525949923"}, event.threadID);
   };


   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
      return api.sendMessage({sticker: "488541421259303"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
      return api.sendMessage({sticker: "488541421259303"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
      return api.sendMessage({sticker: "488541421259303"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
      return api.sendMessage({sticker: "466041158097347"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "☺") || (event.body.toLowerCase() == "☺☺")) {
     return api.sendMessage({sticker: "466041158097347"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
      return api.sendMessage({sticker: "788171674590350"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
      return api.sendMessage({sticker: "788171674590350"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
      return api.sendMessage({sticker: "213405895475302"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
      return api.sendMessage({sticker: "374676783450561"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage({sticker: "380334929551413"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
      return api.sendMessage({sticker: "380334929551413"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
      return api.sendMessage({sticker: "741787395862965"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
      return api.sendMessage({sticker: "741787395862965"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
      return api.sendMessage({sticker: "741787395862965"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
      return api.sendMessage({sticker: "741787395862965"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
      return api.sendMessage({sticker: "254597316003639"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
      return api.sendMessage({sticker: "254598039336900"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
      return api.sendMessage({sticker: "526224694777629"},event.threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase()  == "😬😬")) {
      return api.sendMessage({sticker: "254594829337221"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
      return api.sendMessage({sticker: "254594082670629"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage({sticker: "254594082670629"}, threadID);
   };

   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
      return api.sendMessage({sticker: "476346352906018"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
      return api.sendMessage({sticker: "476346352906018"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
      return api.sendMessage({sticker: "476349949572325"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
      return api.sendMessage({sticker: "255665551603273"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
      return api.sendMessage({sticker: "257794161390412"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
      return api.sendMessage({sticker: "441820969640235"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
      return api.sendMessage({sticker: "1426734857404625"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
      return api.sendMessage({sticker: "1426735700737874"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
      return api.sendMessage({sticker: "1426731334071644"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
      return api.sendMessage({sticker: "1426736140737830"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
      return api.sendMessage({sticker: "1426734154071362"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
      return api.sendMessage({sticker: "1426733890738055"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
      return api.sendMessage({sticker: "1426730794071698"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
      return api.sendMessage({sticker: "1426730794071698"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
      return api.sendMessage({sticker: "488540744592704"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
      return api.sendMessage({sticker: "488540744592704"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage({sticker: "2041022286125245"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
      return api.sendMessage({sticker: "147663578749239"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
      return api.sendMessage({sticker: "147663578749239"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "☹") || (event.body.toLowerCase() == "☹☹")) {
      return api.sendMessage({sticker: "2041014739459333"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
      return api.sendMessage({sticker: "2041014739459333"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
      return api.sendMessage({sticker: "2041014739459333"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
      return api.sendMessage({sticker: "2041021119458695"}, event.threadID);
   };


      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
      return api.sendMessage({sticker: "2041021119458695"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
      return api.sendMessage({sticker: "2041015182792622"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
      return api.sendMessage({sticker: "2041015182792622"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
      return api.sendMessage({sticker: "2041015182792622"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
      return api.sendMessage({sticker: "2041015182792622"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
      return api.sendMessage({sticker: "2041015182792622"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
      return api.sendMessage({sticker: "2041015182792622"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
      return api.sendMessage({sticker: "1747091025602149"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
      return api.sendMessage({sticker: "653197518046956"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
      return api.sendMessage({sticker: "653197388046969"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
      return api.sendMessage({sticker: "488541421259303"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
      return api.sendMessage({sticker: "488524371261008"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
      return api.sendMessage({sticker: "865566100509924"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
      return api.sendMessage({sticker: "865567323843135"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
      return api.sendMessage({sticker: sticker}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
      return api.sendMessage({sticker: "526223111444454"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
      return api.sendMessage({sticker: "2523892391218994"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
      return api.sendMessage({sticker: "401768403292058"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
      return api.sendMessage({sticker: "2523892964552270"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
      return api.sendMessage({sticker: "213405732141985"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
      return api.sendMessage({sticker: "213419275473964"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
      return api.sendMessage({sticker: "789355277820053"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
      return api.sendMessage({sticker: "1426730794071698"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
      return api.sendMessage({sticker: "237319520421041"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
      return api.sendMessage({sticker: "237320150420978"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
      return api.sendMessage({sticker: "237319140421079"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "❤") || (event.body.toLowerCase() == "💚")) {
      return api.sendMessage({sticker: "608457799752028"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
      return api.sendMessage({sticker: "608457799752028"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
      return api.sendMessage({sticker: "608457799752028"}, event.threadID);
   };

         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
      return api.sendMessage({sticker: "1841028539283255"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
      return api.sendMessage({sticker: "1841028482616594"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "masoom") || (event.body.toLowerCase() == "Masoom")) {
      return api.sendMessage({sticker: "193083121210625"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
      return api.sendMessage({sticker: "193082931210644"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
      return api.sendMessage({sticker: "193082891210648"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "love") || (event.body.toLowerCase() == "Pyaar")) {
      return api.sendMessage({sticker: "237319333754393"}, event.threadID);
   };

      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
      return api.sendMessage({sticker: "178521885959499"}, event.threadID);
   };


   if ((event.body.toLowerCase() == "Ok") || (event.body.toLowerCase() == "Okay")) {
      return api.sendMessage({sticker: "997238374196368"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "G") || (event.body.toLowerCase() == "Han G")) {
      return api.sendMessage({sticker: "641022995913312"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmm")) {
      return api.sendMessage({sticker: "387545804704637"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
      return api.sendMessage({sticker: "997238374196368"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
      return api.sendMessage({sticker: "2523891204552446"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
       return api.sendMessage({sticker: sticker}, event.threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
      return api.sendMessage({sticker: "272548386421883"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
      return api.sendMessage({sticker: "272548386421883"}, event.threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     api.sendMessage({sticker: "272548386421883"}, event.threadID);
   };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var ms = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(ms, event.threadID, () => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 1)
    }, event.messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }