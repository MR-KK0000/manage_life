const Authzation ={};

Authzation.retrieveToken = (req) => {
    let token = null
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){
        let bearer = bearerHeader.split(' ')
        token = bearer[1]
    }

    return token
}

Authzation.retrieveSesssionToken = (req) => {
    let token = null
    const bearerHeader = req.headers['session']

    if(typeof bearerHeader !== 'undefined'){
        let bearer = bearerHeader.split(' ')
        token = bearer[1]
    }

    return token
}

module.exports = Authzation