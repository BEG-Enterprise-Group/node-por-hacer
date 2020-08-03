const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case "crear":
        let guardado = porHacer.crear(argv.descripcion);
        if (guardado)
            console.log("datos almacenados con exito");
        else
            console.log('Error al guardar la tarea');

        break;
    case "listar":
        let listado = porHacer.getListado(argv.completado);
        if (listado === undefined) {
            console.log('Base de datos sin tareas');
        } else {
            for (let tarea of listado) {
                console.log(colors.green("==============POR HACER================"));
                console.log(`${tarea.descripcion}`);
                console.log(`Estado: ${tarea.completado}`);
                console.log(colors.green(`=======================================\n`));
            }
        }
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log('Datos actualizado');
        } else {
            console.log('la descripcion que ingreso de la tarea no coincide con ningun elemento en la base de datos');
        }

        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Tarea eliminada con exito');
        } else {
            console.log('la descripcion que ingreso de la tarea no coincide con ningun elemento en la base de datos');
        }
        break;
    default:
        console.log("comando no reconocido");
}