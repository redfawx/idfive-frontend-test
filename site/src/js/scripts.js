
'use strict';

var canToggle = true;
  function toggleMenu() {

      var menuContainer = document.getElementById('menu');
      var menuPanel = document.getElementById('menucontent');


      if (canToggle) {
        menuContainer.style.display = 'block';
        menuContainer.style.opacity = '1';
        menuPanel.style.right = '0px';
        canToggle = false;
      } else {
        menuContainer.style.display = 'none';
        menuContainer.style.opacity = '0';
        menuPanel.style.right = '-100%';
        canToggle = true;
      }
  }

var menuBtn = document.getElementById('menu-btn');
var menuCloseBtn = document.getElementById('menu-close-btn');

menuBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);
