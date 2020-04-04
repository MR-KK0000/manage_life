const { verifyAmomymous, testToken} = require('../middlewares/Auth')

const authcontroller = require('../controller/AuthController')
const testcontroller = require('../controller/testController')

module.exports = (app) =>{
    app.get('/', testcontroller.test)
    app.post('/test/store', testcontroller.store)
    app.get('/test/tokenapi', testToken ,testcontroller.testtokenapi)

    app.get('/api/testtoken', authcontroller.testauth)
}