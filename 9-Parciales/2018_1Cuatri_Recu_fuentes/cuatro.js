function mostrar()

///¡

{

var bandera=0;

var mensaje1;

var ope;

num1=prompt("Ingrese primer número");

num1=parseInt(num1);

num2=prompt("Ingrese segundo número");

num2=parseInt(num2);

num3=prompt("Ingrese tercer número");

num3=parseInt(num3);

num4=prompt("Ingrese cuarto número");

num4=parseInt(num4);

if(num2>num1 && num2>num3 && num2>num4)

   {

     mensaje1="El mayor de todos es el número:"+num2;

     if(num2>100)

       {

         ope=num2-(num2*10/100);
          
       }  

     else if(num2>50)
 
       {

         ope=num2-(num2*5/100);   

       }  
    
     else if(num2<50)

       {

         ope=num2-(num2*15/100);

       }

       
 }  
          
 
alert(mensaje1);

alert("El resultado final con el porcentaje calculado es:"+ope);

}
