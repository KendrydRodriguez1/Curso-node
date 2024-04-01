const { error } = require('node:console')
const fs = require('node:fs')
const path = require('node:path')

//lee el directorio el readdir
fs.readdir('.', (err, files) =>{
    if(err){
        console.error(error)
        return
    }
    files.forEach(files => {
        if(path.extname(files) == '.txt'){
            console.log('se ha encontrado')
        }
    })
})

