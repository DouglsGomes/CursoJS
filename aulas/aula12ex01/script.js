function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora são ${hora} horas`
if (hora >0 && hora <12){
    img.src='imagens/manha2.png'
    document.body.style.backgroundColor = ' #E57753'
}else if (hora>=12 && hora <=19){
        img.src = 'imagens/tarde2.png'
        document.body.style.backgroundColor = ' #762A17'
   
} else{
        img.src='imagens/noite2.png'
        document.body.style.backgroundColor = ' #3C2E4D'
    }
}