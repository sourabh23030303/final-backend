
// import express from "express";
// import gff from "./gf.js"
// import fs from "fs";
// import mongoose from "mongoose"
// import * as myob from "./gf.js"
// import path from "path";
// const app = express();
// app.use(express.static(path.join(path.resolve(), "public")))
// app.use(express.urlencoded({ extended: true }))
// // data base connection 
// mongoose.connect("mongodb://localhost:27017", {
//     dbName: "sourabhback"
// }).then(() => {
//     console.log("db connnected")
// })

// const formschema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phone: Number
// })
// const user = mongoose.model("janta", formschema)


// app.get("/about", (req, res) => {
//     // fs.readFile("./index.html", (err, data) => {
//     //     res.end(data)
//     // })
//     res.json({
//         "value": true,
//         "name": "sourabh",
//         "prd": [2, 3, 5, 5, 65, 66, 7]
//     })
// })
// console.log(path.resolve())
// app.get("/", (req, res) => {
//     const locate = path.resolve();

//     res.sendFile(path.join(locate, "index.html"))
// })
// const users = [];
// app.post('/', async (req, res) => {
//     const jantta = { name: req.body.name, email: req.body.email, phone: req.body.number }

// // await user.create(jantta)
//  user.create({ name: req.body.name, email: req.body.email, phone: req.body.number })
// // users.push({ username: req.body.name, email: req.body.email })
// // console.log(users)
// console.log(req.body.name)

// })


// app.get("/users", (req, res) => {
//     res.json({ users })
// })

// app.listen(3000, () => {
//     console.log("server is running")
// })



///////////////////////////////////////////////////////////////////////practice




import  express  from "express";
import mongoose from "mongoose";
import  path  from "path";
const app = express();
// schmeas and models
mongoose.connect("mongodb+srv://sourabh:sourabh2002Atlas@cluster0.fk90ueh.mongodb.net/", {
    dbName: "testing"
}).then(() => {
    console.log("db connnected")
})
const schm = new mongoose.Schema({
    name :String,
    email:String,
    phone:Number
})

const user = mongoose.model("test",schm);

// middle ware
app.use(express.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log("server is running at port 3000")
})
// mthods
const abhivala = path.resolve();
app.get("/",(req,res)=>{
res.sendFile(path.join(abhivala,"index.html"))
})

app.post("/data",(req,res)=>{
    user.create({name:req.body.name,email:req.body.email,phone:req.body.number})
    res.redirect("/")
 console.log(req.body)
})






