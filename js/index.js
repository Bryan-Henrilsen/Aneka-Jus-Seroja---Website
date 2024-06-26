function showSidebar() {
    document.querySelector('.side-bar').style.display = "flex";
}

function hideSidebar() {
    document.querySelector('.side-bar').style.display = "none";
}

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