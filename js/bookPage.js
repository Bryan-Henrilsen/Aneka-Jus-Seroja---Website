function showSidebar() {
    document.querySelector('.side-bar').style.display = "flex";
};

function hideSidebar() {
    document.querySelector('.side-bar').style.display = "none";
};

document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.querySelectorAll('.side-bar .dropdown .dropbtn');
    dropdownButton.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });
});

    function sendToWhatsApp() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var date = document.getElementById('date').value;
        var message = document.getElementById('message').value;

        // Mengisi pesan WhatsApp dengan informasi dari form
        var whatsappMessage = `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nTanggal: ${date}\nPesan: ${message}`;

        // URL WhatsApp dengan nomor tujuan dan pesan yang diencode
        var whatsappURL = `https://wa.me/6289694034653?text=${encodeURIComponent(whatsappMessage)}`;

        // Buka pesan WhatsApp dalam tab atau jendela baru
        window.open(whatsappURL, '_blank');
    }

    function validateForm() {
        var phoneInput = document.getElementById('phone');
        var emailInput = document.getElementById('email');
        var phoneValue = phoneInput.value.trim();
        var emailValue = emailInput.value.trim();
        var phonePattern = /^[0-9+]*$/;

        // Validasi bahwa minimal salah satu dari nomor telepon atau email diisi
        if (phoneValue === '' && emailValue === '') {
            alert("Harap isi salah satu dari Nomor Telepon atau Alamat Email.");
            return false;
        }

        // Validasi nomor telepon
        if (phoneValue !== '' && !phonePattern.test(phoneValue)) {
            alert("Harap masukkan nomor telepon yang valid (hanya angka dan '+').");
            return false;
        }

        // Jika nomor telepon diisi, tidak perlu email dan sebaliknya
        // if (phoneValue !== '' && emailValue !== '') {
        //     alert("Harap isi hanya satu dari Nomor Telepon atau Alamat Email.");
        //     return false;
        // }

        return true;
    }

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            sendToWhatsApp();
        }
    });


