const express = require('express');

const OngController = require('./controllers/OngController'); 
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes
    .route('/sessions')
    .post(SessionController.create);

routes
    .route('/ongs')
    .post(OngController.create)
    .get(OngController.index);

routes
    .route('/incidents')
    .get(IncidentsController.index)
    .post(IncidentsController.create);

routes
    .route('/incidents/:id')
    .delete(IncidentsController.delete);

routes
    .route('/profile')
    .get(ProfileController.index);

module.exports = routes;
