const menuButton = document.getElementById('destop-menu');
const mainElement = document.getElementById('section1');
const navId = document.getElementById('navId');
const menuIcon = document.getElementById('hm-menuIcon');
const logoText = document.getElementById('logo-text');
const mobileNavigation = document.querySelectorAll('.clicked-item');

mobileNavigation.forEach((item) => {
  item.addEventListener('click', () => {
    menuButton.style.display = 'none';
    navId.classList.remove('add-bg-to-nav');
    mainElement.classList.remove('add-blur');
    logoText.classList.remove('add-blur');
    menuIcon.src = 'image/close.svg';
  });
});

menuIcon.addEventListener('click', () => {
  if (menuButton.style.display === 'block') {
    menuButton.style.display = 'none';
    navId.classList.remove('add-bg-to-nav');
    menuIcon.src = 'image/hamburger.svg';
    mainElement.classList.remove('add-blur');
    logoText.classList.remove('add-blur');
  } else {
    menuButton.style.display = 'block';
    menuIcon.src = 'image/close.svg';
    navId.classList.add('add-bg-to-nav');
    mainElement.classList.add('add-blur');
    logoText.classList.add('add-blur');
  }
});
