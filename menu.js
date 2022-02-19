const btnMobile = document.getElementById('btn_mobile').addEventListener('click', toggleMenu);

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
}