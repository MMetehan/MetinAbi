const logModule = require("./log");
const log = new logModule();
class Kura {
  constructor() {}

  /**
   *
   * @message string
   * @shortMessage string
   */
  kuraCek(message, shortMessage) {
    this.LogCommand(message, shortMessage);

    var winnerCount = parseInt(
      shortMessage.split("---")[1] == "" ||
        shortMessage.split("---")[1] == null ||
        shortMessage.split("---")[1] == undefined
        ? "1"
        : shortMessage.split("---")[1].trim()
    );
    var choices = shortMessage
      .split("---")[0]
      .trim()
      .split("+mts kuracek")[1]
      .trim()
      .split(",");
    var winners = [];
    if (winnerCount > 1) {
      for (let idx = 0; idx < winnerCount; idx++) {
        let choice = choices[Math.floor(Math.random() * choices.length)];
        if (winners.length == 0) {
          winners.push(choice);
        } else {
          if (winners.indexOf(choice) > -1) {
            idx--;
          } else {
            winners.push(choice);
          }
        }

        if (idx === winnerCount - 1) {
          var string = "";
          winners.forEach((item, idx) => {
            if (idx === 0) {
              string = item;
            } else if (idx > 0 && idx < winners.length - 1) {
              string = string + ", " + item;
            } else {
              string = string + ", " + item;
              return message.channel.send(string);
            }
          });
        }
      }
    } else {
      return message.channel.send(
        choices[Math.floor(Math.random() * choices.length)]
      );
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

module.exports = Kura;
