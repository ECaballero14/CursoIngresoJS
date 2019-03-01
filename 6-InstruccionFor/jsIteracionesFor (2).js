function mostrar()
{

var numeroanterior;

var numeroingresado;

numeroingresado=prompt("INGRESE UN NUMERO");

numeroingresado=parseInt(numeroingresado);

for(numeroanterior=numeroingresado-1;numeroanterior>0;numeroanterior--) //recorre desde el numero ingresado hasta el anterior

  {
  
   if (numeroingresado%numeroanterior==0)//encontre un divisor, no es primo

   	  {

         break;

   	  }

    console.log(numeroanterior);
  	//document.write(contador);
  }

 if(numeroanterior==1)
 
  {

  	console.log("es primo");

  }

  else

  {

  	console.log("no es primo"); 
  } 

}