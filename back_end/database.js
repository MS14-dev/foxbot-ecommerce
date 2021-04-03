const mysql = require('mysql');

const database = mysql.createConnection({
    host:'localhost',
    database:'foxbot_ecom',
    user:'root',
    password:'',
    port:3306
})

database.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Connect successful with database");
    }
})

module.exports = database;