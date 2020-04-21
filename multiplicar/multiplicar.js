//requireds

const fs = require('fs');
// const fs = require('express'); //paquetes no nativos
// const fs = require('./fs'); //archivos cre hemos creado en nuestro proyecto

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base || limite)) {
            reject(`El valor introducido ${base} || ${limite} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;

            resolve(console.log((`${base} * ${i} = ${resultado} `)));
        }
    });

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let resultado = base * i;
            data += (`${base} * ${i} = ${resultado} \n`);
        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });

}
module.exports = {
    crearArchivo,
    listarTabla
}