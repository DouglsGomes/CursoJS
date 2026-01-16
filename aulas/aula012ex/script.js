function carregar(){

var msg = document.getElementById('horas')
var img = document.getElementById('img')
var data = new Date()
var horas = data.getHours()
msg.innerHTML=`Agora são ${horas} horas`

if (horas >=0 && horas <12){
    carregar()
}
}