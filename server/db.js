const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Fukuoka2021",
    host: "localhost",
    port: 5432,
    database: "icebreaker"
});

module.exports = pool;