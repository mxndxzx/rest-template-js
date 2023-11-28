const service = require('../services/rest.service');
const logger = require('../logger/api.logger');

class Controller {
    async getUser(req,res) {
        const userId = req.params.userId;

        const response = await service.getUser(userId);

        if (response != '' && !response.message) {
            res.status(200).send({
                status: "OK",
                data: response
            })
        } else if (response.name) {
            res.status(502).send({
                status: "FAILED",
                msg: response.message
            })
        } else {
            res.status(400).send({
                status: "ERROR",
                msg: "No records found!!!"
            })
        }

        logger.info('Res:: ' + JSON.stringify(response));
    }

    async getDate(req,res) {
        const date = req.params.date;
        const response = await service.getDate(date);

        if (response != '' && !response.message) {
            res.status(200).send({
                status: "OK",
                data: response
            })
        } else if (response.name) {
            res.status(502).send({
                status: "FAILED",
                msg: response.msg
            })
        } else {
            res.status(400).send({
                status: "ERROR",
                msg: "No records found with given date!!!"
            })
        }
    }

    async createReg(req,res) {
        const { body } = req;
        const response = await service.createReg(body);

        if (response.id) {
            res.status(201).send({
                status: "OK",
                data: response
            })
        } else {
            res.status(400).send({
                status: "ERROR",
                msg: response.message
            })
        }
    }

    async updateReg(req,res) {
        return res.status(500).send({
            msg: "NOT IMPLEMENTED!!!"
        })
    }

    async deleteReg(req,res) {
        return res.status(500).send({
            msg: "NOT IMPLEMENTED!!!"
        })
    }
}

module.exports = new Controller();