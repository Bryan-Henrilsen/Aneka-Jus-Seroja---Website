document.addEventListener("DOMContentLoaded", function() {
    function showSidebar() {
        document.querySelector('.side-bar').style.display = 'flex';
    }

    function hideSidebar() {
        document.querySelector('.side-bar').style.display = 'none';
    }

    function sendToWhatsApp() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var date = document.getElementById('date').value;
        var message = document.getElementById('message').value;

        var whatsappMessage = `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nTanggal: ${date}\nPesan: ${message}`;
        var whatsappURL = `https://api.whatsapp.com/send?phone=6289694034653&text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, '_blank');
    }

    function validateForm() {
        var phoneInput = document.getElementById('phone');
        var emailInput = document.getElementById('email');
        var phoneValue = phoneInput.value.trim();
        var emailValue = emailInput.value.trim();
        var phonePattern = /^[0-9+]*$/;

        if (phoneValue === '' && emailValue === '') {
            alert("Please fill in either Phone Number or Email Address.");
            return false;
        }

        if (phoneValue !== '' && !phonePattern.test(phoneValue)) {
            alert("Please enter a valid phone number (only numbers and '+').");
            return false;
        }

        if (phoneValue !== '' && emailValue !== '') {
            alert("Please fill in only one field: either Phone Number or Email Address.");
            return false;
        }

        return true;
    }

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            sendToWhatsApp();
        }
    });
});
