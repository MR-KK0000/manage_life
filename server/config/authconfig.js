require('dotenv').config()
var Authconfig = {}

Authconfig.jwt_public_key = process.env.PUBLIC_KEY
Authconfig.jwt_private_key = process.env.PRIVATE_KEY

module.exports = Authconfig