function mostrar()

{

	//Ejericio alumnos 7 de parciales

//var notas=0;
//var auxnotas=0;
//var sexo;
//var auxsexo;
//var cantal=1;
//var cantsexo=1;
//var cantnombre=1;
//var nombre;
//var auxnombre;
//var mensaje;
//var prom;

//notas=parseInt(notas);
//cantal=parseInt(cantal);

//while(cantal<5)

 //{
	 
	    //notas=prompt("Ingresar una nota:"+cantal+" entre el 0 y el 10"); 
        //auxnotas=notas;
	    //cantal=cantal+1;

	    //if(notas>0 && notas<10)

	    //{
	          
//	  	      sexo=prompt("Ingresar sexo:"+cantsexo+"f o m");
//
//	          if(sexo=='f' || sexo=='m')
//
//	          	 {
//	          	 	auxsexo=sexo;
//
//	          	 	cantsexo=cantsexo+1;
//
//	                nombre=prompt("Ingrese un nombre:"+cantsexo);
//
//	                cantnombre=cantnombre+1;
//
//	          	 }
//
//	          else
//	          
//	             {
//	                
//	                mensaje="Debe ingresar un sexo correcto";
//
//	             } 	 
//   
       // }
  
 // }      
 
 // prom=notas/cantal;
  
  //alert("El promedio total de todas las notas cargadas es:"+prom);


var vel;
var auxvel;
var cant=0;
var tipocomb;
var auxtipocomb;
var cantcomb=0;
var prom=0;
var velsig;
var cantliq=0;
var auxvelmayor=0;
var cantsoli=0;

vel=parseInt(vel);

velsig=parseInt(velsig);

auxvel=parseInt(auxvel);

while(cant<5)

{

  vel=prompt("Ingrese velocidad :entre 0 y 250 km/s");
  
  if(vel>0 && vel<250)
  	
  	{
     	auxvel=vel;

     	console.log(auxvel);

     	auxvel=auxvel+auxvel;
     	
     	cant=cant+1;

     	console.log(cant);
  	}

  tipocomb=prompt("Ingrese tipo de combustible: s para sólido y i para liquido");   

  if(tipocomb=='s' || tipocomb=='l')
  
    {
          if(velsig>vel)
 
            {
               
               velsig=vel;
               auxtipocomb=tipocomb; 
            }    

          if(tipocomb=='l')  
 
            {
                 if(vel>100)

                   {

                       cantliq=cantliq+1;                   	
                   }
            }

         else if(tipocomb=='s')   
             
              {
                 if(vel>velsig)

                   {

                      auxvelmayor=vel;             	
                   }
            } 
            
            cantcomb=cantcomb+1;    
    }

prom=auxvel/cant;     
        
}

 alert("El promedio de velocidades es:"+promp);

 alert("La velocidad más baja es:"+vel+"el tipo de combustible de ese vehículo:"+tipocomb); 

 alert("La cantidad de combustibles líquidos es:"+cantliq+"que su velocidad supere los 100 kilómetros es");  

 alert("la velocidad más alta de los de combustible sólido es:"+auxvelmayor);  

}
