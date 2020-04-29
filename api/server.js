const express = require('express');
const helmet = require('helmet');

//calling routes to server
const projectRoute = require('../dbRoutes/projects-route.js');
const resourseRoute = require('../dbRoutes/resourse-route.js');
const taskRoute = require('../dbRoutes/task-route.js');

const server = express();

//Middleware
server.use(helmet());
server.use(express.json());


//route direction
server.use('/api/projects', projectRoute);
server.use('/api/resourse', resourseRoute);
server.use('/api/task', taskRoute);

module.exports = server;