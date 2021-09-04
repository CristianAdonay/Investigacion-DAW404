
window.onload = function(){
    var elemento = document.getElementById("micanvas");
    var contexto = elemento.getContext('2d');
  contexto.fillStyle = "#FFBD16";
    contexto.fillRect(200, 200, 200, 200);
}
function myFunction() {  
  var x,y,resta,text;  
  x = document.getElementById("num1").value;  
  y = document.getElementById("num2").value;  
  if (isNaN(x) || isNaN(y)) {  
    text = "Es necesarios introducir dos números válidos";  
  } else {  
    //si no ponemos parseFloat concatenaría x con y  
    resta=parseFloat(x)-parseFloat(y);  
    text= resta;  
  }  
  document.getElementById("restando").innerHTML = text;  
}  