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

databaseConfig.getConnection = {
    mongodb: db
}

module.exports = databaseConfig