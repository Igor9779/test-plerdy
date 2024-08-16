document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();

        document.getElementById('nameError').style.display = 'none';
        document.getElementById('phoneError').style.display = 'none';
        document.getElementById('name').classList.remove('error-border');
        document.getElementById('phone').classList.remove('error-border');

        let isValid = true;

        if (name === '') {
            document.getElementById('nameError').textContent = 'Please enter your name.';
            document.getElementById('nameError').style.display = 'block';
            document.getElementById('name').classList.add('error-border');
            isValid = false;
        }

        if (phone === '') {
            document.getElementById('phoneError').textContent = 'Please enter your phone number.';
            document.getElementById('phoneError').style.display = 'block';
            document.getElementById('phone').classList.add('error-border');
            isValid = false;
        }

        if (isValid) {
            console.log('Form is valid and ready for submission.');
        }
    });