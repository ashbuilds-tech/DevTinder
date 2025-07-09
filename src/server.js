const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.send({
        "data": "Hello World from express!"
    })
})
app.listen(3000, (error) => {
    if (!error) {
        console.log("Server running on port 3000")
    }
})