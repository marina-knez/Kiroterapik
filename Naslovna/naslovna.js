const button = document.querySelector('.btn-main');
const btn = document.querySelector('.btn-other');

button.addEventListener('click', showMenu);

function showMenu() {
    if(btn.style.display = 'none') {
        button.style.display = 'none';
        btn.style.display = 'block'        
    } else {
        btn.style.display = 'none';
    };
}