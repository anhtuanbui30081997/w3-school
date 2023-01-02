const tabLinks = document.querySelectorAll(".tab-link");
const descs = document.querySelectorAll(".desc");

tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", () => {
        descs.forEach((desc) => {
            desc.className = desc.className.replace("active", "");
        });
        tabLinks.forEach((tab) => {
            tab.className = tab.className.replace("active", "");
        });
        tabLink.classList.add("active");
        var desc = tabLink.nextElementSibling;
        desc.classList.add("active");
    });
});
