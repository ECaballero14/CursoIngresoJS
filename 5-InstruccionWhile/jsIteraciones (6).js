function mostrar()
{
    var acumulador;
	var contador;
	var numero;
    
    contador=0;
    acumulador=0;
   
    while(contador<5)
    {
      
      
      numero=prompt("Ingrese numero"+contador+"# :");
      console.log(numero);
      numero=parseInt(numero);
      console.log(numero);
      acumulador=acumulador+numero;  
      console.log(acumulador);
      contador=contador+1;
      console.log(contador);

    }

    

     
    

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN