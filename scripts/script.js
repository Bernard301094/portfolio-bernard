// JavaScript para el menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Filtro de portafolio
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Añadir clase active al botón seleccionado
      button.classList.add('active');
      
      // Obtener el valor del filtro
      const filterValue = button.getAttribute('data-filter');
      
      // Filtrar los elementos del portafolio
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Ajuste para el header fijo
        behavior: 'smooth'
      });
      
      // Cerrar el menú móvil si está abierto
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    }
  });
});

// Animación para elementos al hacer scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

/**
 * Configura el botón de alternancia entre modo claro y oscuro
 * Esta función maneja la funcionalidad del tema oscuro/claro en la página
 */
function setupDarkModeToggle() {
  // Crear y configurar el botón de alternancia de tema
  const toggle = document.createElement('div');
  toggle.className = 'theme-toggle';
  toggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.querySelector('header .header-content').appendChild(toggle);
  
  // Verificar si hay una preferencia de tema guardada en localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
      // Si el modo oscuro estaba activo, aplicar modo claro
      document.body.classList.add('light-mode');
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Configurar el evento click para cambiar entre temas
  toggle.addEventListener('click', () => {
      // Alternar la clase light-mode en el body
      document.body.classList.toggle('light-mode');
      // Verificar el modo actual
      const isLightMode = document.body.classList.contains('light-mode');
      // Actualizar el ícono según el modo actual
      toggle.innerHTML = isLightMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      // Guardar la preferencia del usuario en localStorage
      localStorage.setItem('darkMode', isLightMode);
  });
}

// Inicializar el toggle de tema cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', setupDarkModeToggle);

/**
 * Configuración de particles.js para crear el efecto de partículas animadas en el fondo
 * Se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles-js', {
    particles: {
      // Configuración básica de las partículas
      number: { 
        value: 80,  // Cantidad de partículas
        density: { enable: true, value_area: 800 } // Densidad de partículas por área
      },
      color: { value: "#6366f1" }, // Color de las partículas
      shape: { type: "circle" }, // Forma de las partículas
      opacity: { 
        value: 0.5, // Opacidad de las partículas
        random: false // Opacidad aleatoria desactivada
      },
      size: { 
        value: 3, // Tamaño de las partículas
        random: true // Tamaño aleatorio activado
      },
      
      // Configuración de las líneas entre partículas
      line_linked: {
        enable: true, // Activar líneas entre partículas
        distance: 150, // Distancia máxima para crear líneas
        color: "#06b6d4", // Color de las líneas
        opacity: 0.4, // Opacidad de las líneas
        width: 1 // Grosor de las líneas
      },
      
      // Configuración del movimiento de las partículas
      move: {
        enable: true, // Activar movimiento
        speed: 2, // Velocidad del movimiento
        direction: "none", // Dirección aleatoria
        random: false, // Movimiento aleatorio desactivado
        straight: false, // Movimiento en línea recta desactivado
        out_mode: "out", // Comportamiento al salir del canvas
        bounce: false // Rebote desactivado
      }
    },
    
    // Configuración de la interactividad
    interactivity: {
      detect_on: "canvas", // Detectar interacción en el canvas
      events: {
        onhover: { 
          enable: true, // Activar efecto al pasar el mouse
          mode: "repulse" // Modo repulsión al pasar el mouse
        },
        onclick: { 
          enable: true, // Activar efecto al hacer clic
          mode: "push" // Añadir partículas al hacer clic
        },
        resize: true // Ajustar al redimensionar la ventana
      }
    },
    retina_detect: true // Soporte para pantallas retina
  });
});

/**
 * Registro del Service Worker para funcionalidad offline
 * Este código verifica si el navegador soporta Service Workers y lo registra
 */

// Verifica si el navegador soporta Service Workers
if ('serviceWorker' in navigator) {
  // Espera a que la página se cargue completamente
  window.addEventListener('load', () => {
    // Intenta registrar el Service Worker ubicado en '/service-worker.js'
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        // Si el registro es exitoso, muestra confirmación en consola
        console.log('SW registered:', registration);
      })
      .catch(error => {
        // Si hay un error en el registro, muestra el error en consola
        console.log('SW registration failed:', error);
      });
  });
}
