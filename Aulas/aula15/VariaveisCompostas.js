var num = [5,7,8,2,4]

num[5] = 9 //Adcionando elemente com posição manualmente
num.push(1) //Adcionando elemento na última posição

console.log('O vetor criado possui os seguintes elementos ' + num)

console.log('O vetor possui ' + num.length + ' posições!') //Medindo o tamanho da array

num.sort() //Colocando em ordem crescente a array

console.log(num)

console.log(num[3]) //Mostrando o elemento da posição 3

for(let pos = 0; pos < num.length; pos++){
    console.log('A posição ' + pos + ' possui o valor ' + num[pos])
}

for(let pos in num){
    console.log('A posição ' + pos + ' possui o valor ' + num[pos])
}

console.log(num.indexOf(7)) //Busca de valores dentro da array