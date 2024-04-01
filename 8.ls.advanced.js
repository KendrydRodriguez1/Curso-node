const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'




const ls = async (folder) => {
    let files;
    try {
        files = await fs.readdir(folder)
    }
    catch {
        console.error(`no se ha podido leer el directorio ${folder}`)
        process.exit(1)
    }

    const filePromises = files.map(async files => {
        const filePath = path.join(folder, files)
        let Stats;
        try {
            Stats = await fs.stat(filePath) // estatus te da la informacion del archivo
        }
        catch {
            console.log(`No se pudo leer el archivo ${filePath}`)
            process.exit(1)
        }
        const isDirectory = Stats.isDirectory()

        const filetype = isDirectory ? 'SI' : 'NO';

        const fileSize = Stats.size

        const fileModifique = Stats.mtime.toLocaleString();


        return `${filetype.padEnd(20)} ${files.padEnd(25)} ${fileSize.toString().padEnd(10)} ${fileModifique}`
    });

    const filesInfo = await Promise.all(filePromises)

    filesInfo.forEach(fileImfo => console.log(fileImfo))

}

ls(folder)

