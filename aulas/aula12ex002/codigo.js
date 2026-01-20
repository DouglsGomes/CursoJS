function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (nasc.valuelength==0 || nasc.value >ano){
        window.alert('[ERRO]  Verifique os dados e tente novamente!')
    }else{
        var rsex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (rsex[0].checked){
            gen = "Masculino"
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebe.boy.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'jovem.man.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'adulto.man.png')
            }else{
                //idoso
                img.setAttribute('src', 'velho.man.png')
            }
            
        }else if (rsex[1].checked){
            gen = "Feminino"
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebe.girl.png')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'jovem.woman.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'adulta.woman.png')
            }else{
                //idoso
                img.setAttribute('src', 'velha.woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você tem ${idade} anos e você é do gênero ${gen}`
        res.appendChild(img)
    }

    
}