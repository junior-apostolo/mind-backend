const mongoose = require('../database/index')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    cpf:{
        type:Number,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
    path:{
        type:String
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    nivel:{
        type:Number,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash

    next()
})

const User = mongoose.model('User',UserSchema)

module.exports = User