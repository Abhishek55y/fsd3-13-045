import express from  'express'

const app=express();
// request goes here
app.length("/",(req,res)=>{
    res.send("<h1>hello Express</h1>")
})

// always listen at last
app.listen(3333,()=>console.log("prg1 is running at 3333"));
