const Testmodel = require('../models/Testmodel')

var testcontroller = {}

testcontroller.test = async (req, res) => {
    try {
        var result = await Testmodel.find({})
        res.status(200).json({message:result})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

testcontroller.store = async (req, res) => {
    try {
        var { name } = req.body
        console.log(name)
        const testdata = new Testmodel({
            name
        })

        var result = await testdata.save()
        res.status(200).json({message:"ok"})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error})
    }
}

testcontroller.testtokenapi = async (req, res) =>{
    try {
        res.status(200).json({message:"test ok!!!"})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

module.exports = testcontroller