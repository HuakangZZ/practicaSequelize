import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';


export const Project = sequelize.define('projects', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    }
},{
    timestamps:false
});

Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id',
})

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})
