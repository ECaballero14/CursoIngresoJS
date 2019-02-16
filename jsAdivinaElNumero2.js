/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var numeroingresado;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
numeroRandom=Math.floor((Math.random() * 10) + 1);	

numeroSecreto=numeroRandom;  

}

function verificar()
{

contadorIntentos=contadorIntentos+1;

intentos.value=contadorIntentos;

numeroingresado=numero.value;

if(numeroingresado==numeroSecreto)

	switch(contadorintentos)

    	{
   
      	 case 1:

            mensaje="usted es un psiquico";
			
			break;

      	 case 2:

     		 mensaje="“Excelente percepción”";

      		 break;
  
      	 case 3:

      		mensaje="Esto es suerte";

      		break;

      	 case 4:

      		mensaje="“Excelente percepción”";

      		break;

      	 case 5:

     		mensaje="Usted esta en la media";

      		break;
         
         case 6:
        
          mensaje="falta técnica"; 

          break;   
        }  
 
   alert(mensaje); 

 else

   {
   	 if(numeroingresado<numeroSecreto)

     {
 
        mensaje="Falta...."; 
     }

     else


     {
 
        mensaje="Se paso...."; 
     }
      	 
  }    
 alert(mensaje);
}