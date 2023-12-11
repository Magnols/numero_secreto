document.addEventListener('DOMContentLoaded', function() {
    const modoCheckbox = document.getElementById('chk');
    const modoIcone = document.querySelector('.module i');
    const body = document.body;

    modoCheckbox.addEventListener('change', function() {
        if (modoCheckbox.checked) {
            modoIcone.className = 'fas fa-moon';
            body.setAttribute('fundo', 'modo-escuro');
        } else {
            modoIcone.className = 'fas fa-sun';
            body.setAttribute('fundo', 'modo-claro');
        }
    });
});