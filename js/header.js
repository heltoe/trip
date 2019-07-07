let burger = document.getElementById('burger');

function isActiveMenu() {
  const menu = document.querySelector('.mobile-wrapper__links');
  const links = document.querySelectorAll('.mobile-links');
  links.forEach(item => {
    item.classList.toggle('active-menu-links');
  })
  menu.classList.toggle('active-menu');
}

burger.addEventListener('click', isActiveMenu)