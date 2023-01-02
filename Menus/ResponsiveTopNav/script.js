const navLists = document.querySelectorAll(".left-nav a");
const navRight = document.querySelector(".right-nav");
const content = document.querySelector(".content");
var pointCompare = 0;

navLists.forEach((nav) => {
    if (navRight.offsetLeft - (nav.offsetLeft + nav.offsetWidth) < 100) {
        pointCompare = nav.offsetLeft + nav.offsetWidth;
        nav.style.display = "none";
    }
});

function handleResponsive() {
    for (var i = 1; i < navLists.length; i++) {
        if (
            navRight.offsetLeft -
                (navLists[i].offsetLeft + navLists[i].offsetWidth) <
            50
        ) {
            pointCompare = navLists[i].offsetLeft + navLists[i].offsetWidth;
            navLists[i].style.display = "none";
        }
        if (navRight.offsetLeft > pointCompare + 50) {
            navLists[i].style.display = "block";
            pointCompare = navLists[i].offsetLeft + navLists[i].offsetWidth;
        }
    }
    if (pointCompare >= 840) {
        content.classList.remove("responsive");
    }
}

function showLeftSideBar() {
    content.classList.toggle("responsive");
}
