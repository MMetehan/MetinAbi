const logModule = require("./log");
const log = new logModule();
const fs = require("fs");

class TTSModule {
  constructor() {}

  /**
   * @message string
   * @shortMessage string
   */
  async textToSpeech(message, shortMessage) {
    //mesajın loglaması yapılıyor.
    this.logMessage(message, shortMessage);

    let text = shortMessage.replace("+mts", " ").trim();
    let languageCode = "tr";

    //farklı bir dil var mı yok mu kontrol edilip varsa ayarlanıyor.
    if (text.indexOf("-/-") > -1) {
      languageCode = text.split("-/-")[1];
      text = text.split("-/-")[0];
    }

    /**
     * Kullanıcının bir kanalda olup olmadığı kontrol ediliyor.
     * Bir kanalda değilse bir metin dönüyor.
     * bir kanala girmiş bulunmaktaysa o zaman sesleri alıp işliyor.
     */

    if (
      message.member.voice.channelID !== null &&
      message.member.voice.channelID !== undefined &&
      message.member.voice.channelID.trim() != ""
    ) {
      const connectionChannel = await message.member.voice.channel.join();
      let textArray = text.split(" ");
      var newText = "";
      textArray.map((word, idx) => {
        if (idx !== textArray.length - 1) {
          newText = newText + word + "+";
        } else {
          newText = newText + word;
          const dispatcher = connectionChannel.play(
            "https://translate.google.com/translate_tts?ie=UTF-8&tl=" +
              languageCode +
              "&client=tw-ob&q=" +
              text.replace(" ", "+"),
            { volume: 1 }
          );
          console.log(
            "https://translate.google.com/translate_tts?ie=UTF-8&tl=" +
              languageCode +
              "&client=tw-ob&q=" +
              newText
          );
          dispatcher.on("start", () => {});
          dispatcher.on("finish", async () => {
            await dispatcher.destroy();
            fs.unlink("./output.mp3", (err) => {
              console.log("fs unlink", err);
            });
            await connectionChannel.disconnect();
          });

          dispatcher.on("error", (error) => {
            console.log("dispatcher", error);
          });
        }
      });
    } else {
      if (message.author.id === "366276635478982656") {
        return message.channel.send(
          `<@${message.author.id}> efendim, bir kanala girseniz daha çok yardımcı olabilirim.`
        );
      } else {
        return message.channel.send(
          `<@${message.author.id}> yavaş, Önce bir kanala gir lan PUŞT!`
        );
      }
    }
  }

  logMessage(message, shortMessage) {
    log.logCommands({
      id: message.author.id,
      username: message.author.username,
      shortMessage: shortMessage,
    });
  }
}

module.exports = TTSModule;
