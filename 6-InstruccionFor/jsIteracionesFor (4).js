function mostrar()
{

var numeroanterior;

var numeroingresado;

var numerorecorrido;

numeroingresado=prompt("INGRESE UN NUMERO");

numeroingresado=parseInt(numeroingresado);

for(numerorecorrido=numeroingresado-1;numerorecorrido>1;numerorecorrido--) //recorre desde el numero ingresado hasta el anterior

  {

   for(numeroanterior=numerorecorrido-1;numeroanterior>1;numeroanterior--) //recorre desde el numero ingresado hasta el anterior

   {   	
  
   	if (numerorecorrido%numeroanterior==0)//encontre un divisor, no es primo

   	  {

         break;

   	  }

    console.log(numeroanterior);
  	//document.write(contador);
  }

  if(numeroanterior==1)
 
   {

  	console.log("es primo "+numerorecorrido+" es un numero primo");

   }
 } 
}//FIN DE LA FUNCIÓN