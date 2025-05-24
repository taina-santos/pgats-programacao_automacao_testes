const nome = "Axel"
const raca = "chihuaua"

var peso = 7.5
var idade = 4
var adotado = true

var nomeLetraMaiuscula = nome.toUpperCase();
var raca1stLetraMaisucula = raca.charAt(0).toLocaleUpperCase() + raca.slice(1).toLocaleLowerCase();

const tag = ([{
    nome: nomeLetraMaiuscula,
    raca: raca1stLetraMaisucula,
    idade: idade,
    peso: peso
}])

console.table(tag)