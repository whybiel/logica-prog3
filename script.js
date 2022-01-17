//1 - Criar um loop que conte de 1 até 10 usando FOR
/* for(variável;condição;iteração){
    console.log(variável)
} */

for(let number = 1;number <= 10; number++ ){
    console.log(number)
}

//2 - Criar um loop que conte de 10 até 1 usando WHILE

/* variavel = valorInicial
    while (condição){
        tarefa
        iteração
    } */

let i = 10
while(i > 1){
    console.log(i)
    i --
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for(let impares = 1; impares <= 100; impares += 2){
    console.log(impares)
}

//4- Criar um loop que conte todos os números pares de 0 a 100

let pares = 0
    while (pares < 100){
        console.log(pares)
        pares += 2
    }
