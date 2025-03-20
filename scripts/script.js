/**
 * Script principal del portafolio
 * Contiene todas las funcionalidades interactivas
 */

document.addEventListener('DOMContentLoaded', function() {
  // ==========================================
  // Menú de navegación
  // ==========================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle del menú móvil
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // ==========================================
  // Smooth scrolling
  // ==========================================
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

  // ==========================================
  // Header con efecto de scroll
  // ==========================================
  const header = document.querySelector('header');
  
  function updateHeaderStyle() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  // Aplicar al cargar y cuando se hace scroll
  updateHeaderStyle();
  window.addEventListener('scroll', updateHeaderStyle);

  // ==========================================
  // Filtro de portafolio
  // ==========================================
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
          
          // Pequeña demora antes de mostrar para mejor animación
          setTimeout(() => {
            item.classList.add('show');
          }, 50);
        } else {
          item.classList.remove('show');
          
          // Ocultar después de la transición
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ==========================================
  // Animación de elementos al hacer scroll
  // ==========================================
  const animateOnScroll = () => {
    // Seleccionar todos los elementos animables
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item, .resume-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate');
      }
    });
  };
  
  // Inicializar animaciones
  setTimeout(animateOnScroll, 300); // Pequeña demora inicial para mejor rendimiento
  window.addEventListener('scroll', animateOnScroll);

  // ==========================================
  // Inicialización de Particles.js
  // ==========================================
  if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { 
          value: 80,
          density: { enable: true, value_area: 800 }
        },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { 
          value: 0.5,
          random: false
        },
        size: { 
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#06b6d4",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { 
            enable: true,
            mode: "repulse"
          },
          onclick: { 
            enable: true,
            mode: "push"
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }

  // ==========================================
  // Selector de idiomas
  // ==========================================
  const langButtons = document.querySelectorAll('.language-option');
  
  if (langButtons.length > 0) {
    langButtons.forEach(button => {
      button.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        
        // Remover clase activa de todos los botones
        langButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase activa al botón seleccionado
        this.classList.add('active');
        
        // Cambiar el idioma
        changeLanguage(lang);
        
        // Guardar preferencia en localStorage
        localStorage.setItem('language', lang);
      });
    });
    
    // Cargar el idioma guardado o usar el predeterminado
    const savedLanguage = localStorage.getItem('language') || 'pt';
    
    // Activar el botón correspondiente
    const activeButton = document.querySelector(`.language-option[data-lang="${savedLanguage}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
      
      // Aplicar el idioma
      changeLanguage(savedLanguage);
    }
  }

  // ==========================================
  // Registro de Service Worker (PWA)
  // ==========================================
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.log('Error al registrar Service Worker:', error);
        });
    });
  }

  // ==========================================
  // Validación de formulario de contacto
  // ==========================================
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Obtener los campos del formulario
      const name = this.querySelector('[data-translate-key="contact_form_name"]');
      const email = this.querySelector('[data-translate-key="contact_form_email"]');
      const message = this.querySelector('[data-translate-key="contact_form_message"]');
      
      // Validación básica (puede ser mejorada)
      let isValid = true;
      
      if (!name.value.trim()) {
        isValid = false;
        showError(name, 'El nombre es requerido');
      } else {
        removeError(name);
      }
      
      if (!email.value.trim()) {
        isValid = false;
        showError(email, 'El email es requerido');
      } else if (!isValidEmail(email.value)) {
        isValid = false;
        showError(email, 'Por favor ingresa un email válido');
      } else {
        removeError(email);
      }
      
      if (!message.value.trim()) {
        isValid = false;
        showError(message, 'El mensaje es requerido');
      } else {
        removeError(message);
      }
      
      // Si todo es válido, enviar el formulario (simulado)
      if (isValid) {
        // Aquí normalmente se enviaría el formulario a un backend
        alert('¡Mensaje enviado con éxito!');
        this.reset();
      }
    });
  }
  
  // Función auxiliar para validar email
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Funciones para mostrar y ocultar errores
  function showError(input, message) {
    // Verificar si ya existe un mensaje de error
    let errorElement = input.nextElementSibling;
    
    if (!errorElement || !errorElement.classList.contains('error-message')) {
      errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
      input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
    
    errorElement.textContent = message;
    input.classList.add('input-error');
  }
  
  function removeError(input) {
    const errorElement = input.nextElementSibling;
    
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.remove();
    }
    
    input.classList.remove('input-error');
  }
});

/**
 * Cambia el idioma de la interfaz
 * @param {string} lang - Código de idioma (es, en, pt)
 */
function changeLanguage(lang) {
  if (!translations || !translations[lang]) {
    console.error('Traducciones no disponibles para:', lang);
    return;
  }
  
  const elements = document.querySelectorAll('[data-translate-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate-key');
    
    if (translations[lang][key]) {
      // Manejo especial para elementos de formulario
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}
