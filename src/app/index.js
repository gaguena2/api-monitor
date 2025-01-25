import express from 'express';
import bodyParser from 'body-parser';
import { monitorRoter } from '../monitor/monitor-router.js';
import { dbConfig } from '../infra/dbconfig.js';

const appInit = (port) => {
    var app = express();
    app.use(bodyParser.json())

    app.use('/monitors', monitorRoter());

    dbConfig()
    app.listen(port, function () {
        console.log(`app listening on port ${port}`)
    })
}

export { appInit };

