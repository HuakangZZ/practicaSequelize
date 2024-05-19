import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'sequelizeUniversidad',
    'root' ,
    'diego123' ,
    {
        host:'localHost',
        dialect:'mysql'
    }
);