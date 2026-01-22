function gerar(){
    var valor = Number(document.getElementById('num').value)
    var res = document.getElementById('seltab')
    var ab = document.getElementById('ab')

    if(valor.length == 0 || valor == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        res.innerHTML = ''
        for(var c = 1; c <=10 ; c++){
            var item = document.createElement('option')
            item.text = `${valor} X ${c} = ${valor*c}`
            item.value = `res${c}`
            res.appendChild(item)
    }

    }
    
}