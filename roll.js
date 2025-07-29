const logModule = require("./log");
const log = new logModule();

/*

Ali ile bilrikte bütün zar çeşitlerine metinler atanacak gerekirse odaya katılıp ses bile çıkartacak.
 */

class Roll {
  constructor() {}

  mainCommand(message, shortMessage) {
    this.LogCommand(message, shortMessage);

    let diceType = shortMessage.split("roll")[1].trim();
    if (diceType == "d2") {
      let diceFace = this.diceD2();
      return message.channel.send(`<@${message.author.id}>  ${diceFace}`);
    } else if (diceType == "d6") {
      let diceFace = this.diceD6();
      return message.channel.send(`<@${message.author.id}>  ${diceFace}`);
    } else if (diceType == "d8") {
      let diceFace = this.diceD8();
      return message.channel.send(`<@${message.author.id}>  ${diceFace}`);
    } else if (diceType == "d10") {
      let diceFace = this.diceD10();
      return message.channel.send(`<@${message.author.id}>  ${diceFace}`);
    } else if (diceType == "d12") {
      let diceFace = this.diceD12();
      return message.channel.send(`<@${message.author.id}>  ${diceFace}`);
    } else if (diceType == "d18") {
      let diceFace = this.diceD18();
      return message.channel.send(`<@${message.author.id}>  ${diceFace}`);
    } else if (diceType == "d20") {
      let diceFace = this.diceD20();
      return message.channel.send(`<@${message.author.id}>  ${diceFace}`);
    } else if (diceType == "") {
      return message.channel.send("bir zar seçmen lazım ama canısı");
    } else {
      return message.channel.send(
        "Zar listesini bilmiyorsan +mts help yaz ciqerim."
      );
    }
  }

  diceD2() {
    let diceFace = Math.floor(Math.random() * 11000);

    if (diceFace >= 0 && diceFace < 500) {
      return "Bu kadar olasılığın içerisinde attığın zarın dik gelmesine ne demeli...";
    } else if (diceFace >= 500 && diceFace < 6250) {
      return "Yazı!";
    } else {
      return "Tura!";
    }
  }

  diceD6() {
    let diceFace = Math.floor(Math.random() * 7000);
    if (diceFace >= 0 && diceFace < 1000) {
      return this.randomZeroFaceStrings();
    } else if (diceFace >= 1000 && diceFace < 2000) {
      return 1;
    } else if (diceFace >= 2000 && diceFace < 3000) {
      return 2;
    } else if (diceFace >= 3000 && diceFace < 4000) {
      return 3;
    } else if (diceFace >= 4000 && diceFace < 5000) {
      return 4;
    } else if (diceFace >= 5000 && diceFace < 6000) {
      return 5;
    } else {
      let strings = [
        "Düşeş olmasa da şeş. Altı attın al kapıları al.",
        "Zar mı tutuyon lan bu ne. 6 attın yine!",
        "Dönerken üflemesen gelmezdi ama 6 geldi şanslısın.",
      ];
      return strings[Math.floor(Math.random() * strings.length)];
    }
  }

  diceD8() {
    let diceFace = Math.floor(Math.random() * 9000);
    if (diceFace >= 0 && diceFace < 1000) {
      return this.randomZeroFaceStrings();
    } else if (diceFace >= 1000 && diceFace < 2000) {
      return 1;
    } else if (diceFace >= 2000 && diceFace < 3000) {
      return 2;
    } else if (diceFace >= 3000 && diceFace < 4000) {
      return 3;
    } else if (diceFace >= 4000 && diceFace < 5000) {
      return 4;
    } else if (diceFace >= 5000 && diceFace < 6000) {
      return 5;
    } else if (diceFace >= 6000 && diceFace < 7000) {
      return 6;
    } else if (diceFace >= 7000 && diceFace < 8000) {
      return 7;
    } else {
      let strings = [
        "8'mi attın sen? Helal len.",
        "Zar mı tutuyon lan bu ne. 8 attın yine!",
        "Dönerken üflemesen gelmezdi ama 8 geldi şanslısın.",
      ];
      return strings[Math.floor(Math.random() * strings.length)];
    }
  }

