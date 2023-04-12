import express from "express"
import { conn } from "../db/database.js";



const app = express();

// This is middlewire
app.use('/signup', express.static('public'));
// Using body parser middleware for converting string to JSON
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("<h1>This is Home Page</h1>")
})

app.post("/signup", (req, res) => {
    // const data = {
    // Emp_name: req.body.Emp_name,
    // Address: req.body.Address,
    // City: req.body.City,
    // Age: req.body.Age,
    // DOJ: req.body.DOJ,
    // Designation: req.body.Designation,
    // Salary: req.body.Salary,
    // Mobile: req.body.Mobile,
    // Email: req.body.Email
    // }

    const values = [[req.body.Emp_name, req.body.Address, req.body.City, req.body.Age, req.body.DOJ, req.body.Designation, req.body.Salary, req.body.Mobile, req.body.Email]]

    const sql = `INSERT INTO employeeinfo (Emp_name, Address, City, Age, DOJ, Designation, Salary, Mobile, Email) VALUES ('${req.body.Emp_name}', '${req.body.Address}', '${req.body.City}', '${req.body.Age}', '${req.body.DOJ}', '${req.body.Designation}', '${req.body.Salary}', '${req.body.Mobile}', '${req.body.Email}')`;
    conn.query(sql, (err, result, fld) => {
        console.log(result);
    })
    
    res.status(200).send("Insert Successfull"); 
})

app.get("/user", (req,res) => {
    // const {emp_name} = req.query;
    // let query = "";
    // if(emp_name === '')
    //     query = "SELECT * FROM employeeinfo";
    // else{
    //     query = `SELECT * FROM employeeinfo WHERE Emp_name = '${emp_name}'`;
    // }
    
    // console.log(query);
    conn.query("SELECT * FROM employeeinfo", (err, result, fields) => {
        console.log(result);
        res.status(200).json(JSON.stringify(result))
    })
})

app.listen(3303, ()=>{
    console.log("Server started at port 3303");
})

