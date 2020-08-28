const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Adm_Mind:Junior@2010@clusterapi.uywmt.mongodb.net/nodeMind?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true })
mongoose.Promise = global.Promise

//const url = 'mongodb+srv://Adm_Mind:Junior@2010@clusterapi.uywmt.mongodb.net/test?retryWrites=true&w=majority'
//const options = {reconnectTries: Number.MAX_VALUE,reconnectInterval: 500, poolSize:5, useNewUrlParser:true}

//mongoose.connect(url,options)
mongoose.set('useCreateIndex',true)

mongoose.connection.on('disconnected',() => {
    console.log('aplicação desconenctada do banco')
})

mongoose.connection.on('connected',() => {
    console.log('aplicação conectada com o banco')
})


module.exports = mongoose