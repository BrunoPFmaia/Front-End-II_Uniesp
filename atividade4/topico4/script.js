
function calculaSalario(){
    let ano_inicial = 1995
    var aumento = 0.015
    var salario = parseFloat(document.getElementById('valor').value)
    var ano_atual = 2023 
    salario += salario * aumento
    
    for(ano_inicial ; ano_inicial != ano_atual; ano_inicial++){
        aumento = aumento * 2
        console.log(aumento)
        salario += salario * aumento
        console.log(salario)
    }
    console.log(salario)
    document.getElementById('total').textContent = 'Salário: '+ salario
}