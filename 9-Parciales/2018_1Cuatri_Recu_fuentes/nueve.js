function mostrar()
{

var marca,tamano,precio;
var respuesta="Si";
var i=1;
var mayorprecio=0;
var mayorpreciomarca;
var mayorpreciotamano=0;
var menorprecio=0;
var menorpreciomarca;
var menorpreciotamano=0;

while(respuesta=="Si")

 {
   marca=prompt("Ingrese la marca");
   tamano=prompt("Ingrese el tamaño");
   tamano=parseInt(tamano);
   precio=prompt("Ingrese el precio");
   precio=parseInt(precio);

  } 	  

    if(precio<8000)
    {
     menorpreciotamano=tamano;
     mayorpreciomarca=marca;
     menorprecio=precio;
    }
     
    else
    {
     mayorprecio=precio;
     mayorpreciomarca=marca;
     mayorpreciotamano=tamano;
    }  
 
  alert("El mayor precio es "+mayorprecio+" marca"+mayorpreciomarca);
 

}
