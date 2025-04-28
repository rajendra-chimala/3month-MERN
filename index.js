const express = require('express');

const app = express();

app.get("/api/getbooks",(req,res)=>{
    res.json({
        "message":"Book found successfully !"
    })
})

app.post("/api/add-books",(req,res)=>{
    res.status(200).json({
        "message":"Book Added successfully !"
    })
})


app.put("/api/update-books/:id",(req,res)=>{
    const {id} = req.params;
    res.status(200).json({
        "message":"Book Updated successfully !",
        id
    })
})

app.delete("/api/delete-books/:id",(req,res)=>{
    const {id} = req.params;
    res.status(200).json({
        "message":"Book Deleted successfully !",
        id
    })
})





app.listen(5000,()=>{
    console.log("Server Is Running !")
})