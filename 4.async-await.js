const {readFile} = require('node:fs/promises');

(
    async () => {
        const data = await readFile('./archivo.txt', 'utf-8')
        console.log(data)
        console.log('leyendo el archivo')
    }

) ()