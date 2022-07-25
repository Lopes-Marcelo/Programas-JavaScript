function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO] Verifique os dados informados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'meninopng.png')
            } else if (idade >= 12 && idade < 24){
                //jovem
                img.setAttribute('src', 'homem-jovempng.png')
            } else if (idade >= 24 && idade < 60){
                //adulto
                img.setAttribute('src', 'homem-adultopng.png')
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src', 'homem-idosopng.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'meninapng.png')
            } else if (idade >= 12 && idade < 24){
                //jovem
                img.setAttribute('src', 'mulher-jovempng.png')
            } else if (idade >= 24 && idade < 60){
                //adulto
                img.setAttribute('src', 'mulher-adultopng.png')
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src', 'mulher-idosapng.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero + ' de ' + idade + ' anos.'
        //tirar um espaço da foto e da mensagem
        res.appendChild(img)
    }
}