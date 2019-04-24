// requireds
const fs = require('fs');
var colors = require('colors');
//
// const fs = require('express');
// archivos en equipo
// const fs = require('./PATH');


listarTabla = (base, limite) => {

    if (validacion(base, limite)) {
        reject(`Fallo en la validación`.underline.red)
        return;
    }


    for (let i = 1; i <= limite; i++) {
        // console.log(base, ' x ', i, ' = ', base * i);
        console.log(`${base} * ${i} = ${base*i}`);

    }



}


crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (validacion(base, limite)) {
            reject(colors.underline.red('Fallo en la validación'))
            return;
        }




        let data = '';


        for (let i = 1; i <= limite; i++) {
            // console.log('2 x ', i, ' = ', 2 * i);
            data += `${base} * ${i} = ${base * i}\n`;
        }


        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-${limite}.txt`);

        });



    });
}


let validacion = (base, limite) => {
    let bandera = false;
    if (!Number(base)) {
        console.log(colors.magenta(`El valor introducido "${base}"  no es un número`))
        bandera = true;
    }

    if (!Number(limite)) {
        console.log(colors.magenta(`El valor LIMITE introducido "${limite}"  no es un número`.red))
        bandera = true;
    }

    return bandera;

}

module.exports = {
    crearArchivo,
    listarTabla
}