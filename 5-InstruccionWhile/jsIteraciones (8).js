function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';


    while(1)

    {
       
      contador=contador+1;
      console.log(contador);
      numero=prompt("Ingrese numero"+contador+"# :");
      console.log(numero);
      numero=parseInt(numero);
      console.log(numero);
      acumulador=acumulador+numero;  
      console.log(acumulador);

      if(numero>0)

      {

        positivo=postivo+numero; 
      }	


      else

      {

        negativo=negativo*negativo;

      }	

      //respuesta=prompt("Si para continuar");

      //if(respuesta=="si")

        //{

          //break;


        contador=contador+1;
        acumulador=acumulador+1;

        if()   



      } 

      


     
    }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN