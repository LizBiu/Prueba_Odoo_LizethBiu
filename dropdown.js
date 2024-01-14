function toggleDropdown(element) {
    var dropdownContent = element.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
  }
  
  window.onclick = function (event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    var isDropdownClick = false;

    document.querySelectorAll('.despliegue, .despliegue-2, .despliegue-3').forEach(function (despliegue) {
      if (event.target.closest('.despliegue') === despliegue) {
        isDropdownClick = true;
      }
    });

    if (!isDropdownClick) {
      dropdowns.forEach(function (openDropdown) {
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      });
    }
  };


  document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.faqs');
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.querySelector('.dropdown-contentm').classList.remove('show');
      }
    });
  });
  
  document.addEventListener('click', function(event) {
    // Cierra el desplegable si se hace clic fuera de él
    var dropdowns = document.querySelectorAll('.faqs');
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.querySelector('.dropdown-contentm').classList.remove('show');
      }
    });
  
    // Restaura los márgenes si no hay desplegables abiertos
    if (!Array.from(dropdowns).some(dropdown => dropdown.querySelector('.dropdown-contentm').classList.contains('show'))) {
      dropdowns.forEach(dropdown => {
        dropdown.style.marginTop = 0;
      });
    }
  });
  
  function toggleDropdownm(element) {
    var dropdownContent = element.querySelector('.dropdown-contentm');
    if (dropdownContent) {
      dropdownContent.classList.toggle('show');
  
      // Ajusta las posiciones de los elementos
      var openDropdowns = Array.from(document.querySelectorAll('.faqs.show'));
      openDropdowns.forEach((dropdown, index) => {
        dropdown.style.marginTop = index * dropdownContent.clientHeight + 'px';
      });
    }
  }
  

document.addEventListener('click', function (event) {

  if (!event.target.closest('.faqs')) {
    closeAllDropdowns();
  }
});


  function toggleNav() {
    var menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('show-menu');
  }
  