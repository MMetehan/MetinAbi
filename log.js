const fs = require('fs');
class Logging {
    constructor() { }
    /**
     * @messageDetail object türünden bir değişkendir içerisinde:
     *  {
     *      @id :kullanıcının id'si string türünden
     *      @username :kullanıcının mahlası string türünden
     *      @shortMessage :yazılan metnin kısaltılmış hali string türünden
     *  }
     */
    logCommands(messageDetail) {
        fs.readFile('log.txt', "utf-8", async (err, data) => {
            if (err) { console.log(err) }
            fs.unlinkSync('log.txt', (error) => {
                console.log(error);
            });
            console.log(messageDetail.channelID);
            fs.writeFileSync('log.txt', ` ${data}
            ---------------------------------------------------------------------
            ${messageDetail.id}
            ${messageDetail.username}
            ${messageDetail.shortMessage}
            `, (err2) => {
                console.log(err2);
            });
        });
    }
}

module.exports = Logging;