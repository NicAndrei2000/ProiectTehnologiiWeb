const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const StudentDB = sequelize.define(
    "StudentDB",
    {
        id: {
            type: DataTypes.INTEGER(8),
            primaryKey: true,
            autoIncrement: true
        },
        adresa_email: {
            type: DataTypes.STRING(128),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true, // verifica sa aiba un format de tip email @...
                isEmail: {
                    msg: "Email-ul trebuie sa aiba un format valid popescuion@yahoo.com"
                }
            }
        },
        parola: {
            type: DataTypes.STRING(16),
            allowNull: false,
            validate: {
                len: [4, 16],
                len: {
                    msg: "Este necesar ca parola introdusa sa aiba intre 4 si 16 caractere"
                },
                notEmpty: true, 
                notEmpty: {
                    msg: "Campul parola nu poate fi gol"
                }
            }
        },
        nume: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        prenume: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        tip_utilizator: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['MP', 'TST']
        },
        data_de_nastere: {
            type: DataTypes.DATEONLY, //format prestabilit: YYYY/MM/DD
            allowNull: true,
            validate: {
                isDate: true 
            }
        },
    },
    {
        tableName: "Lista studenti"
    }
)

module.exports = StudentDB;