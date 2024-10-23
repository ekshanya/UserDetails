const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Usermodel = require('./model/Users')
const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/UserDB")

app.use(cors())
app.use(express.json())



app.get('/',(req,res)=>{
    Usermodel.find({})
    .then((users) => res.json(users))
    .catch(err => console.log(err))
})

app.get('/getUser/:id', (req,res)=> {
    const _id = req.params.id;
    Usermodel.findById({_id})
    .then((users) => res.json(users))
    .catch(err => console.log(err)
    )
})

app.post('/createUsers', (req,res) =>{
    Usermodel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUsers/:id',(req,res)=>{
    const id = req.params.id;
    Usermodel.findByIdAndUpdate({_id : id}, {Name : req.body.Name, Email : req.body.Email, Number : req.body.Number, id: req.body.id},   { new: true }  )
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req,res) => {
    const id = req.params.id;
    Usermodel.findByIdAndDelete({_id : id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})