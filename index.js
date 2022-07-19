let boton= document.getElementById("boton");

boton.addEventListener('click',function(){


    let resultado= document.getElementById("resultado");
    let peso= document.getElementById ("peso");
    let estatura = document.getElementById ("altura");
    let peso2 =parseFloat(peso.value);
    let estatura2= parseFloat (estatura.value);

    let estatura3= (estatura2/100);

    let resultado2= peso2/(estatura3*estatura3);

    
    let respuesta= document.getElementById ("respuesta");

resultado.innerHTML="Su indice de masa corporal es " + resultado2.toFixed(3);

if (resultado2< 18.5) {
    respuesta.innerHTML="Nivel de peso: Su peso es bajo";
} 

if((resultado2>=18.5) & (resultado2<= 24.98)){

respuesta.innerHTML="Nivel de peso: Su peso es normal";}

if ((resultado2>=24.99) & (resultado2<= 29.9)) {
    respuesta.innerHTML= "Nivel de peso: Sobrepeso";
}
if (resultado2>=30)
{ respuesta.innerHTML= "Nivel de peso: Obesidad";}

})

