const { createElement } = require("react")

function gerar(){
    var nume = Number(document.getElementById('num').value)
    var sel = document.getElementById('res')

    if (nume == 0){
        window.alert('[ERRO] Verifique os numeros e tente novamente')
    }else{
        sel.innerHTML = ''
        for (var c = 1; c<=10 ; c++){
            var item = document.createElement('option')
            item.text = `${nume} X ${c} = ${nume*c}`
            sel.appendChild(item)
        }
    }


}