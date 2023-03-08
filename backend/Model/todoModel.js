const mongoose = require ('mongoose')

const todoShecma = mongoose.Schema({
 task: {
    type:String,
    require:[true, 'please enter your texte']
 }
})
module.exports =mongoose.model('Todo',todoShecma);