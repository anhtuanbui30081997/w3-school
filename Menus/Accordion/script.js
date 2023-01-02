const btns = document.querySelectorAll(".btn");

// for (var i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", btnOnclick);
// }
// console.log(this.person);

function btnOnclick() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    });
});

// btns.forEach((btn) => {
//     btn.addEventListener("click", btnOnclick);
// });
