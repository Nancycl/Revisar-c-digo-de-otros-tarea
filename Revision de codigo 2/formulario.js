/* La class no es form, debe ser formulario, no debe usar var*/
let formulario = document.querySelector("#formulario")

/* La funcion se debe llamar fuera de la funcion
El nombre de la funcion lo hace poco legible y pasa el nombre como parametro
no deberia usar var, mejor let y tampoco deberia asiganrlas todas dentro de la funcion, le falta el ; 
*/

let n = formulario.elements[0];
let e = formulario.elements[1];
let na = formulario.elements[2];
/* Uso incorrecto de .value */
let nombre = n.value;
let edad = e.value;
let i = na.selectedIndex;
let nacionalidad = na.options[i].value;
console.log(nombre, edad);
console.log(nacionalidad);

formulario.onsubmit = function (e) {
    /* Después del primer if, deberia de ser else if*/
    if (nombre.length === 0) {
        n.classList.add("error")
    }
    else if(edad < 18 || edad > 120) {
        e.classList.add("error")
    }
    else if(nombre.length > 3
        && (edad > 18
            && edad < 120)) {
        agregarInvitado(nombre, edad, nacionalidad)
    }
}
e.prevent();
/* Falta de ; */
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

    if (nacionalidad === "ar") {
        nacionalidad = "Argentina"
    }
    else if (nacionalidad === "mx") {
        nacionalidad = "Mexicana"
    }
    else if (nacionalidad === "vnzl") {
        nacionalidad = "Venezolana"
    }
    else if (nacionalidad === "per") {
        nacionalidad = "Peruana"
    }

    var lista = document.getElementById("lista-de-invitados");
/* Como que added? */;
    var elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista");
    lista.appendChild(elementoLista);

    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = "Nombre: ";
    inputNombre.value = nombre;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);

    function crearElemento(descripcion, valor) {;
        var spanNombre = document.createElement("span");
        var inputNombre = document.createElement("input");
        var espacio = document.createElement("br");
        spanNombre.textContent = descripcion + ": "
        inputNombre.value = valor
        elementoLista.appendChild(spanNombre);
        elementoLista.appendChild(inputNombre);
        elementoLista.appendChild(espacio);
    }
/* falta de ; por doquier */
    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);


    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado"
    botonBorrar.id = "boton-borrar"
    var corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);

    botonBorrar.onclick = function () {
        // this.parentNode.style.display = 'none';
        botonBorrar.parentNode.remove()
    }
}

/* Sigue sin cuncionar el coso este */