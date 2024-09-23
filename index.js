const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site. Meu nome é Isabelle, me dê um real")
})

// add rota de produto
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!<h1>")
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Erro ao Iniciar.")
    }else{
        console.log("Servidor Iniciado.")
    }
})
