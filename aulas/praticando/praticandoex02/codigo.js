function carregar(){
    var nasc = document.getElementById('txtano')
    var date = new Date()
    var ano = date.getFullYear()
    var res = document.getElementById('res')
    var idade = (ano - Number(nasc.value))
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nasc.value.length ==0 || nasc.value >ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sex = document.getElementsByName('radsex')
        if (sex[0].checked){
            gen= 'Homem'
            if (idade >=0 && idade<10){
                img.setAttribute('src', 'bebe.boy.png')
            }else if(idade <21){
                img.setAttribute('src', 'jovem.man.png')
            }else if (idade <50){
                img.setAttribute('src', 'adulto.man.png')
            }else{
                img.setAttribute('src', 'velho.man.png')
            }   
        }else{
            gen = 'Mulher'
            if (idade >=0 && idade<10){
                img.setAttribute('src', 'bebe.girl.png')
            }else if(idade <21){
                img.setAttribute('src', 'jovem.woman.png')
            }else if (idade <50){
                img.setAttribute('src', 'adulta.woman.png')
            }else{
                img.setAttribute('src', 'velha.woman.png')
            } 
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
    

}
