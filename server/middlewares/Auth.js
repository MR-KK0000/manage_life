const jwt = require('jsonwebtoken')
const auth = require('../helpers/authorization')


var Auth = {}

Auth.verifyAmomymous = async (req, res, next) => {
    try {
        const token = auth.retrieveToken(req)
        if(!token) { throw { message: "Unauthorized"}}

        const { err, decoded } = await jwt.verify(token, key, (err, decoded) => ({ err, decoded }))
        if(err) { throw { message: "error"}}

        next();
    } catch (error) {
        res.status(400).json({error:error})
    }
}

Auth.testToken = async (req, res, next) =>{
    try {
        let key = 'test'
        const token = auth.retrieveToken(req)
        if(!token) { throw { message: "Unauthorized"}}

        const { err, decoded } = await jwt.verify(token, key, (err, decoded) => ({ err, decoded }))
        if(err) { throw { message: "error"}}

        next();     
    } catch (error) {
        res.status(400).json({error:error})
    }
}

module.exports = Auth
