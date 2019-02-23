function mostrar()
{

	var contador=0;
	var numero;
	var positivo;
	var negativo;
	var cant_positivo;
	var cant_negativo;
	var cant_ceros;
	var can_pares;
	var promedio;
	var acum_negativo;
	var acu_positivo;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
      numero=prompt("ingrese numero");
	  numero=parseInt(numero);
	  respuesta=prompt("ingresar 'SI', para continuar");

      if(numero>0 )

        {
  
           acu_positivo=acu_positivo+numero;
           cant_positivo=cant_positivo+1;
        } 

      else if(numero<0)
        
        {
           acum_negativo=acum_negativo-numero;
           cant_negativo=cant_negativo+1;

        }


	}




}//FIN DE LA FUNCIÓN