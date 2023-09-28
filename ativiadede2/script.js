function mediaPonderada(){
    var nota1 = document.getElementById("Nota-1").value;
    var nota2 = document.getElementById("Nota-2").value;
    var nota3 = document.getElementById("Nota-3").value;

    var media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);

    document.getElementById("resultado").textContent = media.toFixed(1)
    document.getElementById("footer").textContent = "Média ponderada"
}