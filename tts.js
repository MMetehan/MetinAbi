const logModule = require("./log");
const log = new logModule();
const fs = require("fs");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');

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

    console.log(message.member.voice)
    /**
     * Kullanıcının bir kanalda olup olmadığı kontrol ediliyor.
     * Bir kanalda değilse bir metin dönüyor.
     * bir kanala girmiş bulunmaktaysa o zaman sesleri alıp işliyor.
     */

    if (
      message.member.voice.channelId !== null &&
      message.member.voice.channelId !== undefined &&
      message.member.voice.channelId.trim() != ""
    ) {
      const connection = joinVoiceChannel({
        channelId: message.member.voice.channelId,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      });

      const player = createAudioPlayer();
      connection.subscribe(player);

      let textArray = text.split(" ");
      var newText = "";
      textArray.map((word, idx) => {
        if (idx !== textArray.length - 1) {
          newText = newText + word + "+";
        } else {
          newText = newText + word;
          
          const ttsUrl = "https://translate.google.com/translate_tts?ie=UTF-8&tl=" +
            languageCode +
            "&client=tw-ob&q=" +
            text.replace(" ", "+");
          
          console.log(ttsUrl);
          
          const resource = createAudioResource(ttsUrl);
          player.play(resource);

          player.on(AudioPlayerStatus.Playing, () => {
            console.log('TTS is playing');
          });

          player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
          });

          player.on('error', (error) => {
            console.log('Player error:', error);
            connection.destroy();
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
