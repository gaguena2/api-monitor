import { validationResult } from "express-validator";
import { MonitorModel } from "./monitor-model.js"

export default class MonitorController {

    async getById(req, res) {
        try {
            console.log(req.params['id'])
            let result = await MonitorModel.findOne({_id: req.params['id']});
            let status = Object.is(result, null) ? {code: 404, data: 'Not found monitor xx'}
                : {code: 200, data: result};
            return res.status(status.code).send(status.data);
        } catch(error){
            return res.status(404).send('Not found monitor');

        }
    }

    async getAll(req, res) {
        let result = await MonitorModel.find({});
        let status = {'code': 200, 'data': result};
        return res.status(status.code).send(status.data);
    }

    async create(req, res) {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            let result = await MonitorModel.create(req.body)
            return res.status(201).json(result)
          }
          return res.status(400).json({errors: errors.array()})
        
    }
    async delete(req, res) {
        console.log(req.params['id'])
        let result = await MonitorModel.findByIdAndDelete({_id: req.params['id']});
        let status = Object.is(result, null) ? {code: 404, msg: 'Not found monitor'} :  {'code': 202, 'msg': 'accept'};
        return res.status(status.code).send(status.msg);  
    }
}
