🧸✨ Kenini Artesanías — Tienda de Peluches Tejidos

Bienvenido/a a Kenini Artesanías, una tienda online diseñada con HTML, CSS y JavaScript que permite explorar, filtrar, buscar y comprar adorables peluches tejidos a mano.
Este proyecto implementa un catálogo dinámico, sistema de favoritos, carrito de compras y modales interactivos.

📌 Características principales
🛍️ Catálogo dinámico

Lista de productos generada desde JavaScript.

Filtrado por categorías (animales, fantasía, colección, flores).

Buscador en tiempo real.

Ordenamiento por precio ascendente, descendente o popularidad.

❤️ Favoritos

Posibilidad de agregar o quitar productos de una lista de favoritos.

Contador dinámico actualizado automáticamente.

Modal para visualizar elementos guardados.

🛒 Carrito de compras

Añadir productos con cantidad acumulativa.

Vista del carrito en un modal.

Cálculo automático de subtotal.

Modal final de compra con resumen de productos.

💻 Interfaz moderna

Diseño responsive y amigable.

Estilo pastel y agradable basado en CSS puro.

Animaciones suaves, sombras y botones estilizados.

🔐 Inicio de sesión (simulado)

Modal de login para futura integración con backend.🚀 Tecnologías utilizadas

HTML5

CSS3

JavaScript Vanilla

Google Fonts (Poppins)

🧠 Funcionalidades técnicas importantes
✔ Renderizado del catálogo

Los productos se generan dinámicamente mediante renderCatalog(), aplicando:

filtros por categoría

búsqueda por texto

ordenamiento por precio✔ Manejo del carrito

Se almacena en el estado global:

cart: []


Cada producto conserva su cantidad (qty) y el subtotal se calcula automáticamente.

✔ Sistema de favoritos

Los IDs de productos se guardan en:

favorites: []


Con un botón de corazón que refleja el estado actual.

✔ Modales reutilizables

Apertura y cierre mediante atributos:

<button data-close="modalId">✕</button>


y una función showModal(id).

📥 Instalación y uso

Descarga o utiliza el enlace a la tienda:

enlace: http://127.0.0.1:5500/proyectop3k/index.html


Abre index.html en tu navegador:

Doble clic

O usar Live Server en VSCode

¡Listo! La tienda está completamente funcional en frontend.

🛠️ Mejoras futuras

Integración con backend (Firebase o API propia).

Registro y autenticación reales.

Persistencia de carrito y favoritos con localStorage.

Sistema de pago (MercadoPago / Stripe).

Panel de administración para productos.

🤝 Contribuciones

Las contribuciones son bienvenidas. Puedes abrir un pull request o crear un issue para sugerencias y mejoras.

📜 Licencia

Este proyecto puede ser usado con fines educativos o personales.
