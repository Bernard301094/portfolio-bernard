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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("git");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
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
<<<<<<< HEAD
  // Obtener el contenido del sitio web
  const contenido = document.querySelector("body").innerHTML;

  // Obtener el contenido del elemento h1
  const titulo = document.getElementById("titulo").innerHTML;

  // Traducir el contenido del sitio web, excluyendo el contenido de h1
  const contenidoTraducido = traducir(contenido, idiomaOrigen, idiomaDestino);

  // Actualizar el contenido del sitio web sin afectar el contenido de h1
  document.querySelector("body").innerHTML = contenidoTraducido;

  // Restaurar el contenido del elemento h1
  document.getElementById("titulo").innerHTML = titulo;
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
=======
    // Obtener el contenido del sitio web
    const contenido = document.querySelector("body").innerHTML;
  
    // Traducir el contenido
    const traduccion = traducir(contenido, idiomaOrigen, idiomaDestino);
  
    // Actualizar el contenido del sitio web
    const body = document.querySelector("body");
    body.innerHTML = traduccion.replaceAll("<h1>", "<h1 class=\"traducido\">");
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
  
>>>>>>> 1de2936412115b562ff3c84b674aff93cdca1678
