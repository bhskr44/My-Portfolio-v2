const menuButton = document.getElementById('destop-menu');
const mainElement = document.getElementById('section1');
const navId = document.getElementById('navId');
const menuIcon = document.getElementById('hm-menuIcon');
const logoText = document.getElementById('logo-text');
const mobileMenu = document.getElementById('mobile-menu');
// const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
  if (menuButton.style.display === 'block') {
    menuButton.style.display = 'none';
    navId.classList.remove('add-bg-to-nav');
    menuIcon.className = 'fa fa-bars fa-2x';
    menuIcon.style.color = '#6070ffc2';
    mainElement.classList.remove('add-blur');
    logoText.classList.remove('add-blur');
  } else {
    menuButton.style.display = 'block';
    menuIcon.className = 'fa fa-close fa-2x';
    menuIcon.style.color = 'white';
    navId.classList.add('add-bg-to-nav');
    mainElement.classList.add('add-blur');
    logoText.classList.add('add-blur');
  }
}
/* eslint-disable */
function navigate(loc) {
  menuButton.style.display = 'none';
  navId.classList.remove('add-bg-to-nav');
  mainElement.classList.remove('add-blur');
  logoText.classList.remove('add-blur');
  menuIcon.className = 'fa fa-bars fa-2x';
  menuIcon.style.color = '#6070ffc2';
  window.href = loc;
}
/* eslint-enable */
mobileMenu.addEventListener('click', toggleMenu());
