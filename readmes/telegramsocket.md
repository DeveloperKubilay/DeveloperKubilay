# Its basic connection module for telegram

## Client ur telegram account
```js
//write ur account information
const telegramuser = require('./modules/client')(
    98751427,                            // apiId
    "99571111523103335243524124422299",  // apiHash
    "MyFavBotname"                       // botid
);

const client = telegramuser.createConnection();
//client.id

client.write("hello world!")

client.on('data', (data) => {
    console.log(`Data: ${data}`);
});

client.on("close", (id) => {
    console.log(":(") 
})
// setTimeout(()=> client.end(), 2000)
```
## Server  (telegram bot)
```js
const telegrambot = require('./modules/serve')('5294567893:BBFYdRlp8...'); // write ur bot token

telegrambot.on('connection', (client) => {
    //client.id 
    
    console.log(`Connection sucsess`);
    client.write("yo whatspp")
        
    client.on('data', (data) => {
        console.log("my bro sayed "+data);
    });

    client.on('close', (id) => {
        console.log(`:/`);
    });
   // setTimeout(()=> client.end(), 2000)
});
```

### for installation

```bash
npm i telegram node-telegram-bot-api axios
```
