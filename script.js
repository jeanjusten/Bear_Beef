// Pop-up 3seconds after page Load
document.addEventListener("DOMContentLoaded", function() {
    const modalPopup = new bootstrap.Modal("#pop-up-id");
    setTimeout(function() {
        modalPopup.show();
    }, 3000) // 3 seconds after the page is loaded
})

// Closes the dropdown menu after clicking.
document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Delay for closing navbar dropdown menu
            setTimeout(function() {
                if (navbarCollapse.classList.contains("show")) {
                    new bootstrap.Collapse(navbarCollapse).toggle();
                }
            }, 1000); // 1 second
        });
    });
});