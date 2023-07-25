
function openNav() {
  document.getElementById('hamburger-menu').style.display = 'block';
  const div = document.querySelector('#top');
  div.classList.add('blur');
  var userAgent = navigator.userAgent.toLowerCase();

  // Check if "mobile" or "tablet" is NOT found in the user agent string
  if (userAgent.indexOf("mobile") === -1 && userAgent.indexOf("tablet") === -1) {
      div.classList.remove('blur');}

}
function closeNav() {
  document.getElementById('hamburger-menu').style.display = 'none';
  const div = document.querySelector('#top');
  div.classList.remove('blur');
}




document.querySelector(' #hamburger-menu').addEventListener('click', openNav);

document.querySelector('#closebtn').addEventListener('click', closeNav);