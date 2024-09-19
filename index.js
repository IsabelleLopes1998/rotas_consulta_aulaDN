const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site")
})


app.listen(4000,function(erro){
    if(erro){
        console.log("Erro ao Iniciar.")
    }else{
        console.log("Servidor Iniciado.")
    }
})
