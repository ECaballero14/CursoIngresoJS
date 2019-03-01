function mostrar()
{

var planeta;
var mensaje;

planeta=prompt("Ingresar un planeta del sistema solar")

switch(planeta)

	{

	 case "mercurio":
	 case "venus":
           mensaje="Aca hace mucho calor";
           break;
     case "tierra":
           mensaje="Aca vivimos";
           break;           
     case "jupiter":
     case "saturno":
     case "urano":
     case "neptuno":
           mensaje="Aca hace mucho frio";
           break;
     default:
           mensaje="No es un planeta válido ";
           break;   
	}

alert(mensaje);

}
