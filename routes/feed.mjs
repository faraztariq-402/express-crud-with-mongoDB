import express from 'express'
let router = express.Router()
//GET '/api/feed/:userId'
router.get('/feed/:userId/', (req,res,next)=>{

    res.send('feed created v1')
  })

  export default router