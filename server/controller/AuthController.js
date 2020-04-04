const jwt = require('jsonwebtoken')

var authcontroller = {}

authcontroller.login = async (req, res)=>{
    try {
        let publi_key = 'ddd'
        let token = jwt.sign({
            type: "ANONYMOUS"
        }, key , { expiresIn: '1d'})
        res.status(200).json({message:"ok"})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

authcontroller.loginauthzation = async (req, res)=>{
    try {
        let private_key = 'ssss'


        // save to database keep token to mongodb
        let token = jwt.sign({
            type: "APPUSE"
        }, key, { expiresIn: '1d'})
        res.status(200).json({message:"ok"})
    } catch (error) {
        res.status(400).json({error:error})
    }    
}


authcontroller.testauth = async (req, res)=>{
    try {
        let private_key = 'test'
        // save to database keep token to mongodb
        let token = jwt.sign({
            type: "TESTAUTH"
        }, private_key, { expiresIn: '1h'})
        res.status(200).json({token:token})
    } catch (error) {
        res.status(400).json({error:error})
    }    
}

authcontroller.logout = async (req, res)=>{

}

module.exports = authcontroller