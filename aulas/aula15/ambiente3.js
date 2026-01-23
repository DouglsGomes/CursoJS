let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let pos in vetor){
    console.log(vetor[pos])
   
}
var local = vetor.indexOf(50)
if (local==-1){
    console.log(`O valor informado não foi encontrado`)
}else{
    console.log(`A posição do valor informado é ${local}`)
}
