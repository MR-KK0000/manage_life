const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = Schema({
    name: String,
    created_at: {type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now }
},
{
    versionKey: false
})

const Test = mongoose.model('tests', testSchema)

module.exports = Test