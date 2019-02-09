/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

var primernumero;

var segundonumero;

var suma;

primernumero=numeroUno.value;
segundonumero=numeroDos.value;

primernumero=parseInt(primernumero);
segundonumero=parseInt(segundonumero);


suma=(primernumero+segundonumero);

alert("El resultado de la suma es: "+suma);


}

function restar()
{
	
 var primernumero,segundonumero,resta;

 primernumero=numeroUno.value;

 segundonumero=numeroDos.value;

 primernumero=parseInt(primernumero);

 segundonumero=parseInt(segundonumero);

 resta=primernumero-segundonumero;

 alert(resta);


}

function multiplicar()
{ 
	
var primernumero;

var segundonumero;

var multiplico;

primernumero=numeroUno.value;

segundonumero=numeroDos.value; 

primernumero=parseInt(primernumero);

segundonumero=parseInt(segundonumero);

=primernumero+segundonumero;

alert(multiplico);

}

function dividir()
{
	
}

