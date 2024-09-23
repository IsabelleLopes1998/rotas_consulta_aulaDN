function soma (a,b){
    return a + b;
}
function multiplicacao(a,b){
    return a * b;
}

function divisao (a,b){
    return a / b; 
}
function subtracao(a,b){
    return a - b
}

console.log(soma(2,5));

var temp = multiplicacao(2,5)
var temp2 = divisao(30,2);

console.log(subtracao(temp2,temp))

module.exports ={
    soma,
    multiplicacao,
    divisao,
    subtracao
}