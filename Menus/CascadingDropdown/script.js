var subjectObject = {
    "Front-end": {
        HTML: ["Links", "Images", "Tables", "Lists"],
        CSS: ["Borders", "Margins", "Backgrounds", "Float"],
        JavaScript: ["Variables", "Operators", "Functions", "Conditions"],
    },
    "Back-end": {
        PHP: ["Variables", "Strings", "Arrays"],
        SQL: ["SELECT", "UPDATE", "DELETE"],
    },
};

window.onload = function () {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
        subjectSel.onchange = () => {
            chapterSel.length = 1;
            topicSel.length = 1;
            for (y in x.value) {
                topicSel.options[topicSel.options.length] = new Option(y, y);
            }
        };
    }
};
