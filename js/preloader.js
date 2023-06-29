//----------------прелоадер----------------
//скрытие прелоадера
const preloader = document.getElementById('preloader');
const body = document.getElementById('body');

window.onload = function() {
    body.classList.remove('lock');
    preloader.classList.add('preloader-none');
    preloader.classList.remove('preloader-visible');
}