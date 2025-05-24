const nome1 = "AxEL";
const nome2 = "a   Xe L";
const nome3 = "AXEl";

var nomeFormatado = removerEspaco(nome2);

console.log(nome1);
console.log(nome1.charAt(0).toLocaleUpperCase() + nome1.slice(1).toLocaleLowerCase());
console.log(nomeFormatado);

function removerEspaco(nome) {
    return nome.replace(/\s+/g, "").replace(/[^a-zA-Z]/g, "")
}