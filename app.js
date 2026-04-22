// const button = document.querySelector('button');
// const div = document.querySelector('div');

// button.addEventListener('click', () => {
//     // alert('Hola soy Goku');
//     const saludo = document.createElement('p');
//     saludo.textContent = '¡Hola, soy Goku!';
//     div.appendChild(saludo);
// });


//Identificamos los elementos del DOM
const inputmensaje = document.querySelector('#mensajeinput');
const boton = document.querySelector('button');
const contenedor = document.querySelector('#contenedor');

// Asociamos un evento al botón
boton.addEventListener('click', function() {

    const texto = inputmensaje.value; //Obtenemos el valor del campo de entrada

    //Verificamos que el campo no esta vacio
    if (texto.length === 0) {
        alert("El campo esta vacio");
        return;
    }

const nuevomensaje =document.createElement('p');  //Creamos el nuevo elemento que sera un parrafo

nuevomensaje.textContent = texto;  //Agrega contenido al elemento ya creado

contenedor.appendChild(nuevomensaje);  //Inserta el nuevo elemento a la pagina

inputmensaje.value = ''; //Limpia el campo de entrada
});




// git flow Infinity
// git feature /start firma
// Se llena el nombre pa la firma
// git publish




