# 🖥️ Screen Share

![Live Screen Pro Banner](https://i.imgur.com/V8XTnFj.gif)

## 🚀 What Does It Do?

**Screen Share** is a lightweight and fast application that allows you to share your desktop in real-time through a web browser! The easiest way to share your screen with minimal latency over the internet!

- 🔴 **Real-Time Streaming**: Share your desktop instantly
- 🌐 **Browser-Based**: No extra software needed, just a web browser
- 🔌 **Easy Setup**: Get started with just a few commands
- 📱 **Responsive Design**: Can be viewed from mobile devices too
- 🔧 **Low Resource Usage**: Uses minimum bandwidth thanks to JPEG-based streaming

## 📋 Requirements

- Node.js (v14+)
- FFmpeg
- A modern web browser

## ⚡ Quick Start

```bash
# Clone the repo
git clone https://github.com/username/screenshare.git

# Enter the project directory
cd screenshare

# Install dependencies
npm install

# Start the application
npm start
```

The application will run at: http://localhost:3000

## 🛠️ Installation Steps

### 1️⃣ FFmpeg Installation

#### Windows:
1. [Download FFmpeg here](https://ffmpeg.org/download.html)
2. Extract the ZIP file
3. Add the bin folder to your system PATH variable

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install ffmpeg
```

#### macOS:
```bash
brew install ffmpeg
```

### 2️⃣ Node.js & NPM Installation
Download and install the latest version from [Node.js official website](https://nodejs.org/).

### 3️⃣ Running the Project
```bash
# Install dependencies
npm install

# Start the application
npm start
```

## 💡 Usage

1. After starting the application, go to `http://localhost:3000` in your browser
2. Your screen sharing will start automatically
3. People who want to watch can connect with your IP address if they are on the same network: `http://[your-ip-address]:3000`
4. You may need port forwarding or a VPN solution for remote access

## ⚙️ Customization

You can change various settings in the `server.js` file:

```javascript
// Change frame rate (FPS)
'-framerate', '10', // Increase this value for smoother streaming

// Change image quality (1-31, lower value = better quality)
'-q:v', '10',

// Change resolution
'-vf', 'scale=1280:-1', // Width=1280, height automatic
```

## 📊 Performance Tips

- Lower FPS values (5-15) improve network performance
- Lower resolution (e.g., 960:-1) reduces streaming delay
- A good internet connection is required for high-quality streaming

## 🌍 Remote Access

For remote users to access:

1. Open port 3000 on your router
2. Get a static domain using a dynamic DNS service
3. Or set up a VPN solution (e.g., ZeroTier, Tailscale)

## 🔒 Security Notes

This application is intended for simple sharing and does not include comprehensive security features. Important:

- Only use on trusted networks
- Be careful when sharing screens containing sensitive information
- Consider adding an authentication mechanism for production use

## 🤝 Contributing

1. Fork this repo
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [FFmpeg](https://ffmpeg.org/)
- [Claude 3.7 Sonnet](https://www.anthropic.com/claude) contributed to this project

---

❓ Have questions? Found a bug? [Open an issue here](https://github.com/username/screenshare/issues)!

⭐ If you like this project, don't forget to give it a star! ⭐

---

# 🖥️ Screen Share (Türkçe)

![Live Screen Pro Banner](https://i.imgur.com/V8XTnFj.gif)

## 🚀 Ne İşe Yarar?

**Screen Share**, masaüstünüzü web tarayıcı üzerinden gerçek zamanlı olarak paylaşmanızı sağlayan hafif ve hızlı bir uygulamadır! Ekran görüntünüzü düşük gecikme süresiyle internet üzerinden paylaşmanın en kolay yolu! 

- 🔴 **Gerçek Zamanlı Yayın**: Masaüstünüzü anında paylaşın
- 🌐 **Tarayıcı Tabanlı**: Ekstra yazılım gerekmez, sadece bir web tarayıcısı yeterli
- 🔌 **Kolay Kurulum**: Birkaç komutla hemen başlayın
- 📱 **Responsive Tasarım**: Mobil cihazlardan da izlenebilir
- 🔧 **Düşük Kaynak Kullanımı**: JPEG tabanlı akış sayesinde minimum bant genişliği kullanır

## 📋 Gereksinimler

- Node.js (v14+)
- FFmpeg 
- Modern bir web tarayıcısı

## ⚡ Hızlı Başlangıç

```bash
# Repoyu klonlayın
git clone https://github.com/username/screenshare.git

# Projeye girin
cd screenshare

# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm start
```

Uygulama şu adreste çalışacaktır: http://localhost:3000

## 🛠️ Kurulum Adımları

### 1️⃣ FFmpeg Kurulumu

#### Windows:
1. [FFmpeg'i buradan indirin](https://ffmpeg.org/download.html)
2. ZIP dosyasını çıkarın
3. Bin klasörünü sistem PATH değişkeninize ekleyin

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install ffmpeg
```

#### macOS:
```bash
brew install ffmpeg
```

### 2️⃣ Node.js & NPM Kurulumu
[Node.js resmi sitesinden](https://nodejs.org/) en son sürümü indirip kurun.

### 3️⃣ Projeyi Çalıştırma
```bash
# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm start
```

## 💡 Kullanım

1. Uygulamayı başlattıktan sonra tarayıcınızdan `http://localhost:3000` adresine gidin
2. Otomatik olarak ekranınızın paylaşımı başlayacaktır
3. İzlemek isteyen kişiler de aynı ağda iseler, sizin IP adresiniz ile bağlanabilirler: `http://[sizin-ip-adresiniz]:3000`
4. Uzak erişim için port yönlendirme veya bir VPN çözümü kullanmanız gerekebilir

## ⚙️ Özelleştirme

`server.js` dosyasında çeşitli ayarları değiştirebilirsiniz:

```javascript
// Kare hızını (FPS) değiştirme
'-framerate', '10', // Bu değeri artırarak daha akıcı yayın yapabilirsiniz

// Görüntü kalitesini değiştirme (1-31, küçük değer = daha iyi kalite)
'-q:v', '10',

// Çözünürlüğü değiştirme
'-vf', 'scale=1280:-1', // Genişlik=1280, yükseklik otomatik
```

## 📊 Performans İpuçları

- Daha düşük FPS değeri (5-15) ağ performansını artırır
- Düşük çözünürlük (örn. 960:-1) yayın gecikmesini azaltır
- Yüksek kaliteli yayın için iyi bir internet bağlantısı gereklidir

## 🌍 Uzaktan Erişim

Uzak kullanıcıların erişebilmesi için:

1. Router'ınızda 3000 portunu açın
2. Dinamik DNS hizmeti kullanarak sabit bir domain alın
3. Veya bir VPN çözümü kurun (örn. ZeroTier, Tailscale)

## 🔒 Güvenlik Notları

Bu uygulama basit paylaşım amaçlıdır ve kapsamlı güvenlik özellikleri içermez. Önemli:

- Sadece güvendiğiniz ağlarda kullanın
- Hassas bilgiler içeren ekranları paylaşırken dikkatli olun
- Üretime dönük kullanımlarda bir kimlik doğrulama mekanizması eklemeyi düşünün

## 🤝 Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika özellik ekle'`)
4. Branch'inize push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📜 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [FFmpeg](https://ffmpeg.org/)
- Bu projede [Claude 3.7 Sonnet](https://www.anthropic.com/claude) katkı sağlamıştır.

---

❓ Sorularınız mı var? Bir hata mı buldunuz? [Buradan issue açın](https://github.com/username/screenshare/issues)!

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