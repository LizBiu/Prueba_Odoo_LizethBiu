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


  function toggleDropdownm(element) {
    var dropdownContent = element.querySelector('.dropdown-contentm');
    
    // Verifica si dropdownContent existe antes de realizar operaciones
    if (dropdownContent) {
      dropdownContent.classList.toggle('show');
    }
  }  


  function toggleNav() {
    var menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('show-menu');
  }
  