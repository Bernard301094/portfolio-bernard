// Evento de instalación del Service Worker
self.addEventListener('install', (event) => {
    // Espera hasta que se completen las operaciones asincrónicas
    event.waitUntil(
        // Abre el caché con la versión 'v1'
        caches.open('v1').then((cache) => {
            // Añade todos los recursos críticos al caché
            return cache.addAll([
                '/',
                '/index.html',
                '/style/styles.css',
                '/scripts/script.js',
                // Añade otros recursos críticos
            ]);
        })
    );
});

// Evento de búsqueda (fetch) del Service Worker
self.addEventListener('fetch', (event) => {
    // Responde con recursos del caché o realiza una solicitud de red
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Devuelve la respuesta del caché si existe, de lo contrario, realiza una solicitud de red
            return response || fetch(event.request);
        })
    );
});
