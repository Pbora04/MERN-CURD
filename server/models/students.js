const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({ 
    name:String,
    email:String,
    age:Number
})

const studentModel = mongoose.model("mydata",studentSchema)

module.exports = studentModel