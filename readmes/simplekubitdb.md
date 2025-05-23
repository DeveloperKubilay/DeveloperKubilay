# SimpleKubitDB
Version: **kubitdb@1.0.2**
Module owner: **kubi#5443**
The module has its own extension .kubitdb
## Info 
**Support:** [Support server](https://discord.gg/4Xpwwz6pgN) 
### How to use
```js
const {simplekubitdb} = require('simplekubitdb')
const db = new simplekubitdb("database")// you can change the name of the file to save,You can use const db = new kubitdb("./database.kubitdb") if you want

db.ayarla('deneme','açık')
db.set('deneme','true')
/*/
deneme=açık
/*/

db.ekle("para", 30)
db.add("para", 30)
/*/
para=30
/*/

db.push("serverSettings", Date.now())
db.push("serverSettings", Date.now())
/*/
serverSettings=1653784957913||kubitdbpush||1653784960343
/*/

db.varmı("prefix") 
db.has("prefix") 
/*/
true
false
/*/

db.al("para")
db.bak("para")
db.get("para")
db.fetch("para")
/*/
500
/*/

db.sil("serverStatus")
db.delete("serverStatus")
/*/

/*/

db.cıkar("para", 1)
db.subtract("para", 1)
db.substr("para", 1)
db.sil("serverStatus",1)
db.delete("serverStatus",1)
db.del("serverStatus",1)
/*/
serverStatus=9
/*/

db.temizle()
db.clear()
db.deleteAll()
db.clearAll()
/*/

/*/

db.all()
/*/
money=500
deneme=abc
bread={1:"not",2:"not",3:"not"}
/*/

console.log(db.json())//You can convert it to json and use it. If you don't like simplekubitdb, you can convert it to json and use another database. you can use kubitdb https://www.npmjs.com/package/kubitdb 
```
#### Are you using python, come to our [Discord](https://discord.gg/4Xpwwz6pgN) , let's put the python version or
#### Do you need help why are you waiting go to [Discord](https://discord.gg/4Xpwwz6pgN) 
## Install SimpleKubitDB
- ```npm i simplekubitdb```

### For Json Database
##### KubitDB
- ```npm i kubitdb```
##### [How to use KubitDB](https://www.npmjs.com/package/kubitdb) 

### For Online Database
##### KubitDBonline
- ```npm i kubitdbonline```
##### [How to use KubitDB online](https://www.npmjs.com/package/kubitdbonline) 
