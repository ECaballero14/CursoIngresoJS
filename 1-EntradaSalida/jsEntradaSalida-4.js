/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
  
 var nombre;
 //Lo que escriba en la ventana 
 nombre = prompt("Ingresar nombre");
 //lo muestro en el textboxt 
 //elNombre.value=nombre; 
 document.getElementById('elNombre').value=nombre;


}

