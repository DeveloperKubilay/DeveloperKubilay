
# 🤖 Telegram AI Bot 🚀

![Demo](https://i.imgur.com/RSR7U8d.gif)

Welcome to the ultimate **Telegram AI Bot** powered by **Google's Generative AI** & **KubitDB**! 💥

This bot connects to **Telegram** and integrates with **Google Generative AI** to provide personalized chat experiences. It's like having your own AI-powered buddy right in your Telegram chats! 🤖✨

## 💡 Features

- **New Chat**: Start a fresh conversation! 💬
- **Remove Last Message**: Oops, delete the last message! ❌
- **Resend Last Message**: Need that last message again? Here ya go! 🔁
- **Rate Limiting**: Prevents spamming with smart cooldowns! ⏳
- **Markdown to HTML**: Sends messages with formatted text! 📜

## 🚀 Setup

1. **Clone this repo** or download the code, and get it running on your machine. 🖥️
2. **Install dependencies**:  
```sh
npm install
```
3. **Set up your environment variables**:
- `TELEGRAM_TOKEN`: Create a bot on [BotFather](https://t.me/botfather) and grab your token.
- `GOOGLE_AI_STUDIO_API`: Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
- `AI_NAME`: Default is `gemini-2.0-flash`, but you can change it to any supported AI model name.

4. **Run the bot**:
```sh
node index.js
```
5. Start chatting with your AI bot on Telegram! 🎉

## 📱 Telegram Commands

- `/newchat`: Reset the chat and start fresh! 🆕
- `/removelastmsg`: Delete the last message! 🚮
- `/resent`: Resend the last message! 🔄

## 🧠 How It Works

This bot uses **Google Generative AI** to process messages and respond like a pro. It also stores chat history in **KubitDB** so it remembers your conversation! 🔥

### Rate Limiting

We know you like to chat, but no spamming! The bot ensures you don't send messages too quickly. If you're too fast, it'll make you wait 5 seconds before sending the message. 🕐

## 🔧 Troubleshooting

- If you’re missing any environment variables, you’ll get an error like:
- **Missing Google API Key**: Make sure you set the `GOOGLE_AI_STUDIO_API`.
- **Missing Telegram Token**: Make sure you set the `TELEGRAM_TOKEN`.

- If you run into issues, try restarting the bot or checking the console for error logs. 😎

---

## 📜 Türkçe Kılavuz

Bu, **Google Generative AI** ve **KubitDB** ile güçlendirilmiş bir **Telegram AI Bot**'udur! 🦸‍♂️

Bot, **Telegram**'a bağlanır ve **Google Generative AI**'yi entegre ederek kişiselleştirilmiş sohbet deneyimleri sunar. Sanki Telegram sohbetlerinde bir AI arkadaşın var gibi! 🤖✨

### 📱 Telegram Komutları

- `/newchat`: Sohbeti sıfırla ve yeni bir başlangıç yap! 🆕
- `/removelastmsg`: Son mesajı sil! 🚮
- `/resent`: Son mesajı yeniden gönder! 🔄

### 🧠 Nasıl Çalışır?

Bu bot, **Google Generative AI**'yi kullanarak mesajları işler ve pro gibi yanıtlar verir. Ayrıca **KubitDB**'de sohbet geçmişini saklar, böylece konuşmalarınızı hatırlar! 🔥

### Hız Sınırı

Çok fazla mesaj atmamanız için bot, mesajlarınızı hızlı göndermenize engel olur. Eğer çok hızlı mesaj atarsanız, bot 5 saniye beklemenizi sağlar. 🕐

---

Good luck and happy chatting! 🎉👾
