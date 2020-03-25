// estabelecendo rotas da aplicação
const { Router } = require('express');
const routes = Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

// rotas de ongs
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

// rotas de casos
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.get('/profile', IncidentController.show);
routes.delete('/incidents/:id', IncidentController.remove);

// rota de login
routes.post('/auth', SessionController.store);


module.exports = routes;

