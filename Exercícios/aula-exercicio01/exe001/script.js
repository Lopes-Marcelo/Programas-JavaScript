function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas!'

    if (hora >= 6 && hora < 12){
        //bom dia
        img.src = 'fotomanhapng.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'foto-dia-png.png'
        document.body.style.background = '#b9846f'
    } else if (hora >= 18 && hora < 24){
        //boa noite
        img.src = 'foto-noite-png.png'
        document.body.style.background = '#515154'
    } else if(hora >= 0 && hora < 6){
        //boa madrugada
        img.src = 'fot-madrugada-png.png'
        document.body.style.background = '#1C1C1C'
    } else{
        //erro no sistema
    }
}