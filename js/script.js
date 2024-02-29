let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función descargar curriculo en idioma dependiendo del idioma que habla la persona
function descargarCV() {
  var idioma = navigator.language.toLowerCase();
  var nombreArchivo;

  if (idioma.startsWith('es')) {
      nombreArchivo = 'CURRICULO-ESP.pdf';
  } else if (idioma.startsWith('pt')) {
      nombreArchivo = 'CURRICULO-PT-Br.pdf';
  } else {
      // En caso de no ser español ni portugués, usar un archivo genérico
      nombreArchivo = 'CURRICULUM.pdf';
  }

  var link = document.createElement('a');
  link.href = 'pdf/' + nombreArchivo;
  link.download = nombreArchivo;
  link.click();
}

// Funcion Enviar Correo 

// Función cambiar idioma portfolio

function traducirSitioWeb(idiomaOrigen, idiomaDestino) {
  // Obtener el contenido del sitio web
  const contenido = document.querySelector("body").innerHTML;

  // Obtener el contenido del elemento h1
  const titulo = document.getElementsByTagName("h1").innerHTML;

  // Traducir el contenido del sitio web, excluyendo el contenido de h1
  const contenidoTraducido = traducir(contenido, idiomaOrigen, idiomaDestino);

  // Actualizar el contenido del sitio web sin afectar el contenido de h1
  document.querySelector("body").innerHTML = contenidoTraducido;

  // Restaurar el contenido del elemento h1
  document.getElementsByTagName("h1").innerHTML = titulo;
}

// Función para traducir el texto
function traducir(texto, idiomaOrigen, idiomaDestino) {
  // Obtener la API de traducción
  const translate = new google.translate.Translate();

  // Traducir el texto
  return translate.translate(texto, {
    from: idiomaOrigen,
    to: idiomaDestino,
  });
}
