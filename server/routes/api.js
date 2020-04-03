const testcontroller = require('../controller/testController')

module.exports = (app) =>{
    app.get('/', testcontroller.test)
}