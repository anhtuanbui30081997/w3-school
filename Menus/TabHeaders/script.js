function HandleClick(idCity, element, color) {
    var tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((tabContent) => {
        tabContent.style.display = "none";
    });
    var tabLinks = document.querySelectorAll(".button-link");
    tabLinks.forEach((tabLink) => {
        tabLink.style.backgroundColor = "";
    });
    document.getElementById(idCity).style.display = "block";
    element.style.backgroundColor = color;
}

document.getElementById("defaultOnClick").click();
