const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site. Meu nome é Isabelle, me dê um real")
})

// add rota de produto
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!<h1>")
})
// add rota com parâmetro
app.get("/cadastro/:nome?",function(req,res){
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>produto " + nome + " criado!</h1>")
    }else{
        res.send("Produto criado!")
    }
})
// add rota consulta utilizando Query Params
app.get("/consulta/", function(req,res){
    // req ---> dados enviados pelo cliente
    var cpf = req.query["cpf"]

    //res - resposta enviada pelo servidos de volta ao cliente
    if(cpf){
        res.send("retorno consulta: cpf = "+ cpf)
    }else{
        res.send("CPF NÃO FORNECIDO")
    }
})


app.listen(4000,function(erro){
    if(erro){
        console.log("Erro ao Iniciar.")
    }else{
        console.log("Servidor Iniciado.")
    }
})

// localhost:4000/produtos
//localhost:4000/cadastro - resposta: Produto criado
// localhost:4000/cadastro/bola - resposta: produto bola criado!
// localhots:4000/consulta?cpf=107.712.469-43