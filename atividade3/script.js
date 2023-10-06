// Eu sei, está bagunçado. Mas funciona! Depois eu planejo organizar e otimizar este código.

function calcular(){

    var elementoResultado = document.getElementById('resultado');
    var elementoFooter = document.getElementById('footer');
    var divRecuperacao = document.createElement("div");
    var divInput = document.createElement('input');
    var divPai = document.getElementById('div-recuperacao');
    
    var notas= [];
    var nota1 = parseFloat(document.getElementById('nota-1').value);
    var nota2 = parseFloat(document.getElementById('nota-2').value);
    var nota3 = parseFloat(document.getElementById('nota-3').value);
    var soma = 0;
    var media = 0;

    function reprovado(){
        elementoResultado.textContent = media.toFixed(1);
        elementoResultado.style.color = 'red';
        elementoFooter.textContent = 'Aluno Reprovado!';
        elementoFooter.style.color = 'red';
    }

    notas.push(nota1, nota2, nota3)

    for(i = 0; i < notas.length; i++){
        soma += notas[i];
    }
    
    media = soma/notas.length
    
    divInput.id = 'input-rec'
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Preencha todos os campos!');
        return;
    }

    if(divPai.childElementCount > 0){
        var notaRec = parseFloat(document.getElementById('input-rec').value);
        if(isNaN(notaRec)){
            alert('Preencha todos os campos!');
            return;
        }
        media = (media + notaRec)/2
    }
    if(divPai.childElementCount > 0 && media < 5){
        reprovado();
    }
    else if(media <= 4){
        reprovado();
    }
    else if(media > 4 && media < 7 && divPai.childElementCount == 0){
        elementoResultado.textContent = media.toFixed(1);
        elementoResultado.style.color = 'red';
        elementoFooter.textContent = 'Em recuperação!';
        elementoFooter.style.color = 'red';
        
        divInput.type = 'number';
        divInput.classList.add('input-nota');

        divInput.style.marginLeft = '30px';
        divInput.style.marginRight = '30px';
        divInput.style.marginTop = '5%';
        
        divRecuperacao.textContent = 'Nota recuperação: ';
        divRecuperacao.style.marginTop = '5%';

        elementoFooter.style.marginBottom = '20%';
        
        
        divRecuperacao.style.fontFamily = 'font-family: Montserrat, sans-serif';
        divRecuperacao.style.fontSize = '1.8rem';
        divRecuperacao.style.fontWeight = 'bold';
        divPai.appendChild(divRecuperacao);
        divPai.appendChild(divInput);

    }
    else{
        elementoResultado.textContent = media.toFixed(1);
        elementoResultado.style.color = 'green';
        elementoFooter.textContent = 'Aluno aprovado!';
        elementoFooter.style.color = 'green';
        while (divPai.firstChild) {
            divPai.removeChild(divPai.firstChild);
        }

    }
}