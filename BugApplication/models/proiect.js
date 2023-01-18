const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const ProiectDB = sequelize.define(
    "ProiectDB",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_repo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nume: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        descriere: {
            type: DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: "Lista Proiecte"
    }
)

module.exports = ProiectDB;