const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const studentModel =require('./models/students')
const app = express()

app.use(cors())   //data backend se frontend aata h uske kaam aata
app.use(express.json())  //vice versa of cors
mongoose.connect('mongodb://127.0.0.1:27017/newcrud')

// app.get('/',(req,resp)=>{
//     studentModel.find({}) 
//     .then(student => resp.json(student))
//     .catch(err => resp.json(err))
// })

app.get('/',(req,res)=>{
    studentModel.find({})
    .then(users =>res.json(users))
    .catch(err =>res.json(users))
})

app.post('/createstudent',async(req,resp)=>{
    studentModel.create(req.body)
    .then(student => resp.json(student))
    .catch(err => resp.json(err))
    //    let createdata =studentModel(req.body)
    //    let createdata2 = await createdata.save()
    //    resp.send(createdata2)
})
app.delete('/deletestudent/:id',(req,resp)=>{
    const id = req.params.id
    studentModel.findByIdAndDelete({_id:id})
    .then(student => resp.json(student))
    .catch(err => resp.json(err))
})
app.get('/getstudent/:id',(req,resp)=>{
    const id = req.params.id
    studentModel.findById({_id:id})
    .then(student => resp.json(student))
    .catch(err => resp.json(err))
})
app.get('/readstudent/:id',(req,resp)=>{
    const id = req.params.id
    studentModel.findById({_id : id})
    .then(student => resp.json(student))
    .catch(err => resp.json(err))

})
app.put('/edit/:id',(req,resp)=>{
    const id = req.params.id
    studentModel.findByIdAndUpdate(req.params.id,{$set:req.body})
    .then(student => resp.json(student))
    .catch(err => resp.json(err))

})

app.listen(3001,()=>{
    console.log("server is running.")
})
