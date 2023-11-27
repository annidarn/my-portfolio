AOS.init();

const button = document.getElementById('mode');
const body = document.getElementById('body');

button.onclick = function () {
    body.classList.toggle('dark')
}
