




/* window.alert(`ola mundo`) */
var user =(`joao`)

console.log(user)

let email = (`joao@gmail`)

console.log(email)

let isLoading = true

let nunber = (123)
console.log(typeof user)
console.log(typeof nunber)
// como usar typof

//...........................................................................

// conversao de tipos

let any = null

console.log(any)


let value = 125
let txt=(`ola mundo`)

console.log(typeof value)
console.log(typeof toString(value))
console.log( typeof Number(txt))

//..........................................

//operadores aritimetos 

console.log('soma:', 8 + 8 )

//.............................................

// operadores de encremento e decremento 

let encremento = 10
encremento++ // lenbrando que esse encremeto adiciona apenas 1 numero para poder adicionar mais de um numero tenho que usar encremento += 5 que iria adicionar 5
console.log('aqui e o encremeto',encremento) // encremento valia 10 mais agora apos usar ++ passou a valer 11 

let decremeto = 10
decremeto--
console.log('aqui e o decremento',decremeto)


//*****************************************************
// operadores logicos 

let usuario = true

let senha = true

console.log( usuario && senha ) // operador and (E) ou seja comparou usuario e senha e retornou verdadeiro

console.log (usuario || senha )// operador or (OU) so precisa de 1 verdadeiro para retornar true

//*********************************************** */
// estrutura de condiçao

let age = 15
            //condicao    se for true               se for false
console.log(age >=18 ? 'voce pode dirigir' : 'voce nao pode dirigir')


let hour = 15

if(hour <= 12){
  console.log('bom dia ')
}else{
    console.log('boa tarde')
}


let option = 6
switch (option) {
    case 1:
        console.log(`1 nao atendida`)
    break;
    case 2:
        console.log('2 foi atendida')
    break
    case 3:
        console.log('aqui parou') 
    break
    default:
        console.log('opcao invalida')
}
//..............................................
// tratamento de execoes / erro

let = result = 0

try {
    if(result === 0){

        throw new Error("mensagem customizada");
        
    }

} catch (batata) { // em batata temos uma variavel temporaria que vai armazenar o erro 

    console.log(batata)

    /* window.alert(batata)  */

}finally{
    console.log('fim')
}



/* ................................................................................. */

// funcoes

function mensagem ( ){
    console.log('mensagem da funcao') // modelo da funcao porem ainda e esta sendo execuaalta 
}

mensagem() // aqui chamei a funcao par apoder funcionar

// parametros 

function menseger(username){
    console.log('ola', username)
}

menseger('rodrigo')// parametro para chamar o nome que no caso e rodrigo

function sum(a, b){
    console.log(a+b)
}
sum(10,20)

function somar(a,b){
    let result = a + b
    console.log(result)
}
somar(10,10)

function som(c,v){
    let res = c + v

    return res // utilizando return

}
 let resposta = som(7,7)
 console.log(resposta)


// coementario JsDoc

/**
 * 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */

function segnIin(email, password){
    // fluxo de autenticacao de usuario

    return 7
}

segnIin

// funcao anonima

const showMessage = function(){
    return 'funcao anonima'
}

console.log(showMessage)

// arrow function

const arrowFunction = () => {
    console.log('arrow function')
}

arrowFunction()

// callback function
var teste = null