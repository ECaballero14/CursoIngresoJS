function mostrar()
{

	var contador=0;
	// declarar variables

	var maximo;

	var minimo;
	
	maximo=-999;

	minimo=999; 

	var bandera="es la primera";

	var respuesta='si';

	while(respuesta=="si")

	{

	  contador=contador+1;
      console.log(contador);
      numero=prompt("Ingrese numero"+contador+"# :");
      console.log(numero);
      numero=parseInt(numero);
      console.log(numero);
      //acumulador=acumulador+numero;  
      //console.log(acumulador);

	  if(bandera=="es la primera")
	  	
	     {
		    maximo=numero;

		    minimo=numero;

		    bandera="hola";

      {else

      	if(numero>maximo)

      	{
           maximo=numero; 
        
        }          

    	if(numero<minimo)

        {

        minimo=numero; 

        }	 
        
      respuesta=prompt("Si para continuar");
      }
    }

document.getElementById('minimo').value=minimo;
document.getElementById('maximo').value=maximo;


}//FIN DE LA FUNCIÓN