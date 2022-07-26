function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if((inicio.value.length == 0) || (fim.value.length == 0) || (passo.value.length == 0)){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam elementos!!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p == 0){
            p = 1
            window.alert('Passo informado = 0, será considerado = 1!')
        }
    
        if(i < f){
            //Contagem crescente
            for(var cont = i; cont <= f; cont += p){
                res.innerHTML += cont + ' '
            }
        } else {
            //Contagem decrescente
            for(var cont = i; cont >= f; cont -= p){
                res.innerHTML += cont + ' ' 
            }
        }
        
                   
    }
    
}