const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('DB/data.json', data, async(err) => {
        if (err) {
            throw new Error('No se pudo guardar la informacion en la base de datos');
        } else {
            return true;
        }
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    let porhacer = {
        descripcion,
        completado: false
    };
    cargarDB();
    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const getListado = (completado = true) => {
    cargarDB()
    if (listadoPorHacer.length === 0) {
        return undefined;
    } else {
        return listadoNuevo = listadoPorHacer.filter(listado => listado.completado === completado);
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(listado => listado.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(listado => listado.descripcion === descripcion);
    if (index >= 0) {
        const eliminado = listadoPorHacer.splice(index, 1);
        guardarDB();
        if (eliminado.length !== 0) {
            return true;
        }
    } else {
        return false;
    }

}







module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}