const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');

const schema = process.env.DB_SCHEMA;
const table = process.env.DB_TABLE;

class Service {
    db = {};

    constructor() {
        this.db = connect();
        // For development purposes
        this.db.sequelize.sync().then(() => {
            logger.info('DB Synced!!');
        })
    }

    async getUser(userId) {
        try {
            const user = await this.db.rest.findAll({
                where: {
                    user_id: userId
                }
            })
            return user;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        }
    }

    async getDate(date) {
        try {
            const [user,meta] = await this.db.sequelize.query(`SELECT * FROM ${schema}.${table} WHERE DATE(scan_time) = '${date}'`);
            return user;
        } catch (err) {
            logger.error('Error:: ' + err);
            return err;
        }
    }

    async createReg(body) {
        let data = {};

        try {
            body.scan_time = new Date().toISOString();
            body.scan_logon = 'lp2076';
            data = await this.db.rest.create(body);
            return data;
        } catch (err) {
            logger.error('Error:: ' + err);
            return err;
        }
    }

    async updateReg(body) {
        let data = {};

        try {
            data = await this.db.rest.update({
                where: {
                    user_id: body.user_id,
                    scan_time: body.scan_time
                }
            });
            return data;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        }
    }

    async deleteReg(head) {
        let data = {};
        
        try {
            data = await this.db.ingresos.destroy({
                where : {
                    dni: head.dni,
                    fecha_scan: head.date,
                }
            });
            return data;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        }
    }
}

module.exports = new Service();