const fs = require('fs')
const file = './fileToMonitor.txt'
let wait = false
fs.watch(file, (event, fileName)=>{
    if(fileName){
        if(wait) return
        wait = setTimeout(()=>{wait = false}, 100)
        let fileData = fs.statSync(fileName)
        let date = new Date(fileData.mtime)
        console.log(`${date} ${fileName}: ${event}`)
    }
})