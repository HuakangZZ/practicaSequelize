import app from './app.js'
import { sequelize } from './database/database.js';
import './models/Project.js';
import './models/Task.js'


async function main() {
    try {
        await sequelize.sync({force:true});
        console.log('La conexion ha sido establecida exitosamente')
        app.listen(4000)
        console.log('Server is listen on port', 4000);
    } catch (error) {
        console.error("Incapaz de conectar con la base de datos: ",error)
    }
}

main();