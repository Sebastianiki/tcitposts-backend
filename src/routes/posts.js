const express = require('express')
const postController = require('../controllers/postController')
const router = express.Router()

router.get('/', postController.getPosts)
router.post('/', postController.addPost)
router.delete('/:id', postController.deletePost)
router.put('/:id', postController.updatePost)
module.exports = router