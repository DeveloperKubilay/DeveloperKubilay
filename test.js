import fs from 'fs';
const x = fs.readFileSync("Nreadme.txt", "utf8");
var des = ""



fs.writeFileSync("Nreadme.json", JSON.stringify({
           "SaveYourTime": {
            "longDescription": des,
            "codeExample": x
        }
},null,2), "utf8");