function carregar(){
    var nasc = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - Number(nasc.value)
    var res = document.getElementById('res')
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nasc.value.length == 0 || nasc.value>ano){
        res.innerHTML ='[ERRO] Verifique os dados e tente novamente'
    }else{
        var sex = document.getElementsByName('allsex')
        if (sex[0].checked){
            gen = 'Homem'
            if (idade >=0 && idade<10){
                //criança
                img.setAttribute('src', 'imagens/bebe.boy.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'imagens/jovem.man.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'imagens/adulto.man.png')
            }else{
                //velho
                img.setAttribute('src', 'imagens/velho.man.png')
            }
        }else if (sex[1].checked){
            gen = 'Mulher'
            if (idade >=0 && idade<10){
                //criança
                img.setAttribute('src', 'imagens/bebe.girl.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'imagens/jovem.woman.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'imagens/adulta.woman.png')
            }else{
                //velho
                img.setAttribute('src', 'imagens/velha.woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}