

   function suma() {
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
   } 
   
   function resta() {
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
   } 

   function mult() {
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
   function div() {
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
