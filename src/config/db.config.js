const {Sequelize, Model, DataTypes, QueryTypes} = require('sequelize');
const logger = require('../logger/api.logger');

require('dotenv').config();

const connect = () => {
    const sequelize = new Sequelize({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
        schema: process.env.DB_SCHEMA,
        dialect: 'postgres',
        pool: {
            max: 10,
            min: 0,
            acquire: 0,
            idle: 0
        },
        logging: (msg) => logger.info(msg)
    })

    async function auth() {
        try {
            await sequelize.authenticate();
            logger.info('DB Authenticated!');
        } catch (err) {
            logger.error('Error:: ' + err);
            return err;
        }
    }

    auth();

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.rest = require('../model/rest.model')(sequelize,DataTypes,Model);

    return db;
}

module.exports = {
    connect
}