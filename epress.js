// create server and deploy on the server 

const express = require('express');

function calculater(n){
 let ans = 0; 
 for (let i =1 ; i<=n; i++){
 ans = ans + i;
 }

 return ans;
}


const app = express();

app.get("/query" , function(req , res){
    const n = req.query.n;
    const ans = calculater(Number(n));
    // console.log(ans);
    // res.send("hola");
    // res.send(typeof Number(n));
    // res.status(200).json({
    //     msg: ans
    // });
    // res.send(String(ans));
    res.send(5050)
});

app.listen(3000);