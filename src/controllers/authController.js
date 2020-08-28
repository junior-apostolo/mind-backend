const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const router = express.Router()

const authconfig = require('../config/auth.json')


function generateToken(params = {}){
    return jwt.sign(params,authconfig.secret,{
        expiresIn:86400,
    })
}


router.post('/register', async(req,res) => {
    const {email} = req.body
    const {cpf} = req.body

    try{
        if(await User.findOne({email}))
        return res.status(400).send({error: 'Email ja cadastrado'})

        if(await User.findOne({cpf}))
        return res.status(400).send({error: 'Cpf ja cadastrado'})
        
        const user = await User.create(req.body)
        
        user.password = undefined

        return res.send({user, token:generateToken({id:user.id})})

    }catch (err){
        return res.status(400).send({error:'Falha no Registro'})
    }
})

router.post('/autenticate', async (req,res) => {
    const {email,password} = req.body

    const user = await User.findOne({email}).select('+password')

    if(!user)
        return res.status(400).send({error: 'Usuario nao existe'})


    if(!await bcrypt.compare(password,user.password))
        return res.status(400).send({error: 'senha invalida'})

    if(user.nivel == 0)
    return res.status(400).send({error:'Usuário Desativado '})

    user.password = undefined
    
 
    res.send({user,token: generateToken({id:user.id})})
})

module.exports = app => app.use('/auth', router)