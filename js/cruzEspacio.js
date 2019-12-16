// Menú desplegable
var hamburguesa = document.getElementById('hamburguesa');
var menuDesplegable = document.getElementById('menuDesplegable');
hamburguesa.addEventListener('click', () => {
    menuDesplegable.classList.toggle('toggle');
});