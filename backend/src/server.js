// estabelecendo configuracao do servidor com express
const express = require('express');
const server = express();
const bp = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const port = 8080;

server.use(bp.urlencoded({extended: true}));
server.use(express.json());
server.use(cors());
server.use(routes);
server.listen(port, () => {
  console.log(`Executing on port ${port}`);
});