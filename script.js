function openNav() {
  document.getElementById('hamburger-menu').style.display = 'block';
  const div = document.querySelector('#top');
  div.classList.add('blur');
}
function closeNav() {
  document.getElementById('hamburger-menu').style.display = 'none';
  const div = document.querySelector('#top');
  div.classList.remove('blur');
}

document.querySelector(' #hamburger-menu').addEventListener('click', openNav);

document.querySelector('#closebtn').addEventListener('click', closeNav);

