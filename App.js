const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("server is running");
})

app.listen(5000, ()=>{
    console.log("Server is running at port 5000");
});