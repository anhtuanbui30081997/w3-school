const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

function DisplayTabContent(evt, idTab) {
    tabLinks.forEach((tabLink) => {
        tabLink.className = tabLink.className.replace("active", "");
    });
    tabContents.forEach((tabContent) => {
        tabContent.style.display = "none";
    });
    evt.currentTarget.className += " active";
    document.getElementById(idTab).style.display = "block";
}

// the click() method simulates a mouse-click on an element
document.getElementById("defaultOpen").click();
