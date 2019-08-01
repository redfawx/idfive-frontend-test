/*!
 * 
 * 
 * 
 * @author 
 * @version 1.0.0
 * Copyright 2019.  licensed.
 */

'use strict';

function toggleStyle(el, styleName, value) {
  if (el.style[styleName] !== value) { 
    el.style[styleName] = value;
  } else {
    el.style[styleName] = '';
  }
}

var canToggle = true;
  function toggleMenu() {

      var menuContainer = document.getElementById('menu');
      var menuPanel = document.getElementById('menucontent');


      if (canToggle) {
        toggleStyle(menuContainer, 'display', 'block');
        toggleStyle(menuContainer, 'opacity', '1');
        toggleStyle(menuPanel, 'right', '0px');
        canToggle = false;
      } else {
        toggleStyle(menuContainer, 'display', 'none');
        toggleStyle(menuContainer, 'opacity', '0');
        toggleStyle(menuPanel, 'right', '-100%');
        canToggle = true;
      }
  }

var menuBtn = document.getElementById('menu-btn');
var menuFade = document.getElementById('menu-fade');
var menuCloseBtn = document.getElementById('menu-close-btn');

menuBtn.addEventListener('click', toggleMenu);
menuFade.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);
