
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const menuIconClosed = mobileMenuBtn.querySelector('.block');
    const menuIconOpen = mobileMenuBtn.querySelector('.hidden');
    const mobileMenu = document.getElementById('mobile-menu');
  
    // Agregar evento de clic al botón del menú móvil
    mobileMenuBtn.addEventListener('click', function() {
  
        // Alternar la visibilidad de los íconos del botón del menú móvil
        menuIconClosed.classList.toggle('hidden');
        menuIconOpen.classList.toggle('hidden');
  
        mobileMenu.classList.toggle('hidden');
  
  
    });
  });
  