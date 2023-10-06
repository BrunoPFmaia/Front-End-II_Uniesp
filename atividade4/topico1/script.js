document.addEventListener("DOMContentLoaded", function() {
    var pa = 80000;
    var pb = 200000;
    const h1 = document.getElementById("tittle");
  
    for (var i = 0; pa < pb; i++) {
      pa = pa * 1.03;
      pb = pb * 1.015;
    }
    
    h1.textContent = (`Levou ${i} anos para que o pais A supere o pais B`);
  });