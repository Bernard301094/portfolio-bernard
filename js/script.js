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
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
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



// Funcion Enviar Correo 

function enviarCorreo() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Configurar los detalles del correo electrónico
    var destinatario = 'bernard30101994@gmail.com'; // Reemplaza con tu dirección de correo electrónico
    var cuerpoCorreo = 'Nombre: ' + nombre + '\nTeléfono: ' + telefono + '\nCorreo electrónico: ' + correo + '\nAsunto: ' + asunto + '\nMensaje: ' + mensaje;

    // Enviar el correo electrónico usando SMTPJS
    Email.send({
      SecureToken: 'tu_token_seguro', // Reemplaza con tu token seguro de SMTPJS
      To: destinatario,
      From: correo,
      Subject: asunto,
      Body: cuerpoCorreo
    }).then(function () {
      alert('¡El correo electrónico se envió correctamente!');
    }).catch(function (error) {
      alert('Hubo un error al enviar el correo electrónico: ' + error);
    });
  }