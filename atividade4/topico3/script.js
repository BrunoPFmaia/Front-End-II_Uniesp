let numeros = []


function inserir(){
    var input = document.getElementById("valor")
    if(input.value != ''){
        numeros.push(parseInt(input.value))
    }
    input.value = ''
    console.log(numeros.length)
}

function calcular(){
    var n = numeros.length
    var menorN = numeros[0]
    var maiorN = numeros[0]
    for(i = 1; i < n; i++){
        if(menorN > numeros[i]){
            menorN = numeros[i]
        }
        if(maiorN < numeros[i]){
            maiorN = numeros[i]
        }
    }
    document.getElementById('maior').textContent = 'Maior numero: '+ maiorN
    document.getElementById('menor').textContent = 'Menor numero: '+ menorN
    document.getElementById('soma').textContent = 'Soma: ' + (menorN + maiorN)

    console.log('Maior: ' + maiorN)
    console.log('menor: ' + menorN)
    console.log('soma: ' + (maiorN + menorN))
}
