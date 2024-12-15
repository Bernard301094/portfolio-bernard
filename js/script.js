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