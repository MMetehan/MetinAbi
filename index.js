const Discord = require("discord.js");
const client = new Discord.Client();

const ttsModule = require("./tts");
const tts = new ttsModule();

const helpModule = require("./help");
const help = new helpModule();

const kuraModule = require("./kura");
const kura = new kuraModule();

const rollModule = require("./roll");
const roll = new rollModule();

const axios = require("axios").default;
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5001;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/commands", (req, res) => res.render("pages/commands"))
  .get("/wakeup", (req, res) => res.json({ tag: "holly crab" }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

setInterval(() => {
  axios
    .get("https://metinabi.herokuapp.com/wakeup")
    .then((resp) => {
      console.log("heyyo", resp.data.tag);
    })
    .catch((err) => {
      console.log("noooo", err);
    });
}, 15 * 1000 * 60);

const kufurler = [
  "**************",
  "*********************",
  "*********************************************",
  "********************",
  "**********************************",
  "*************************************************",
  "***********************************************************",
  "***************************",
  "***************",
];

client.once("ready", () => {
  console.log("Ready!");
  console.log(client.user.id);
  console.log(client.users.resolve());
});

client.login("TOKEN_HERE");

client.on("guildCreate", (guild) => {
  const embedText = new Discord.MessageEmbed();
  embedText.setTitle("Metin Abi");
  embedText.setDescription(
    "Komutlarımı görmek için *Metin Abi* yazısına tıklamanız yada +mts help yazmanız yeterlidir."
  );
  embedText.setColor("#001eff");
  embedText.setThumbnail("https://www.linkpicture.com/q/adsz_Lgs_icon.ico");
  embedText.setURL("https://metinabi.herokuapp.com/");
  embedText.addFields([
    {
      name: "+mts help",
      value:
        "Yazıp komutlarıma istediğiniz zaman erişebilirsiniz yahut https://metinabi.herokuapp.com/ websitesine gelip kodlara bakabilirsiniz.",
      inline: true,
    },
  ]);
  let guildChannel = guild.channels.cache.find(
    (t) =>
      t.name.toLowerCase().indexOf("general") > -1 ||
      t.name.toLowerCase().indexOf("chat") > -1 ||
      t.name.toLowerCase().indexOf("genel") > -1 ||
      t.name.toLowerCase().indexOf("sohbet") > -1 ||
      t.name.toLowerCase().indexOf("çet") > -1
  ).id;
  let sendedChannel = client.channels.cache.get(guildChannel);
  if (sendedChannel) sendedChannel.send(embedText);
});

client.on("message", async (message) => {
  if (true) {
    var shortMessage = message.content.trim();
    if (shortMessage.indexOf("+bts") == 0) {
      let secilenKufur = kufurler[Math.floor(Math.random() * kufurler.length)];
      return message.channel.send(
        `<@${message.author.id}> beni o grupla mı karıştırdın? ${secilenKufur}`
      );
    } else if (shortMessage.toLowerCase() === "+mts ben kimim") {
      return message.channel.send("Yavşak!");
    } else if (
      shortMessage.toLowerCase() == "+mts help" ||
      shortMessage.toLowerCase() == "+mts"
    ) {
      help.HelpMessage(message, shortMessage);
    } else if (shortMessage.indexOf("+mts kuracek") == 0) {
      kura.kuraCek(message, shortMessage);
    } else if (shortMessage.indexOf("+mts roll") == 0) {
      roll.mainCommand(message, shortMessage);
    } else if (shortMessage.indexOf("+ötv") == 0) {
      tts.textToSpeech(message, "+ötv kardeşim çok yükseldi ya");
    } else if (shortMessage.indexOf("+mts") == 0) {
      tts.textToSpeech(message, shortMessage);
    }
  } else {
    message.channel.send(
      //canım sıkıldığında arkadaşlarımın canını sıkmak için kullandığım bir alandı hiç bir komutu kullanamıyordu :D
      `<@${message.author.id}> harcını yatır öyle gel.`
    );
  }
});
