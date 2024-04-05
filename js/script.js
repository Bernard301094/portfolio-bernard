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

















// Función para mostrar/ocultar el menú desplegable
function toggleDropdown() {
    var dropdown = document.getElementById('language-menu');
    dropdown.classList.toggle('show');
}

// Función para cerrar el menú desplegable si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName('dropdown-menu');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Activar el primer elemento del menú al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var firstItem = document.getElementById('language-menu').querySelector('li');
    firstItem.click(); // Simula un clic en el primer elemento
});

// Función para seleccionar una opción del menú
function selectLanguage(event) {
    var target = event.target;
    if (target.tagName === 'LI') {
        var selectedLanguage = target.textContent.trim();
        var dropdownToggle = document.querySelector('.dropdown-toggle');
        dropdownToggle.innerHTML = target.innerHTML;
        dropdownToggle.classList.add('active'); // Agregamos la clase 'active' al enlace
        toggleDropdown(); // Oculta el menú después de seleccionar una opción
    }
}