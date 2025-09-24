# Metin Abi

## 🇹🇷 Türkçe Açıklama

### Proje Hikayesi
Pandemi döneminde ses tellerimi kullanamayacak kadar hasta olduğum için arkadaşlarımla iletişim kurmak için "Metin Abi"yi yazdım. Metin Abi, Google Translate'den yazdığım metnin sesini indirip Discord odasına girip okuyor ve çıkıyor. Arkadaşlarım arasında o kadar sevildi ki, üzerine bir sürü özellik ekledim. Artık sadece "konuşan bot" değil, aynı zamanda kura çeken, FRP zarları atan, arada saçmalayan, aramızda bolca mizah üreten bir Discord botu oldu. Pandemi boyunca hem eğlendik hem de "istediğin metni istediğin dilde okutma" özelliğiyle çok güldük. (Bazen çıkan sesler, insanı hayattan soğutabilir, dikkat!)

### Özellikler
**AGRESİFLEŞİRSE KÜFREDEBİLİR!**
- Yazdığınız metni istediğiniz dilde sesli okur (Google TTS)
- Discord kanalına girip konuşur, sonra çıkar
- Kura çekme komutu (arkadaşlar arasında adil seçimler için)
- FRP ve oyunlar için zar atma (ve bazen "0" gelirse komik mesajlar)
- Web arayüzü (Express + EJS)
- Bolca mizah, bolca eğlence

### Kurulum
1. Repoyu klonlayın:
   ```sh
   git clone https://github.com/MMetehan/MetinAbi.git
   ```
2. Dizine girin:
   ```sh
   cd MetinAbi
   ```
3. Bağımlılıkları yükleyin:
   ```sh
   npm install
   ```
4. `.env.example` dosyasını `.env` olarak kopyalayın ve Discord bot token'ınızı ekleyin:
   ```sh
   cp .env.example .env
   ```
   (Windows'ta: `copy .env.example .env`)
5. Proje ana dizininde boş bir `log.txt` dosyası oluşturun:
   ```sh
   touch log.txt
   ```
   (Windows'ta: `echo. > log.txt`)
6. Botu başlatın:
   ```sh
   npm start
   ```

### Komutlar
- `+mts <metin>`: Yazdığınız metni okur
- `+mts help`: Komut listesini gösterir
- `+mts kuracek <isimler>`: Kura çeker
- `+mts roll <zar>`: Zar atar (ör: +mts roll d20)

### Katkı ve Lisans
Katkı yapmak serbesttir, PR atabilirsiniz. Lisans: ISC

---

## 🇬🇧 English Description

### Project Story
During the pandemic, I was too sick to use my vocal cords, so I created "Metin Abi" to communicate with my friends. Metin Abi downloads the voice of the text I write from Google Translate, joins the Discord channel, reads it out loud, and leaves. My friends loved it so much that I kept adding features. Now, it's not just a "talking bot"—it can draw lots, roll dice for RPGs, and sometimes just be silly. It made our pandemic days much more fun, especially with the ability to make it say anything in any language (Warning: some voices may be hazardous to your sanity!).

### Features
**IF IT GETS AGGRESSIVE, IT MAY SWEAR!**
- Reads any text you write in any language (Google TTS)
- Joins your Discord channel, speaks, and leaves
- Draws lots (for fair decisions among friends)
- Dice roller for RPGs and games (with funny messages if you roll a zero)
- Web interface (Express + EJS)
- Lots of humor, lots of fun

### Installation
1. Clone the repo:
   ```sh
   git clone https://github.com/MMetehan/MetinAbi.git
   ```
2. Enter the directory:
   ```sh
   cd MetinAbi
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Copy `.env.example` to `.env` and add your Discord bot token:
   ```sh
   cp .env.example .env
   ```
   (On Windows: `copy .env.example .env`)
5. Create an empty `log.txt` file in the project root directory:
   ```sh
   touch log.txt
   ```
   (On Windows: `echo. > log.txt`)
6. Start the bot:
   ```sh
   npm start
   ```

### Commands
- `+mts <text>`: Reads your text
- `+mts help`: Shows command list
- `+mts kuracek <names>`: Draws lots
- `+mts roll <dice>`: Rolls dice (e.g., +mts roll d20)

### Contribution & License
Contributions are welcome! PRs are open. License: ISC

---

> "Metin Abi: Because sometimes, you just need a bot to say what you can't!"
> 
> "Metin Abi: Bazen, söyleyemediğini bir botun söylemesi gerekir!"
