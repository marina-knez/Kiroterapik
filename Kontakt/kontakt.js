document.querySelector('.pošalji').addEventListener('click', function(e) {
    const text = document.querySelector('.text').value;
    const email = document.querySelector('.email').value;
    const poruka = document.querySelector('.poruka').value;

    if(text === '' || email === '' || poruka === '') {
        showMessage('Molimo Vas, ispunite polja označena *.');
    } else {
        showMessage('Vaša je poruka poslana! Odgovorit ćemo Vam u najkraćem mogućem roku.');
    }
    clearFields();
    e.preventDefault();
});

function showMessage (msg) {
        const div = document.createElement('div');
        div.className = 'msg';
        div.appendChild(document.createTextNode(msg));

        const main = document.querySelector('.main');
        const address = document.querySelector('.address');

        main.insertBefore(div, address);

        setTimeout(function() {
            document.querySelector('.msg').remove();
        }, 3000);

    };

function clearFields() {
    document.querySelector('.text').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.naslov').value = '';
    document.querySelector('.poruka').value = '';
}