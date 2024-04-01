const os = require('node:os')

console.log('Nombre del distema operativo ' + os.platform())
console.log('version del sistema operativo ' +  os.release())
console.log('arquitectura del sistema operativo ' + os.arch())
console.log('CPUs del sistema operativo:', os.cpus());
console.log('espcio total ' + os.freemem() / 1024 / 1024)
console.log('memorio total ' +  os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 3600)