// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Desarrollado por Alvaro Daniel Figueroa Valencia
// En esta version se implemento con funcion de tiempos y intervalos.(investigacion)
// Ultima actualizacion se añade un boton de reiniciar juego que limpia los elementos de la lista (investigacion)
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

  if (nombreAmigo) {
    asignarTextoElemento("h3", "Nombre registrado.");
    setTimeout(function() {
      asignarTextoElemento("h3", "-------");
    }, 1000); // 1000 milisegundos = 1 segundos
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
    //Usamos la splice para poder borrar los elemento de la lista
  function reiniciarJuego(){
    limpiarBarra();
    ListaAgregarAmigo.splice(0, ListaAgregarAmigo.length);
    setTimeout(function() {
      asignarTextoElemento("h3", "-------");
    }, 1000); // 1000 milisegundos = 1 segundos

  // Actualiza el texto del elemento h3 para indicar que la lista está vacía
  asignarTextoElemento("h3", "La lista de amigos está vacía.");
  }

  function sortearAmigo() {
    let numRepeticiones = 10; // Número de veces que se mostrarán los nombres antes de detenerse
    let intervalo = 100; // Intervalo de tiempo (en milisegundos) entre cada nombre
  
    let contador = 0; // Contador para llevar el registro de las repeticiones
    let intervaloId; // Variable para guardar el ID del intervalo
  
    // Función para mostrar un nombre aleatorio
    function mostrarNombreAleatorio() {
      let amigoAleatorio = seleccionarElementoAleatorio(ListaAgregarAmigo);
  
      if (amigoAleatorio) {
        asignarTextoElemento("h3", `Sorteando... ${amigoAleatorio}`);
      } else {
        asignarTextoElemento("h3", "No hay amigos en la lista para sortear.");
        clearInterval(intervaloId); // Detener el intervalo si no hay amigos
        return;
      }
  
      contador++;
  
      // Detener el intervalo después de cierto número de repeticiones
      if (contador >= numRepeticiones) {
        clearInterval(intervaloId); // Detener el intervalo
  
        // Mostrar el amigo secreto final después de un pequeño retraso (investigacion)
        setTimeout(function() {
          asignarTextoElemento("h3", `¡El amigo secreto es: ${amigoAleatorio}!`);
        }, 500); // Retraso de 500 milisegundos (0.5 segundos)
      }
    }
  
    // Iniciar el intervalo para mostrar los nombres aleatorios
    intervaloId = setInterval(mostrarNombreAleatorio, intervalo);
  }

  // La siguiente funcion es igual al anterior pero fue un intento ante de encontrar el setintervalo, pues este
  //usa la funcion repetitiva for , puede probarlo pero tiene falla de sicronizacion por eso se prefirio el setintervalo
    /*function sortearAmigo() {
      let numRepeticiones = 10; // Número de veces que se mostrarán los nombres
      let intervalo = 100; // Intervalo de tiempo (en milisegundos) entre cada nombre
    
      // Función para mostrar un nombre aleatorio
      function mostrarNombreAleatorio() {
        let amigoAleatorio = seleccionarElementoAleatorio(ListaAgregarAmigo);
    
        if (amigoAleatorio) {
          asignarTextoElemento("h3", `Sorteando... ${amigoAleatorio}`);
        } else {
          asignarTextoElemento("h3", "No hay amigos en la lista para sortear.");
          return;
        }
      }
    
      // Mostrar los nombres de forma repetitiva
      for (let i = 0; i < numRepeticiones; i++) {
        mostrarNombreAleatorio();
        new Promise(resolve => setTimeout(resolve, intervalo));
      }
    
      // Mostrar el amigo secreto final después de un pequeño retraso
      setTimeout(function() {
        let amigoAleatorio = seleccionarElementoAleatorio(ListaAgregarAmigo);
        asignarTextoElemento("h3", `¡El amigo secreto es: ${amigoAleatorio}!`);
      }, 500); // Retraso de 500 milisegundos (0.5 segundos)
    }*/
  