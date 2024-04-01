import {readFile} from 'node:fs/promises'
//no va a salir hasta que se ejecute los dos
Promise.all([
    readFile('./archivo.txt', 'utf-8')
]).then(([tex]) =>{
    console.log('SE ejecuta primero: ', tex)
})

