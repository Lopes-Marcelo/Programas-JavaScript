/*
Relacionais

> maior
< menor
>= maior igual
<= menor igual
== igual
!= diferente 

*/

5 > 2;
7 < 4;
8 >= 8;
9 <= 7;
5 == 5;
4 != 4;

//Sinal de Igual
5 = 5; //atribuição
5 == "5" //vai retornar true, pois avalia apenas conteúdo
5 === "5" //vai retornar false, pois apesar do conteúdo igual o tipo é diferente pois o primeiro é um number enquanto o segundo é uma string.
5 === 5; //vai retornar true, pois ambos, conteúdo e tipo, são iguais.

/*
Lógicos

! negação
&& conjunção
|| ou 

*/


/*
Ternários

? : 
teste? true : false

*/

var media = 5;
media >= 7 ? true : false; //vai retornar false, pois a média declarada é menor que 7.