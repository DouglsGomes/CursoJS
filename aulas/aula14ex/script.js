function contar(){
    var inicio = Number(document.getElementById('num1').value)
    var fim = Number(document.getElementById('num2').value)
    var pass = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    
    if (inicio ==0 || fim==0 || pass==0){
        res.innerHTML = '[ERRO] Verifique os numeros e tente novamente <br> O passo não pode ser igual 0' 
    }else{
        
       if(inicio < fim){
            res.innerHTML = 'Iniciando: '
            for(var c = inicio ; c<=fim ; c+=pass){
            res.innerHTML += ` ${c} \u{27A1}`
        }
        res.innerHTML += ` \u{1f3c1}` 
       }else{
            for (var c = inicio ; c>=fim ; c-=pass){
                res.innerHTML += ` ${c} \u{27A1}`
            }
       }res.innerHTML += ` \u{1f3c1}` 
       

    }

    
}