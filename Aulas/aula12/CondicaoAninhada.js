var idade = 19;

console.log('Sua idade é ' + idade);

if(idade <= 16){
    console.log('Não pode votar!')
} else if ((idade >= 16 && idade < 18) || (idade >=65)){
    console.log('Voto não obrigatório!')
} else {
    console.log('Voto obrigatório!')
} 