let sidebar = document.querySelector(".sidebar");
let subMenu = document.querySelector(".sidebar__menu");
let subMenuToggleBtn = document.querySelector(".sidebar__menu-toggle-btn");

sidebar.addEventListener("mouseleave", () => {
    if (subMenuToggleBtn.classList.contains("active"))
        subMenu.style.display = "none";
});

sidebar.addEventListener("mouseenter", () => {
    if (subMenuToggleBtn.classList.contains("active"))
        subMenu.style.display = "block";
});

subMenuToggleBtn.addEventListener(
    "click",
    () => {
        if (subMenu.style.display === "none") {
            subMenu.style.display = "block";
            subMenuToggleBtn.classList.add("active");
        } else {
            subMenu.style.display = "none";
            subMenuToggleBtn.classList.remove("active");
        }
    },
    true
);

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== subMenuToggleBtn && target !== subMenu) {
        subMenu.style.display = "none";
        subMenuToggleBtn.classList.remove("active");
    }
});
