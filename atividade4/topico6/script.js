// valores a serem inseridos pelo usuario

function calcular(){

    var c = parseFloat(document.getElementById('capital').value)
    var i = parseFloat(document.getElementById('juros').value) / 100
    var t = parseFloat(document.getElementById('tempo').value)
    var total = c * (1+i) ** t
    
    console.log(total.toFixed(2))
    document.getElementById('investimento').textContent = 'Investimento: ' + total.toFixed(2)
}