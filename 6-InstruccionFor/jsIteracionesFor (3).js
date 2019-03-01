function mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");

var numeroanterior;

var numeroingresado;

var acu=0;

numeroingresado=prompt("INGRESE UN NUMERO");

numeroingresado=parseInt(numeroingresado);

for(numeroanterior=numeroingresado-1;numeroanterior>0;numeroanterior--) //recorre desde el numero ingresado hasta el anterior

  {
  
   if (numeroingresado%numeroanterior==0)//encontre un divisor, no es primo

   	  {

         //break;

         acu=acu+numeroanterior;

   	  }

    console.log(numeroanterior);
  	//document.write(contador);
  }

if(numeroingresado==acu)

 {

  console.log("es perfecto"); 	
 }	

 else

{

 console.log("no es perfecto");	
} 	

}//FIN DE LA FUNCIÓN