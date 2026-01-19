function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora>0 && hora<12){
        img.src= 'imagens/manha2.png'
        document.body.style.backgroundColor = '#FEE09A'
    }else if (hora>=12 && hora <19){
        img.src = 'imagens/tarde2.png'
        document.body.style.backgroundColor = '#fe871fd2'
    }else{
        img.src= 'imagens/noite2.png'
        document.body.style.backgroundColor = '#DB9FC3'
    }

}
