# NoApi-SpeechToText 🎙️✨

A simple speech recognition library that uses Bing Translator's web interface to convert speech to text in multiple languages.

Example video: https://www.youtube.com/embed/-dzRtd6fAqU?si=0KtpN0vDuOISEzuF

## Installation 📦

```bash
npm install noapi-speech2text
```

## Features 🚀

- ✅ Supports multiple languages
- ✅ Real-time speech recognition
- ✅ Easy-to-use API with event-based architecture
- ✅ Customizable settings
- ✅ No API key required

## Usage 🔧

```javascript
const SpeechToText = require('noapi-speech2text');

// Create instance with options (or use defaults)
const speechToText = new SpeechToText('en');

// Listen for speech events
speechToText.on('speech', (text) => {
  console.log('Recognized speech:', text);
});

// Start speech recognition
speechToText.start()
  .then(() => console.log('Speech recognition service initialized'))
  .catch(err => console.error('Failed to start speech recognition:', err));

// When you want to stop:
// speechToText.stop();
```

### Constructor Options

```javascript
/**
 * @param {string} languageCode - Language code (e.g., 'en', 'tr', etc.)
 * @param {string[]} chromeargs - Additional Chrome arguments (e.g., ['--mute', '--no-stdout'])
 * @param {number} checkInterval - Interval to check for new speech in ms (default: 700)
 * @param {boolean} debug - Enable debug mode (default: false)
 * @example
 * const speechToText = new SpeechToText('en', ["--no-sandbox"], 700, true);
 */
```

## ⚠️ Legal Warning

This software automates interactions with Microsoft's Bing Translator web interface:
- No official API or partnership with Microsoft is involved
- Microsoft may change their web interface or block automated access at any time
- The developer is **not affiliated** with Microsoft or Bing
- Using this software may violate Microsoft's terms of service
- Users are responsible for compliance with all applicable terms and conditions
- May stop working if Bing Translator's web interface changes

Use at your own risk.

---

# NoApi-SpeechToText 🎙️✨

Çoklu dillerde konuşmayı metne dönüştürmek için Bing Translator web arayüzünü kullanan basit bir konuşma tanıma kütüphanesi.

Örnek video: https://www.youtube.com/embed/-dzRtd6fAqU?si=0KtpN0vDuOISEzuF

## Kurulum 📦

```bash
npm install noapi-speech2text
```

## Özellikler 🚀

- ✅ Çoklu dil desteği
- ✅ Gerçek zamanlı konuşma tanıma
- ✅ Olay tabanlı mimari ile kullanımı kolay API
- ✅ Özelleştirilebilir ayarlar
- ✅ API anahtarı gerektirmez

## Kullanım 🔧

```javascript
const SpeechToText = require('noapi-speech2text');

// Seçeneklerle örnek oluşturun (veya varsayılanları kullanın)
const speechToText = new SpeechToText('tr');

// Konuşma olaylarını dinleyin
speechToText.on('speech', (text) => {
  console.log('Tanınan konuşma:', text);
});

// Konuşma tanımayı başlatın
speechToText.start()
  .then(() => console.log('Konuşma tanıma servisi başlatıldı'))
  .catch(err => console.error('Konuşma tanıma başlatılamadı:', err));

// Durdurmak istediğinizde:
// speechToText.stop();
```

### Yapılandırıcı Seçenekleri

```javascript
/**
 * @param {string} languageCode - Dil kodu (örn. 'en', 'tr', vb.)
 * @param {string[]} chromeargs - Ek Chrome argümanları (örn. ['--mute', '--no-stdout'])
 * @param {number} checkInterval - Yeni konuşmaları kontrol etme aralığı (ms) (varsayılan: 700)
 * @param {boolean} debug - Hata ayıklama modunu etkinleştirme (varsayılan: false)
 * @example
 * const speechToText = new SpeechToText('tr', ["--no-sandbox"], 700, true);
 */
```

## ⚠️ Yasal Uyarı

Bu yazılım, Microsoft'un Bing Translator web arayüzü ile etkileşimleri otomatikleştirir:
- Microsoft ile resmi bir API veya ortaklık içermemektedir
- Microsoft, web arayüzünü değiştirebilir veya otomatik erişimi istediği zaman engelleyebilir
- Geliştirici, Microsoft veya Bing ile **hiçbir şekilde bağlantılı değildir**
- Bu yazılımın kullanılması Microsoft'un hizmet şartlarını ihlal edebilir
- Kullanıcılar, tüm geçerli şartlara ve koşullara uygunluktan sorumludur
- Bing Translator'ın web arayüzü değişirse çalışmayı durdurabilir

Kullanım sorumluluğu size aittir.



### Developed by DeveloperKubilay ❤️
