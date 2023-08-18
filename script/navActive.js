document.addEventListener("DOMContentLoaded", function () {
    const currentURL = window.location.href;

    const url = new URL(currentURL);

    const navLinks = document.querySelectorAll(".sidebar__nav-link");

    navLinks.forEach((link) => {
        if (url.pathname == link.getAttribute("href")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
