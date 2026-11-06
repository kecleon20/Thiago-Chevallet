# 🛡️ Portfolio Web Personal - Thiago Chevallet

## 📐 Prototipo y Wireframe en Figma

Antes de escribir la primera línea de código, diseñé la arquitectura de información y los wireframes en Figma para definir la jerarquía visual y el flujo de navegación.

[![Ver Wireframe en Figma](https://img.shields.io/badge/Figma-Ver%20Wireframe-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/make/2NWlTb30rrRjLGbq4FXPtK/Wireframe-Portfolio-Thiago-Chevallet)

> *Hacé clic en el botón para ver el prototipo interactivo generado con Figma Make.*

![Vista previa del Wireframe](assets/wireframe.png)

Este es mi portafolio web personal, desarrollado como Trabajo Final para la cátedra de **Diseño UX/UI** (Licenciatura en Sistemas - UADER FCyT).

El objetivo del sitio es presentar mi perfil profesional como **Data Analyst Junior**, mostrando mis habilidades técnicas, proyectos destacados y mi experiencia en la automatización de datos para PyMEs.

## 🚀 Demo
Podés ver el sitio en vivo acá: 
👉 **[https://kecleon20.github.io/Thiago-Chevallet/](https://kecleon20.github.io/Thiago-Chevallet/)**

## 🛠️ Tecnologías utilizadas
*   **HTML5** semántico.
*   **CSS3** (Variables, Flexbox, CSS Grid, animaciones con `@keyframes`).
*   **JavaScript Vanilla** (Módulos ES6, manipulación del DOM, IntersectionObserver).
*   **Git y GitHub Pages** (para el despliegue).
*   **Formspree** (para el formulario de contacto funcional).

## 📂 Estructura del proyecto
```text
/
├── index.html          # Página principal con las 9 secciones
├── caso-cubri.html     # Página interna del caso de estudio (Proyecto 1)
├── styles.css          # Hoja de estilos principal y sistema de diseño
├── script.js           # Lógica de menú, tema oscuro/claro y animaciones
├── robots.txt          # Configuración para buscadores
├── sitemap.xml         # Mapa del sitio para SEO
├── 404.html            # Página de error personalizada
├── 404.css             # Estilos específicos de la página 404
└── assets/             # Carpeta con imágenes, CV y certificados

🎨 Proceso de Diseño (UX/UI)
Investigación y Referencias: Se analizaron portfolios de la industria para definir un estilo visual moderno, oscuro y minimalista.

Sistema de Diseño: Se definieron tokens de color (variables CSS), tipografías (Inter y Playfair Display) y espaciados.

Wireframes y Prototipo: Se diseñaron los wireframes en Figma antes de pasar al código.

Maquetado: Se implementó un diseño 100% responsive (Mobile-first) utilizando CSS Grid y Flexbox.

Accesibilidad: Se aplicaron prácticas de accesibilidad (WCAG), como el "Skip to content", atributos aria-label, alto contraste y navegación por teclado.

📸 Capturas de pantalla

Inicio (Desktop)	Proyectos	Experiencia
https://assets/captura-inicio.jpg	https://assets/captura-proyectos.jpg	https://assets/captura-experiencia.jpg

🚦 Cómo correr el proyecto localmente
Debido a que el proyecto utiliza un formulario conectado a Formspree y carga de fuentes externas, se recomienda usar un servidor local para evitar problemas de CORS.

Opción 1: Live Server (VSCode)

Instalá la extensión "Live Server".

Hacé clic derecho en index.html y seleccioná "Open with Live Server".
Opción 2: Usando Node.js

bash:
npx serve