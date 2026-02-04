const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '95.217.111.204',
    user: 'ebefwsdf_abc',
    password: 'ebefwsdf_abc',
    database: 'ebefwsdf_abc',
});

export default connection;