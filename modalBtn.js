const openModalButtons = document.querySelectorAll('.open-modal-btn');

openModalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.getElementById('modal-contact-form').classList.add('open')
    });
});

document.getElementById('close-modal-btn').addEventListener('click', function () {
    document.getElementById('modal-contact-form').classList.remove('open')
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('modal-contact-form').classList.remove('open')
    }
});

document.querySelector('#modal-contact-form .modal-box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById('modal-contact-form').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});