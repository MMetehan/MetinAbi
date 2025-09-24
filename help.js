const logModule = require('./log');
const log = new logModule();
class Help {
    constructor() { }
    /**
     * @message string
     * @shortMessage string
     */
    HelpMessage(message, shortMessage) {
        this.LogCommand(message, shortMessage);
        message.delete();


        return message.author.send(`
Botu yazan kişi <@366276635478982656> (Storm). Gereksiz kullanım yapanlara bot yasaklanacaktır. Kurallar, komutlar ve yenilikler için https://metinabi.herokuapp.com/ sayfasına bakmayı unutmayın.

            Metin Abi'den Sana
                1) +mts {yazi} komutu yazdığınız metni türkçe bir şekilde seslendirir.
                2) metnin sonuna -/-{ülke kodu} ekleyerek o dilde seslendirebilirsiniz.
                3) ülke kodlarına https://www.science.co.il/language/Codes.php sitesinden ulaşabilirsiniz.
                dipnot: Bulgaristan gibi bazı ülkelerin sesleri çalışmamaktadır.
                forexample) +mts Hallo -/-de

            Kura Çektir
                1) +mts kuracek orn1, orn2, orn3 şeklinde kura çektirebilirsiniz.
                2) metnin sonuna ---{kazanan sayisi} yazarsanız yazılan sayı kadar kişi kazanacaktır.
                dipnot: kazanan sayısı katılanlardan fazla yada eşit sayıda olamaz.
                forexample) +mts kuracek mete, ulaş, serdar, mami, alper, şule, semih ---3
            
            Zar Atma
                1) +mts roll {zar tipi} şeklinde zar atabilirsiniz.
                2) d2, d6, d8, d10, d12, d18, d20 mevcutta bulunan zar tipleridir.
                dipnot: zar atımı gerçekçi olduğu için beklendmedik sonuçlarla karşılaşabilirsiniz.
                forexample) +mts roll d20


Dipnot: Botu sakın ama sakın +bts ile başlatmayın!
        `);
    }
    LogCommand(message, shortMessage) {
        log.logCommands({
            id: message.author.id,
            username: message.author.username,
            shortMessage: shortMessage,
            channelID: message.channel.id
        });
    }
}

module.exports = Help;