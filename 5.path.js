const path = require('node:path')


//Ver barra deparadora de carpeta segun el sistema operativo
console.log(path.sep)

//unir rutas con path.join

const fileParth = path.join('/content', 'subfolder', 'test.txt')
console.log(fileParth)


//sacar el nombre un archivo con su tipo (txt, etc)
const base = path.basename(fileParth)
console.log(base)

//sacar el nombre un archivo sin su tipo 
const base_sin_tipo = path.basename(fileParth, '.txt')
console.log(base_sin_tipo)


//sacar el tipo de fichero
const extension = path.extname('imagen.jpg')
console.log(extension)


