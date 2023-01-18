const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const BuguriDB = sequelize.define(
    "BuguriDB",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        grad_severitate: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['scazuta','medie','ridicata','urgent','extrem de urgent']
        },
        grad_prioritate: {
            //Default??
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['extrem de urgent', 'urgent', 'poate astepta']
        },
        linkCommit: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate:{
                isUrl: true, //se verifica validitatea url-ului
                isUrl: {
                    msg: "Link-ul nu este valid"
                }
            }
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Solutionat','Nesolutionat','In asteptare']
        },
        id_MP: {
            type: DataTypes.INTEGER(8),
            allowNull: true
        },
        descriere: {
            type: DataTypes.STRING(256),
            allowNull: true
        }
    },
    {
        tableName: "Probleme"
    }
)

module.exports = BuguriDB;