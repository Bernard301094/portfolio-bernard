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
