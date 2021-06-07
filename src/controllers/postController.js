const Post = require('../models/posts')

exports.getPosts = async (req, res) =>{
    try{
        const posts = await Post.findAll()
        res.json({
            data: posts
        })
    }catch(error){
        console.log(error)
        res.status(500).send('Ha ocurrido un error')
    }
}

exports.addPost = async (req, res) =>{
    try{
        const { name, description } = req.body
        let newPost = await Post.create({
            name,
            description
        }, { 
            fields: ['name', 'description']
        })
        if(newPost){
            res.json({
                message : 'Post created successfully',
                data : newPost
            })
        }
        // const products = await Producto.find({})
        // res.json({products})
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Something goes wrong',
            data : {}
        })
    }
}

exports.deletePost = async (req, res) =>{
    try{
        const { id } = req.params
        let post = await Post.findOne({
            where: {
                id
            }
        })
        await Post.destroy({
            where: {
                id
            }
        })
        res.json({
            message : 'Post deleted successfully',
            data : post
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Something goes wrong',
            data : {}
        })
    }
}

exports.updatePost = async (req, res) =>{
    try {
        const { id } = req.params
        const { name, description } = req.body
        const result = await Post.update(
            { name, description },
            { where: { id } }
          )
        res.json({
            message : 'Post updated successfully',
            data : result
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Something goes wrong',
            data : {}
        })
    }
}