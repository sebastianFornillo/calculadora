const body = document.querySelector('body');
const main = document.querySelector('main');
const activarPantalla = document.querySelector(".activar-pantalla");
const desactivarPantalla = document.querySelector(".desactivar-pantalla");
const boton = document.querySelectorAll(".btn");
const digitos = [];

/*  actualiza el contenido de los elementos activarPantalla y desactivarPantalla con los valores actuales del array digitos. */

function update(){
    activarPantalla.textContent = digitos.join('') 
    desactivarPantalla.textContent = eval(digitos.join('')) 
}

/* es una función que iguala los resultados de ambas pantalla. */

function showresult(){
    activarPantalla.textContent = desactivarPantalla.textContent;
    digitos[0] = eval(digitos.join(''));
    digitos.length = 1;

}

/* es una función que limpia el array digitos y resetea. */

function clearresult (){
    digitos.length = 0;
    activarPantalla.textContent = 0;
    desactivarPantalla.textContent = 0;
}

/* es una función que elimina el último dígito ingresado en la calculadora. */

function removeDigitos (){
    digitos.pop();
    update();
    
}

/* Dependiendo del texto del botón, realiza diferentes acciones: muestra el resultado, elimina el último dígito, limpia el resultado o agrega un nuevo dígito u operador al array digitos. */

boton.forEach(btn => {
    btn.addEventListener("click", (e) =>{

        if(e.target.textContent == "=") return showresult();
        if(e.target.textContent == "del") return removeDigitos();
        if(e.target.textContent == "C") return clearresult();
        digitos.push(e.target.textContent);
        update();
    })

});


