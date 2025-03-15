// Script para la traducción del sitio

document.addEventListener('DOMContentLoaded', function() {
  // Detectar el idioma del navegador
  function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    const shortLang = language.split('-')[0]; // Obtener solo el código de idioma (ej: 'es' de 'es-ES')
    
    // Comprobar si el idioma está soportado, si no, usar español como predeterminado
    if (['es', 'en', 'pt'].includes(shortLang)) {
      return shortLang;
    }
    return 'es'; // Idioma predeterminado
  }

  // Función para traducir la página
  function translatePage(language) {
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('preferred-language', language);
    
    // Crear selector de idioma si no existe
    createLanguageSelector(language);
    
    // Aplicar traducciones
    applyTranslations(language);
  }

  // Función para crear el selector de idioma
  function createLanguageSelector(currentLang) {
    // Evitar duplicar el selector
    if (document.querySelector('.language-selector')) {
      document.querySelector(`.language-option[data-lang="${currentLang}"]`).classList.add('active');
      return;
    }
    
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    
    const languages = [
      { code: 'es', name: 'ES' },
      { code: 'en', name: 'EN' },
      { code: 'pt', name: 'PT' }
    ];
    
    languages.forEach(lang => {
      const option = document.createElement('div');
      option.className = `language-option ${lang.code === currentLang ? 'active' : ''}`;
      option.setAttribute('data-lang', lang.code);
      option.textContent = lang.name;
      
      option.addEventListener('click', function() {
        // Eliminar clase active de todas las opciones
        document.querySelectorAll('.language-option').forEach(el => el.classList.remove('active'));
        // Añadir clase active a la opción seleccionada
        this.classList.add('active');
        // Traducir la página
        translatePage(lang.code);
      });
      
      selector.appendChild(option);
    });
    
    // Añadir el selector al DOM (después de .logo en el header)
    const headerContent = document.querySelector('.header-content');
    headerContent.insertBefore(selector, headerContent.querySelector('.logo').nextSibling);
  }

  // Función para aplicar las traducciones
  function applyTranslations(language) {
    // Elementos de navegación
    document.querySelectorAll('nav a').forEach(navItem => {
      const key = navItem.getAttribute('data-translate-key');
      if (key && translations[language][key]) {
        navItem.textContent = translations[language][key];
      }
    });
    
    // Elementos con atributo data-translate-key
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[language][key]) {
        // Si el elemento tiene un placeholder, traducir el placeholder
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translations[language][key]);
        } else {
          element.textContent = translations[language][key];
        }
      }
    });
  }

  // Iniciar el proceso
  // Comprobar si hay un idioma guardado en localStorage
  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage) {
    translatePage(savedLanguage);
  } else {
    // Si no hay un idioma guardado, usar el idioma del navegador
    translatePage(getBrowserLanguage());
  }
});
