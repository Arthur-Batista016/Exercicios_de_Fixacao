function olaMundo(){
    alert("OLÁ MUNDO!!!")
 
}


function mostraNome(){
    let nome = prompt("digite seu nome:") 

   console.log(nome)

}


function concatenaPalavras(){

     let p1 = prompt("digite uma palavra:")
     let p2 = prompt("digite outra palavra:");
     let fusao = p1 + p2

     console.log(fusao)

}


// exercicio 2 //

function soma(){

    let n1 = parseInt(prompt("digite o primeiro numero:"))
    let n2 = parseInt(prompt("digite o segundo numero"))

    let soma = n1 + n2

    console.log(soma)


}

function subtracao(n1, n2){

  alert("subtracao realizada")


  console.log(n1-n2)

  


}

function CriaObjeto(){

let nome = prompt("digite seu nome:")
let idade = prompt("digite sua idade:")
let time = prompt("digite seu time favorito:")

let usuario = {

nome: nome,
idade: idade,
time_favorito: time



}

console.log(usuario)
}






// exercicio 3 //

  function calculadora(){
   let  n1 = parseInt(prompt("digite o primeiro numero:"));
   let n2 = parseInt(prompt("digite o segundo valor:"));
   let opcao = prompt("escolha a operação que deseja realizar: (+,-,/,*):");
   
   if (opcao == "+"){
   
    let soma = n1 + n2
    
    console.log(soma)
   }    
   if (opcao == "-"){
    
    let subtracao = n1 - n2
    
    console.log(subtracao)

   }    
   if (opcao == "/"){
    let divisao = n1 / n2
    console.log(divisao)
   }    

   if (opcao == "*"){
    let multi = n1 * n2
    console.log(multi)
   }    



  }


  function mudaConstante(){

   const nome = prompt("digite seu nome:")
  
    console.log(nome)

   prompt("digite um novo valor:")
   console.log(nome)
}


// exercicio 4 //

function manipulaArray(){
  
  cores = ["branco, azul, vermelho, verde, preto, amarelo, marrom, violeta, rosa, ciano, magenta, cinza"]

  console.log(cores)
  
  cores.push("laranja")

  console.log("laranja adicionado: "+cores)

  let pop = cores.pop()

  console.log("array com elemento removido: "+cores)

  let sort = cores.sort()

  console.log(cores)

  let splice = cores.splice("azul")

 console.log(cores)

 console.log(cores[0],cores[9])

 cores.unshift("fuscia")

 console.log("fuscia adicionado: " +cores)

  let shift = cores.shift()

console.log("array com o shift: "+cores)





}