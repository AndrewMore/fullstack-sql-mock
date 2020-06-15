// Express Server
// FIX ME :(
const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path');
const router = require('./router');

const server = express();
const port = 3000;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended : true}));
server.use(cors());
server.use(morgan('dev'));

server.use('/', express.static(path.join(__dirname + '/../client/dist')));
server.use('/api', router)

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))