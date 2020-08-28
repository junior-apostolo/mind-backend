const express = require('express')
const authMiddleware = require('../middlewares/auth')
const User = require('../model/user')
const router = express.Router()
const bcrypt = require('bcryptjs')

router.use(authMiddleware)

//Listando usuarios 
router.get('/users', async (req,res) => {
    const adm = await User.find({'_id': req.userId})

    //Condição para comparar o nivel de acesso
    if(adm[0].nivel == 999){
        const user = await User.find({})
        return res.send({user})
    }
    return res.status(400).send({error:'Usuario não tem Acesso permitido'})
})

//Lista os usuarios ativos pelo id
router.get('/user/:id', async(req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        res.send({user})
    }
    catch(err){
        return res.status(400).send({error: 'Nenhum usuario encontrado'})
    }
})

//Altera os dados do usuario 
router.put('/:id', async(req,res) => {
    const edit = req.body
    

    try{
        if(edit.password){
            const hash = await bcrypt.hash(edit.password,10)
            edit.password = hash
            
        }

        //permite o usuario alterar os dados
        await User.update({'_id':req.params.id}, edit)
        
        //retorna os dados alterados
        const user = await User.findById(req.params.id)
        res.send({user})
    }
    catch(err){
        return res.send({user:'Erro tente novamente'})
    }
})

module.exports = app => app.use('/projects',router)