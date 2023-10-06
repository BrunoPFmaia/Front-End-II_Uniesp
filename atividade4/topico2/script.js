let numeros = []
var nPar = 0
var nImp = 0

function inserir(){
    var input = document.getElementById("valor")
    if(input.value != ''){
        numeros.push(parseInt(input.value))
    }
    input.value = ''
    console.log(numeros.length)
}
function calcular(){
    n = numeros.length;
    for(i = 0; i < n; i++){
        if(numeros[i] % 2 == 0){
            nPar++
        }
        else{
            nImp++
        }
    }
    document.getElementById('impar').textContent = "Numeros pares: "+nPar
    document.getElementById('par').textContent = "Numeros impares: "+nImp
    console.log(numeros)
    console.log(`Numeros pares ${nPar}`)
    console.log(`Numeros impares ${nImp}`)
}
