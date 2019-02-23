function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

    while(respuesta=="si")

    {
       
      contador=contador+1;
      console.log(contador);
      numero=prompt("Ingrese numero"+contador+"# :");
      console.log(numero);
      numero=parseInt(numero);
      console.log(numero);
      acumulador=acumulador+numero;  
      console.log(acumulador);

      respuesta=prompt("Si para continuar");
     
    }



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN