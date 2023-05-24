const express = require("express");
require("./db");
const app = express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-type,Accept"
    );
    next();
})

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use(express.json());
app.use("/api",require("./routes/createUser")); 
app.use("/api",require("./routes/displayData")); 

app.listen(5000,()=>{
    console.log("Server started");
});