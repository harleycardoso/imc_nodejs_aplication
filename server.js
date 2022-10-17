const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/",function(req,res){
    console.log(req.body);
    var number1 = parseFloat(req.body.number1);
    var number2 = parseFloat(req.body.number2);
    var result = parseFloat(number1+number2);
    res.send("Resultado:"+ result);
});

app.post("/bmicalculator",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var imc = (weight/(height*height)).toFixed(2);

    if(imc < 18){
        res.send("Resultado:"+ imc);
    }
    if(imc >= 18 && imc < 25){
        res.send("Resultado:"+ imc);
    }
    if(imc >= 25 && imc < 30){
        res.send("Resultado:"+ imc);
    }
    if(imc >= 30 && imc < 35){
        res.send("Resultado:"+ imc);
    }
    if(imc >= 35 && imc < 40){
        res.send("Resultado:"+ imc);
    }
    if(imc > 40){
        res.send("Resultado:"+ imc);
    }
    
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});