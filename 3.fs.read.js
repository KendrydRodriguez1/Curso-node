const { error } = require('node:console');
const fs = require('node:fs')

//colbas funciones que se completan de manera asincrona
//esto es asincrono, o sea que puede seguir corriendo mientras haga otra cosa
//con el await para hasta que termine 

const  leer  = async () => {
    try{
        fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return;
            }
            console.log('leyendo el segundo archivo', data);
        });
    }
    catch(error){
        console.error(error)
    }

}
leer()


console.log('leyendo el segundo archivo')
fs.readFile('./archivo.txt', 'utf-8', (error, data) =>{
    console.log(data)
})





console.log('leyendo el primer archivo')




