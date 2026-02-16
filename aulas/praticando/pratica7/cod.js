var conjunto = []


function adicionar(){
    var num = Number(document.getElementById('numv').value)
    var sel = document.getElementById('seltab')
    var res = document.getElementById('res')
 
    for (var c =1; c<100;c++){
        conjunto.push(num)
        if (conjunto.push()==true){
        var item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado`
        sel.appendChild(item)
    }else{
        window.alert('deu errado')
    }
    }

    
   
   
   
    
    
    
    
}