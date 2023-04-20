//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

/* Al hacer click en el botón "Click Me!" el color del fondo de body siempre cambia al mismo color, por ejemplo, amarillo. Podeis modificar el html si lo creeis oportuno.

Paso 1: Poner una oreja al botón para que capture el evento click. Que me muestre por consola "me has hecho click". */

/* Una manera de fer-ho:

document.querySelector('button').onclick = changeColor;

function changeColor() {
    console.log("Me has hecho click");
} */

/* Una altra manera de fer-ho: */

document.querySelector('button').addEventListener('click', function () {

    /* Paso 2: cambia el color del body a amarillo. 1 linea de código.
    Seleccionar el nodo "body" y cambiar su estilo en linea a amarillo. Recuerda que la "style" es un objeto con muchas propiedades */

/* document.querySelector('body').style.backgroundColor = 'yellow'; */

/* Una altra opció seria posar-ho:

document.body.style.backgroundColor = "yellow";
 */

/* Paso 3: Calcular una número aleatorio entre 0 y el número de elementos del array "colors". Acceder a ese índice de ese array y recuperar el color ganador, y asignarlo a la propiedad backgroundColor.  */


    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.backgroundColor = randomColor;


    
});
