# TTS Maker

A simple Text-to-Speech API wrapper for ttsmp3.com that allows you to convert text to speech and get the audio buffer.

## Installation

```bash
npm install ttsmaker
```

## Usage

```javascript
const textToSpeech = require('ttsmaker');
const fs = require('fs');

async function example() {
    // With default voice (Filiz)
    const audioBuffer = await textToSpeech('Hello world!');
    fs.writeFileSync('output.mp3', audioBuffer);
    
    // With custom voice
    const customAudio = await textToSpeech('This is a message with a different voice.', {
        lang: 'Joanna'
    });
    fs.writeFileSync('custom_output.mp3', customAudio);
}

example();
```

🎧 [Click here to listen to the audio](https://github.com/DeveloperKubilay/TTS_Maker/raw/refs/heads/main/examples/en.mp3)


## Options

You can specify the voice by passing an options object with the `lang` parameter:

```javascript
const options = {
    lang: 'Joanna' // Default is 'Filiz' if not specified
};
```

---

# TTS Maker (Türkçe)

ttsmp3.com için basit bir Metinden Konuşmaya (Text-to-Speech) API wrapper'ı. Metni sese dönüştürmenize ve ses buffer'ını almanıza olanak tanır.

## Kurulum

```bash
npm install ttsmaker
```

## Kullanım

```javascript
const textToSpeech = require('ttsmaker');
const fs = require('fs');

async function ornek() {
    // Varsayılan ses ile (Filiz)
    const sesDosyasi = await textToSpeech('Merhaba dünya!');
    fs.writeFileSync('cikti.mp3', sesDosyasi);
    
    // Özel ses ile
    const ozelSes = await textToSpeech('Bu farklı bir sesle oluşturulmuş bir mesajdır.', {
        lang: 'Joanna'
    });
    fs.writeFileSync('ozel_cikti.mp3', ozelSes);
}

ornek();
```

🎧 [Buraya tıkla ve sesi dinle](https://github.com/DeveloperKubilay/TTS_Maker/raw/refs/heads/main/examples/tr.mp3)


## Seçenekler

`lang` parametresi ile bir seçenekler nesnesi geçerek sesi belirtebilirsiniz:

```javascript
const secenekler = {
    lang: 'Joanna' // Belirtilmezse varsayılan 'Filiz' kullanılır
};
```
