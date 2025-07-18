// Navegación dinámica: scroll suave y resaltado de enlace activo
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Resaltar el enlace activo
      document.querySelectorAll('nav a[href^="#"]').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Resalta el enlace de la sección visible al hacer scroll
window.addEventListener('scroll', function() {
  const sections = Array.from(document.querySelectorAll('main [id]'));
  const scrollPos = window.scrollY + 100;
  let currentSection = sections[0];
  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) currentSection = section;
  });
  document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href').slice(1) === currentSection.id) {
      a.classList.add('active');
    }
  });
});

// Mensaje de agradecimiento al comprar
document.getElementById('btn-comprar').addEventListener('click', function() {
  setTimeout(() => {
    alert('¡Gracias por tu interés! Serás redirigido a la página de compra.');
  }, 600);
});

// Animación de bienvenida en consola
console.log("%c🚀 Bienvenido/a a JavaScript Mastery 2025!", "color:#0a6cff;font-size:18px;font-weight:bold;");