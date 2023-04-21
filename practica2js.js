function suma(){
    var i,j,suma,texto;
    i = document.getElementById("numero1").value;  
    j = document.getElementById("numero2").value; 
    if(isNaN(i) || isNaN(j)){
        texto="solo introduzca numeros";
    }
    else{
        suma=0;
        suma=parseFloat(i)+parseFloat(j);
        texto = suma;
        
    }
    document.getElementById("resultado").innerHTML=texto;
}
function resta(){
    var i,j,restar,texto;
    i = document.getElementById("numero1").value;  
    j = document.getElementById("numero2").value; 
    if(isNaN(i) || isNaN(j)){
        texto="solo introduzca numeros";
    }
    else{
        restar=0;
        restar=parseFloat(i)-parseFloat(j);
        texto = restar;
        
    }
    document.getElementById("resultado").innerHTML=texto;
}
function multi(){
    var i,j,multiplicar,texto;
    i = document.getElementById("numero1").value;  
    j = document.getElementById("numero2").value; 
    if(isNaN(i) || isNaN(j)){
        texto="solo introduzca numeros";
    }
    else{
        multiplicar=0;
        multiplicar=parseFloat(i)*parseFloat(j);
        texto = multiplicar;
        
    }
    document.getElementById("resultado").innerHTML=texto;
}
function divi(){
    var i,j,division,texto;
    i = document.getElementById("numero1").value;  
    j = document.getElementById("numero2").value; 
    if(isNaN(i) || isNaN(j)){
        texto="solo introduzca numeros";
    }
    else{
        division=0;
        division=parseFloat(i)/parseFloat(j);
        texto = division;
        
    }
    document.getElementById("resultado").innerHTML=texto;
}