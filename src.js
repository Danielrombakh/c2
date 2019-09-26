window.onload = function() {
    let x = prompt("Zadej hodnotu X.");
    let y = prompt("Zadej hodnotu Y.");
  
    let solve = x * x + y * y;
  
    if(Math.sqrt(solve) < 5){
        document.getElementById("div1").innerHTML="Bod je v dostrelu!";
    } else {
      document.getElementById("div2").innerHTML="Bod není v dostrelu!";
    }
  }
  