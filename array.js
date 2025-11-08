
/* estrutura de dados array */

let frutas = ["maca","uva","banana"]

console.log(frutas[0])

/* lenbrando que os indeces comecam apartir do 0 entao cores [1] vai me retornar a cor  verde */
let cores = ["amarelo","verde","azul","rosa","preto"]

console.log(cores[1])

let nomes = ["maria","raimunda","joao","rebeca"]

console.log(nomes[2])

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(numeros)
/* apos inserir o numero 110 */
numeros.push(110)/* adiciona 110 no final */
console.log(numeros)

numeros.unshift(120)/* adiciona 120 ao inicio */
console.log(numeros)

/* Ação do splice(2, 0, 15):

1 Vá para o índice 2 (onde está o 20)

2 Remova 0 elementos (não remove nada)

3 Insira o 15 na posição 2

Empurre os demais para a direita

Resultado: [10,15,20,30,40,50,60,70,80,90,100,110] */

numeros.splice(2,0,15)/* adiciona numero em local especifico */

console.log(numeros)

/* remocao */

let coresremocao = ["amarelo", "vermelho", "azul", "rosa"]
console.log(coresremocao)

coresremocao.pop()/* removeu a ultima cor no caso rosa */

console.log(coresremocao)

coresremocao.shift()/* removeu a primeira cor */

console.log(coresremocao)

coresremocao.splice(1,2)

console.log(coresremocao)

/* busca */
let animais = ["cachorro", "gato", "pássaro", "peixe"];

// Busca por valor
let indice = animais.indexOf("gato"); /* ja faz a busca e se encontrar retorna o indece e se nao encontrar retorna -1 */

console.log(indice)

let existe = animais.includes("pássaro"); // me retorna true ou false se nao encontrar 

console.log(existe)



let idade =[25,35,45,80,110]
console.log(idade[2])

let testenotebook = ['testanto notebook']

let maisumteste = [10,20,30,'notebook']