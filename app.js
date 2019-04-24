const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green('Archivo creado'), colors.rainbow(` ${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(process.argv);
// let argv2 = process.argv;

// console.log('Limite', argv.limite);
// console.log(argv2);
// let parametro = argv2[2];
// let base = parametro.split("=")[1]