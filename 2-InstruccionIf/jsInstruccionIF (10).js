function mostrar()

{
	//Genero el número RANDOM entre 1 y 10 
	
	
  var numeroRandom;

  var nota;

  var mensaje;

  numeroRandom=Math.floor((Math.random() * 10) + 1);
  
  nota=numeroRandom;

  nota=parseInt(nota);

  if(nota>=9)

    {

    mensaje="La nota del exámen es un"+nota+"por lo tanto tiene un Excelente";

    }
   
  else   
    {
 		if(nota>=4 && nota<9)
         
        { 	

          mensaje="La nota del exámen es un"+nota+"por lo tanto aprobó el exámen";

        }
    
       else
  
       {

         mensaje="La nota del exámen es un"+nota+"por lo tanto:""Vamos, la próxima se puede";

       }
    

  alert(mensaje);

 

}//FIN DE LA FUNCIÓN