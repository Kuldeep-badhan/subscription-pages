let sidebar = document.querySelector(".sidebar");
let subMenu = document.querySelector(".sidebar__menu");
let subMenuToggleBtn = document.querySelector(".sidebar__menu-toggle-btn");
let subMenuToggleBtnIcon = document.querySelector(".sidebar__menu-btn-icon");

sidebar.addEventListener("mouseleave", () => {
    if (subMenuToggleBtn.classList.contains("sidebar__menu-toggle-btn--active"))
        subMenu.style.display = "none";
});

sidebar.addEventListener("mouseenter", () => {
    if (subMenuToggleBtn.classList.contains("sidebar__menu-toggle-btn--active"))
        subMenu.style.display = "block";
});

subMenuToggleBtn.addEventListener(
    "click",
    () => {
        console.log("button click");
        if (subMenu.style.display === "none") {
            subMenu.style.display = "block";
            subMenuToggleBtn.classList.add("sidebar__menu-toggle-btn--active");
        } else {
            subMenu.style.display = "none";
            subMenuToggleBtn.classList.remove(
                "sidebar__menu-toggle-btn--active"
            );
        }
    },
    true
);

document.addEventListener("click", (event) => {
    const target = event.target;
    if (
        target !== subMenuToggleBtn &&
        target !== subMenu &&
        target !== subMenuToggleBtnIcon
    ) {
        subMenu.style.display = "none";
        subMenuToggleBtn.classList.remove("sidebar__menu-toggle-btn--active");
    }
});
