function mostrar()

{

 var pais;
 var sup;
 var cant_paises=0;
 var respuesta="Si";
 var acu=0;
 var prom=0; 
 var menorsup;
 var igualsup;
 var supimpar;
 var cantmenorsup=0;
 var cantigualsup=0;
 var cantsupimp=0;
 var auxnombre;
 var auxnombre1;

 while(respuesta="Si")

 	{

      pais=prompt("Ingrese un nombre pais");

      cant_paises=cant_paises+1;

      sup=prompt("Ingrese una superficie en Km^2");

      acu=acu+sup;

      if(!sup%==0)
    
        {
          supimpar=sup;

          cantsupimp=cantsupimp+1;
        }

      if(sup<100)

        {

     	  menorsup=sup;

      	  cantmenorsup=cantmenorsup+1;
        }


     else if(sup==100)
     
       {

          igualsup=sup;
 
          cantigualsup=cantigualsup+1;
      
       }

      if(sup<menorsup) 

       {
        
         auxnombre=pais;

       } 

      if(sup>100)
      
       {

         auxnombre1=pais;
       } 

} 

prom=acu/cant_paises;

document.write("La cantidad de países con superficie impar:"+supimpar+"<br>"+);

document.write("La cantidad de países con superficie menor a 100 es:"+cantmenorsup+"<br>"+);

document.write("La cantidad de países con superficie igual a 100:"+cantigualsup+"<br>"+);

document.write("El nombre del primer país que superó los 100 de superficie:"+auxnombre+"<br>"+);

document.write("El Promedio de paises es:"+prom+"<br>"+);

document.write("El nombre del que menos territorio tiene"+auxnombre+"<br>"+);

}
