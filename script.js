//02
function botao()
{
    mensagem.innerHTML = "Olá " + nome.value + " tudo bem?"
}
//02

//03
var m = document.getElementById("metros")

function converter()
{
    resposta.innerHTML = "Sua medida é " + parseFloat (m.value) / 100 + " Metros"

}
//03

//04
let pegarNumero = document.getElementById("valor")
let n1MaisUm = document.getElementById("sucessor")
let n1MenosUm = document.getElementById("antecessor")

function descobrir()
{
    n1MaisUm.innerHTML = parseInt(pegarNumero.value) + 1 + " Sucessor"
    n1MenosUm.innerHTML = parseInt(pegarNumero.value) - 1 + " Antecessor"
}
//04

//05
let comparacao = document.getElementById("valor1")
let comparacaoseg = document.getElementById("valor2")
let resposta = document.getElementById("respostaa")
function maiormenor()
{
    if(comparacao.value > comparacaoseg.value)
        {
            resposta.innerHTML = parseFloat(comparacao.value) + " É maior"
        }
    else
    {
        resposta.innerHTML =  parseFloat(comparacaoseg.value) + " É maior"
    }
}
//05

//06
let salario = document.getElementById("vsalario")
let total = document.getElementById("aumentosal")
let porcentual = 10%

function aumento()
{
    if (parseFloat(salario) > 1250)
        {
            total.innerHTML = "Parabens! Você recebeu um aumento de 10%: " + (parseFloat (salario) + porcentual )
        }
    else
    {

    }
}
//06

//07
b = 1
while (b <= 100)
    {
        console.log(b)
        b = b + 1
    }
console.log("Fim")
//07

//08
c = 0
while (c <= 50)
    {
        console.log(c)
        c = c + 5
    }
console.log("Fim")
//08

//09
d = 100
while (d >= 0)
    {
        console.log(d)
        d = d - 10
    }

console.log("Fim!")
//09