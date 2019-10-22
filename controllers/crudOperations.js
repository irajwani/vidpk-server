const db = require('../config/db');
const admin = require('firebase-admin');

const getVideos = (req,res,next) => {
  admin.firestore().collection('videos').get()
  .then(snapshot => {
    return snapshot.docs.map(doc => doc.data())
  })
  .then(videos => {
    // console.log(videos);
    res.status(200).json(videos);
  })
}

// const getVideos = (req, res, next) => {
    
//     db.query('SELECT * FROM movies ORDER BY id ASC', (error, results) => {
    
//         if (error) {
//             throw error
//         }
        
//         res.status(200).json(results.rows)
    
//     })
// }

const getVideoById = (req, res) => {
    const id = parseInt(req.params.id)
  
    db.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const createVideo = (request, response) => {
    const { name, description } = request.body
  
    db.query('INSERT INTO movies (name, description) VALUES ($1, $2)', [name, description], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Video added with ID: ${JSON.stringify(results)}`)
    })
}

const updateVideo = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, description } = request.body
  
    db.query(
      'UPDATE movies SET name = $1, description = $2 WHERE id = $3',
      [name, description, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Video modified with ID: ${id}`)
      }
    )
}

const deleteVideo = (request, response) => {
    const id = parseInt(request.params.id)
  
    db.query('DELETE FROM movies WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Video deleted with ID: ${id}`)
    })
}



module.exports = {
    getVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo
}