  diceD10() {
    let diceFace = Math.floor(Math.random() * 11000);
    if (diceFace >= 0 && diceFace < 1000) {
      return this.randomZeroFaceStrings();
    } else if (diceFace >= 1000 && diceFace < 2000) {
      return 1;
    } else if (diceFace >= 2000 && diceFace < 3000) {
      return 2;
    } else if (diceFace >= 3000 && diceFace < 4000) {
      return 3;
    } else if (diceFace >= 4000 && diceFace < 5000) {
      return 4;
    } else if (diceFace >= 5000 && diceFace < 6000) {
      return 5;
    } else if (diceFace >= 6000 && diceFace < 7000) {
      return 6;
    } else if (diceFace >= 7000 && diceFace < 8000) {
      return 7;
    } else if (diceFace >= 8000 && diceFace < 9000) {
      return 8;
    } else if (diceFace >= 9000 && diceFace < 10000) {
      return 9;
    } else {
      let strings = [
        "Oha on mu o? Harbiden 10 attın helal len.",
        "Ve tüccarı malları sana beleşe vermeye ikna ettin. Hem de sadece 10 atarak...",
        "Zar seni bu sefer sevdi! 10 attın!",
      ];
      return strings[Math.floor(Math.random() * strings.length)];
    }
  }

  diceD12() {
    let diceFace = Math.floor(Math.random() * 13000);
    if (diceFace >= 0 && diceFace < 1000) {
      return this.randomZeroFaceStrings();
    } else if (diceFace >= 1000 && diceFace < 2000) {
      return 1;
    } else if (diceFace >= 2000 && diceFace < 3000) {
      return 2;
    } else if (diceFace >= 3000 && diceFace < 4000) {
      return 3;
    } else if (diceFace >= 4000 && diceFace < 5000) {
      return 4;
    } else if (diceFace >= 5000 && diceFace < 6000) {
      return 5;
    } else if (diceFace >= 6000 && diceFace < 7000) {
      return 6;
    } else if (diceFace >= 7000 && diceFace < 8000) {
      return 7;
    } else if (diceFace >= 8000 && diceFace < 9000) {
      return 8;
    } else if (diceFace >= 9000 && diceFace < 10000) {
      return 9;
    } else if (diceFace >= 10000 && diceFace < 11000) {
      return 10;
    } else if (diceFace >= 11000 && diceFace < 12000) {
      return 11;
    } else {
      let strings = [
        "Ve ejderhayı yumruğunla indirdin. Sadece 12 atarak...",
        "Mükemmel 12!",
      ];
      return strings[Math.floor(Math.random() * strings.length)];
    }
  }

  diceD18() {
    let diceFace = Math.floor(Math.random() * 19000);
    if (diceFace >= 0 && diceFace < 1000) {
      return this.randomZeroFaceStrings();
    } else if (diceFace >= 1000 && diceFace < 2000) {
      return 1;
    } else if (diceFace >= 2000 && diceFace < 3000) {
      return 2;
    } else if (diceFace >= 3000 && diceFace < 4000) {
      return 3;
    } else if (diceFace >= 4000 && diceFace < 5000) {
      return 4;
    } else if (diceFace >= 5000 && diceFace < 6000) {
      return 5;
    } else if (diceFace >= 6000 && diceFace < 7000) {
      return 6;
    } else if (diceFace >= 7000 && diceFace < 8000) {
      return 7;
    } else if (diceFace >= 8000 && diceFace < 9000) {
      return 8;
    } else if (diceFace >= 9000 && diceFace < 10000) {
      return 9;
    } else if (diceFace >= 10000 && diceFace < 11000) {
      return 10;
    } else if (diceFace >= 11000 && diceFace < 12000) {
      return 11;
    } else if (diceFace >= 12000 && diceFace < 13000) {
      return 12;
    } else if (diceFace >= 13000 && diceFace < 14000) {
      return 13;
    } else if (diceFace >= 14000 && diceFace < 15000) {
      return 14;
    } else if (diceFace >= 15000 && diceFace < 16000) {
      return 15;
    } else if (diceFace >= 16000 && diceFace < 17000) {
      return 16;
    } else if (diceFace >= 17000 && diceFace < 18000) {
      return 17;
    } else {
      let strings = [
        "NE? SEN! 18 Mİ ATTIN?",
        "Bu tavernanın en iyi bileği sende sanırım. 18 attın!",
      ];
      return strings[Math.floor(Math.random() * strings.length)];
    }
  }

