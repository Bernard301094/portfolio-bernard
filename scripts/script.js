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