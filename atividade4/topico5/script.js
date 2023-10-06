function calcular(){
    const pi = 3.14
    var raio = parseFloat(document.getElementById('valor').value)

    var area = pi * raio ** 2
    var perimetro = 2 * pi * raio

    document.getElementById('area').textContent = 'Área: ' + area.toFixed(2)
    document.getElementById('perimetro').textContent = 'Perimetro: ' + perimetro.toFixed(2)
    console.log(area)
    console.log(perimetro)
}