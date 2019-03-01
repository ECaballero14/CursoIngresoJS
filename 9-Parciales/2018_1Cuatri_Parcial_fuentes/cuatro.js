function mostrar()

{

var num1,num2,rest;

num1=prompt("Ingrese num1");

num2=prompt("Ingrese num2");

if(num1==num2)

  {

    rest=num1+""+num2;

    alert("El resultado concatenado es:"+rest);

  }


   		num1=parseInt(num1);

   		num2=parseInt(num2);

 	if(num1>num2)
 
  	{


   		rest=num1-num2;

   		alert("El resultado de la resta es:"+rest);
    } 

  
   else
   
   {

   	   rest=num1+num2;

       alert("La suma es:"+rest);      


    }

    if(res>10)
    
    {

      alert("La suma es:"+rest+"y supera el 10");	
    }

}
