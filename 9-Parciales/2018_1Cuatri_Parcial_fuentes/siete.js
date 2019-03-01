function mostrar()
{

var notas=0;
var auxnotas=0;
var sexo;
var auxsexo;
var cantal=1;
var cantsexo=1;
var cantnombre=1;
var nombre;
var auxnombre;
var mensaje;
var prom;

notas=parseInt(notas);
cantal=parseInt(cantal);

while(cantal<5)

 {
	 
	    notas=prompt("Ingresar una nota:"+cantal+" entre el 0 y el 10"); 
        auxnotas=notas;
	    cantal=cantal+1;

	    if(notas>0 && notas<10)

	    {
	          
	  	      sexo=prompt("Ingresar sexo:"+cantsexo+"f o m");

	          if(sexo=='f' || sexo=='m')

	          	 {
	          	 	auxsexo=sexo;

	          	 	cantsexo=cantsexo+1;

	                nombre=prompt("Ingrese un nombre:"+cantsexo);

	                cantnombre=cantnombre+1;

	          	 }

	          else
	          
	             {
	                
	                mensaje="Debe ingresar un sexo correcto";

	             } 	 
   
        }
  }      
 
  prom=notas/cantal;
  
  alert("El promedio total de todas las notas cargadas es:"+prom);


}