  diceD20() {
    let diceFace = Math.floor(Math.random() * 21000);
    if (diceFace >= 0 && diceFace < 1000) {
      return this.randomZeroFaceStrings();
    } else if (diceFace >= 1000 && diceFace < 2000) {
      return 1;
    } else if (diceFace >= 2000 && diceFace < 3000) {
      return 2;
    } else if (diceFace >= 3000 && diceFace < 4000) {
      return 3;
    } else if (diceFace >= 4000 && diceFace < 5000) {
      return 4;
    } else if (diceFace >= 5000 && diceFace < 6000) {
      return 5;
    } else if (diceFace >= 6000 && diceFace < 7000) {
      return 6;
    } else if (diceFace >= 7000 && diceFace < 8000) {
      return 7;
    } else if (diceFace >= 8000 && diceFace < 9000) {
      return 8;
    } else if (diceFace >= 9000 && diceFace < 10000) {
      return 9;
    } else if (diceFace >= 10000 && diceFace < 11000) {
      return 10;
    } else if (diceFace >= 11000 && diceFace < 12000) {
      return 11;
    } else if (diceFace >= 12000 && diceFace < 13000) {
      return 12;
    } else if (diceFace >= 13000 && diceFace < 14000) {
      return 13;
    } else if (diceFace >= 14000 && diceFace < 15000) {
      return 14;
    } else if (diceFace >= 15000 && diceFace < 16000) {
      return 15;
    } else if (diceFace >= 16000 && diceFace < 17000) {
      return 16;
    } else if (diceFace >= 17000 && diceFace < 18000) {
      return 17;
    } else if (diceFace >= 18000 && diceFace < 19000) {
      return 18;
    } else if (diceFace >= 19000 && diceFace < 20000) {
      return 19;
    } else {
      let strings = [
        "EFSANEVİ 20!",
        "Hayatındaki tüm şansı burada harcadın ve 20 attın! Önümüzdeki üç gün cenabet sayılırsın...",
      ];
      return strings[Math.floor(Math.random() * strings.length)];
    }
  }

  randomZeroFaceStrings() {
    let strings = [
      "Ne büyük şans ama... zar yere düştü.",
      "Hey hey hey dur bakalım! Zar eline çarptı.",
      "Tamam tamam anlamadığım tek bir soru var. Zarı nasıl kırdın? şimdi yeni bir zar almam gerekiyor.",
      "Bu kadar olasılığın içerisinde attığın zarın dik gelmesine ne demeli...",
      "Zar yüksek geldi ama masadaki tüm figürleri devirdiğin için geçersiz sayacağım kolsuz! Yavaş at bir sonraki sefer.",
      "Zar dönüyor... dönüyor... dönüyor... dönüyor... hacı zar uçtu gitti.",
    ];

    let choiceOne = Math.floor(Math.random() * 6000);
    if (choiceOne >= 0 && choiceOne < 1000) {
      return strings[0];
    } else if (choiceOne >= 1000 && choiceOne < 2000) {
      return strings[1];
    } else if (choiceOne >= 2000 && choiceOne < 3000) {
      return strings[2];
    } else if (choiceOne >= 3000 && choiceOne < 4000) {
      return strings[3];
    } else if (choiceOne >= 4000 && choiceOne < 5000) {
      return strings[4];
    } else {
      return strings[5];
    }
  }

  LogCommand(message, shortMessage) {
    log.logCommands({
      id: message.author.id,
      username: message.author.username,
      shortMessage: shortMessage,
    });
  }
}

module.exports = Roll;
