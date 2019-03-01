function mostrar()
{

var precio,Porc,Desc,PF;

precio=prompt("Ingrese un precio");

precio=parseInt(precio);

porc=prompt("Ingrese un porcentaje de descuento");

Desc=(precio*porc)/100;

PF=precio-Desc;

elPrecioFinal.value=PF;

}
