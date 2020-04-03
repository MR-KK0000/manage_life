var testcontroller = {}

testcontroller.test = async (req, res) =>{
    try {
        res.status(200).json({message:"hhh"})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

module.exports = testcontroller