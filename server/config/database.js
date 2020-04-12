var databaseConfig = {}

databaseConfig.connection = {
    mongodb: {
        host: 'localhost',
        port: '27017',
        username: '',
        password: '',
        database: 'managelife',
        ssl: true,
        replicaSetName: '',
        authSource: ''
    }
}

var db = `mongodb://${databaseConfig.connection.mongodb.host}:${databaseConfig.connection.mongodb.port}/${databaseConfig.connection.mongodb.database}`

// var db ='mongodb+srv://admin:admin@sleepfreetime-5kc2c.gcp.mongodb.net/learn?retryWrites=true&w=majority'
databaseConfig.getConnection = {
    mongodb: db
}

module.exports = databaseConfig