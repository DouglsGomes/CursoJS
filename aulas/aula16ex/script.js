
let num = document.getElementById('num1')
let tel = document.getElementById('flist')
let result = document.getElementById("res")
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n, i){
    if (i.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tel.appendChild(item)
        result.innerHTML = ''
    }else{
        window.alert('valor invalido, ou já encontrado na lista')
    }
    num.value = ''
    num.focus()

}


function finalizar(){
    if (valores.length == 0) {
        window.alert('Você precisa adicionar valores para poder finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]   
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        result.innerHTML = `Ao todo temos ${total} valores cadastrados` 
        result.innerHTML += `<p>O maior valor informado foi ${maior}</p>` 
        result.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        result.innerHTML += `<p>Somano todos os valores, temos ${soma} </p>`
        result.innerHTML += `<p> A media desses valores é ${media} </p>`
    }


}