// esto solo en los modulos nativos
// que not tienen promesas nativas
// const {promisify} = require('node:util')
// const realFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')


//promesas
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })
    .cath(error => {
        console.log(error)
    })


console.log('mientras lee el primer archivo')