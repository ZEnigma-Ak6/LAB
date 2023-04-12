import mysql from "mysql";

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "company"
})

conn.connect((err)=>{
    if(err) throw err;

    console.log("Connection created");
})

export { conn } ;