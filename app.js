const express = require("express");
const app = express();

app.get("/consulta/", function(req,res){
    var cpf = req.query["cpf"];
    //res.send("Retorno consulta cpf = " + cpf)

    if(cpf){
        res.send("retorno consulta: cpf = " + cpf)
    }else{
        res.send("CPF NÃO FOI FORNECIDO")
    }
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Erro ao iniciar.");
    }else{
        console.log("Servidor Iniciado");
    }
})

