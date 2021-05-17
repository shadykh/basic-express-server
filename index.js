const server = require('./src/server.js');

require('dotenv').config();

const port = process.env.PORT || 4222 ;

server.start(port);