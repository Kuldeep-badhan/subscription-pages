let subMenuToggleBtn = document.getElementsByClassName(
    "sidebar__menu-toggle-btn"
)[0];
let subMenu = document.getElementsByClassName("sidebar__menu")[0];
let sidebar = document.getElementsByClassName("sidebar")[0];

sidebar.addEventListener("mouseleave", () => {
    if (subMenuToggleBtn.classList.contains("sidebar__menu-toggle-btn-focus"))
        subMenu.style.display = "none";
});
sidebar.addEventListener("mouseenter", () => {
    if (subMenuToggleBtn.classList.contains("sidebar__menu-toggle-btn-focus"))
        subMenu.style.display = "block";
});

subMenuToggleBtn.addEventListener("click", () => {
    if (subMenu.style.display === "none") {
        subMenu.style.display = "block";
        subMenuToggleBtn.classList.add("sidebar__menu-toggle-btn-focus");
    } else {
        subMenu.style.display = "none";
        subMenuToggleBtn.classList.remove("sidebar__menu-toggle-btn-focus");
    }
});

document.addEventListener("click", (event) => {
    const target = event.target;
    if (target !== subMenuToggleBtn && target !== subMenu) {
        subMenu.style.display = "none";
        subMenuToggleBtn.classList.remove("sidebar__menu-toggle-btn-focus");
    }
});
