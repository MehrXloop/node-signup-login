const {Pool} = require("pg")

const pool = new Pool({
    user:"postgres",
    password:"Mehrfatima007",
    host:"localhost",
    port:5432,
    database:"login_system"
})
// const tblQuery = `CREATE TABLE accounts (
//     user_id serial PRIMARY KEY,
//     username VARCHAR (50) UNIQUE NOT NULL,
//     password VARCHAR (50) UNIQUE NOT NULL);`;

// pool.query(tblQuery)
// .then((res)=>{
//     console.log("table created")
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

module.exports = pool;