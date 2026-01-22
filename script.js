const manuIcon = document.querySelector('#menu-icon');
const navLinks= document.querySelector('.nav-links');

menuLcon.onclick = () => {
    navLinks.classList.toggle('active');
}