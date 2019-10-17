var {getVideos, getVideoById, createVideo, updateVideo, deleteVideo} = require('../controllers/crudOperations');

var routes = require('express').Router();

routes.get('/getVideos', getVideos)
routes.get('/getVideos/:id', getVideoById)
routes.post('/createVideo', createVideo)
routes.put('/getVideos/:id', updateVideo)
routes.delete('/getVideos/:id', deleteVideo)

module.exports = routes;