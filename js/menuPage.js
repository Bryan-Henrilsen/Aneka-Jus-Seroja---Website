function showSidebar() {
    document.querySelector('.side-bar').style.display = "flex";
}

function hideSidebar() {
    document.querySelector('.side-bar').style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var dropDownButton = document.querySelectorAll('.side-bar .dropdown .dropbtn');
    dropDownButton.forEach(function(button) {
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

function scrollToMultipleIds(id1, id2) {
    document.getElementById(id1).scrollIntoView({behavior: 'smooth'});
    document.getElementById(id2).scrollIntoView({behavior: 'smooth'});
}