/* =========================================================================
   1. MENÚ HAMBURGUESA (Responsive)
   ========================================================================= */
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace (en mobile)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('active');
    });
  });
}

/* =========================================================================
   2. TEMA CLARO / OSCURO
   ========================================================================= */
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');
const STORAGE_KEY = 'portfolio-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeIcon) themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
  if (themeToggle) {
    themeToggle.setAttribute(
      'aria-label',
      theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'
    );
  }
  try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
}

let savedTheme = null;
try { savedTheme = localStorage.getItem(STORAGE_KEY); } catch (_) {}

const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

/* =========================================================================
   3. AÑO DINÁMICO EN EL FOOTER
   ========================================================================= */
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================================================================
   4. LIGHTBOX (Por si después lo usás para los proyectos)
   ========================================================================= */
const lightbox = document.querySelector('#imageLightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const closeLightbox = document.querySelector('#closeLightbox');

if (lightbox && closeLightbox) {
  document.querySelectorAll('.certificate-open img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeCertificate() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeLightbox.addEventListener('click', closeCertificate);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeCertificate(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCertificate(); });
}