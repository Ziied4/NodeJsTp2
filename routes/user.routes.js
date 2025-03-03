const express = require('express')
const User = require('../models/user.js')
const router = express.Router()


router.post('/', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send({ message: "user created successfully",user })
    } catch (error) {
        res.status(400).send({ message: "error creating user" })
    }
})

router.get('/all', async (req,res) => {
    try{
        const users = await User.find()
        res.send(users)
    }catch{
        res.send({error:error})
    }
})

router.post('/find', async (req,res) => {
    try{
        console.log(req.body.email)
        const user = await User.findOne({ email: req.body.email }); // Correct

        if(!user){
            res.status(404).send({message:"user not found"})
        }res.send(user)

    }catch(error){
        res.send({error:error})
    }
})


router.put('/update/:Id', async (req,res) => {
    try{
        await User.findByIdAndUpdate(req.params.Id,req.body,{new:true})
        res.status(200).send({message:"updated"})
    }catch(error){
    res.status({error:error})}
})
module.exports = router;
