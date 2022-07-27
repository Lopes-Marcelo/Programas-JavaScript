let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if((isNumero(num.value)) && (!inLista(num.value, valores))){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'Valor ' + num.value + ' adicionado.'
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado em lista!!')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
            soma += valores[pos]
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML = '# Ao todo foram cadastrados ' + tot + ' valores.'
        res.innerHTML = '# O maior valor informado foi ' + maior + '.'
        res.innerHTML = '# O menor valor informado foi ' + menor + '.'
        res.innerHTML = '# A soma de todos os valores adicionados é igual a ' + soma + '.'
        res.innerHTML = '# A média dos valores informados é igual a ' + media + '.'
    }
}