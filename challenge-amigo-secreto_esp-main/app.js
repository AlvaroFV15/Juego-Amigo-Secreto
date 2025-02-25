// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Desarrollado por Alvaro Daniel Figueroa Valencia

let ListaAgregarAmigo = [];


function asignarTextoElemento(elemento,texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;   
    return;
}
function limpiarBarra() {
    document.querySelector('#amigo').value ='';
}

function agregarAmigo(){
    let nombreAmigo= (document.getElementById('amigo').value);

    //Convertir el nombre a minúsculas para comparar
    //se usa la funcion toLowerCase para convertir el string a minuscula 
  let nombreAmigoMinuscula = nombreAmigo.toLowerCase();

  //Validar que el nombre solo contenga letras y espacios
  let regex = /^[a-zA-Z\s]+$/; // Expresión regular para letras y espacios (Investigacion)
  if (!regex.test(nombreAmigo)) {
    asignarTextoElemento("h3", "Nombre no válido. Solo se permiten letras y espacios.");
    limpiarBarra();
    return; // Salir de la función si el nombre no es válido
  }

  if (nombreAmigo !== "") {
    // Verifica si el nombre ya existe en la lista (ignorando mayúsculas)
    if (!ListaAgregarAmigo.includes(nombreAmigoMinuscula)) {
      // Agrega el nombre a la lista (en minúsculas para mantener la consistencia)
      ListaAgregarAmigo.push(nombreAmigoMinuscula);
    } else {
      asignarTextoElemento("h3", "Este amigo ya está en la lista.");
    }
  } else {
    asignarTextoElemento("h3", "Por favor, ingresa un nombre.");
  }

  limpiarBarra();
  console.log(ListaAgregarAmigo);
}

function seleccionarElementoAleatorio(ListaAgregarAmigo) {
    //Verificar que la lista no esté vacía
    if (ListaAgregarAmigo.length === 0) {
      return undefined; // O null, o mostrar un mensaje de error, según tu preferencia
    }
  
    //Generar un índice aleatorio dentro del rango de la lista
    let indiceAleatorio = Math.floor(Math.random() * ListaAgregarAmigo.length);
  
    //Devolver el elemento que se encuentra en ese índice
    return ListaAgregarAmigo[indiceAleatorio];
  }

function sortearAmigo(){
    let amigoAleatorio = seleccionarElementoAleatorio(ListaAgregarAmigo); // Pasar la lista para el unico valor amigo que nos interesa

    if (amigoAleatorio) {
      asignarTextoElemento("h3", `El amigo secreto es: ${amigoAleatorio}`);
    } else {
      asignarTextoElemento("h3", "No hay amigos en la lista para sortear.");
    }
  }