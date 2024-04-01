const fs = require('node:fs')

const stast = fs.statSync('./archivo.txt')

console.log(
    stast.isFile(), // si es fichero
    stast.isDirectory(), //si es un directorio
    stast.isSymbolicLink(), //si es un enlace simbolico
    stast.size // tamaño en bites
)