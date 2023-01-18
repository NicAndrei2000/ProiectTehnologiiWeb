const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const EchipaDB = sequelize.define(
    "EchipaDB",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nume: {
            type: DataTypes.STRING(64)
        }
    },
    {
        tableName: "Lista echipe"
    }
)

module.exports = EchipaDB;