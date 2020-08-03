const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: "Descripción de la tarea por hacer"
};
const completado =   {
    default: true,
    alias: 'c',
    descripcion: "Marca como completado o pendiente una tarea",
    type: 'boolean'
}



const argv = require('yargs')
    .command("crear", "Crear una tarea por hacer", { descripcion })
    .command("actualizar", "Actualiza el estado completado de una tarea", { descripcion, completado })
    .command("listar", "Lista todos las tareas almacenadas en la base de datos", { completado })
    .command("borrar", "Elimina una tarea almacenada en la base de datos", { descripcion })
    .help().argv;



module.exports = {
    argv
}