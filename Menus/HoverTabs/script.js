const tabContens = document.querySelectorAll(".tab-content");

function showTabContent(id) {
    tabContens.forEach((tabConten) => {
        tabConten.style.display = "none";
    });
    var contentActive = document.getElementById(id);
    contentActive.style.display = "flex";
}
