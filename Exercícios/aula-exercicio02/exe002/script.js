function clicar(){
    var numero = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0){
        window.alert('[ERRO] Informe o número corretamente!!')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for(var cont = 1; cont <= 10; cont++){
            let item = document.createElement('option')
            item.text = n + ' x ' + cont + ' = ' + (cont*n)
            tab.appendChild(item) 
        }
    }
}