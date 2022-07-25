function parimp(numero){
    if (numero % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(parimp(5))

function soma(n1,n2){
    return n1 + n2
}

console.log(soma(5,3))

var x = function(num){  //É possível colocar uma função dentro de uma varíavel
    return num*2
}

console.log(x(5))

function fatorial(n){
    let fat = 1
    for(let cont = n; cont > 1; cont--){
        fat *= cont
    }
    return fat
}

console.log(fatorial(5))