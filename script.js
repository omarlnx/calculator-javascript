

let suma = ()=> {
     let x, y, suma, text;
     x = document.getElementById("num1").value;
     y = document.getElementById("num2").value;
     if (isNaN(x) || isNaN(y)) {
       text = "Introduzca un numero válido";
     } else {
       suma = parseFloat(x) + parseFloat(y);
       text = suma;
     }
     document.getElementById("suma").innerHTML = text;
   } ;
   
   let resta = ()=> {
     let x, y, resta, text;
     x = document.getElementById("num1").value;
     y = document.getElementById("num2").value;
     if (isNaN(x) || isNaN(y)) {
       text = "Introduzca un numero válido";
     } else { 
       resta  = parseFloat(x) - parseFloat(y);
       text = resta;
     }
     document.getElementById("resta").innerHTML = text;
   }; 

   let mult = ()=> {
     let x, y, multiplicacion, text;
     x = document.getElementById("num1").value;
     y = document.getElementById("num2").value;
     if (isNaN(x) || isNaN(y)) {
       text = "Introduzca un numero válido";
     } else {
      multiplicacion  = parseFloat(x) * parseFloat(y);
       text = multiplicacion;
     }
     document.getElementById("multiplicacion").innerHTML = text;
   } 
   let div = ()=> {
     let x, y, division, text;
     x = document.getElementById("num1").value;
     y = document.getElementById("num2").value;
     if (isNaN(x) || isNaN(y)) {
       text = "Introduzca un numero válido";
     } else {
      division  = parseFloat(x) / parseFloat(y);
       text = division;
     }
     document.getElementById("division").innerHTML = text;
   }
