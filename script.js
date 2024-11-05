var toggleButton = document.getElementById("toggle");
var skill = document.getElementById("skill");
toggleButton.addEventListener("click", function () {
    if (skill.style.display === "block") {
        skill.style.display = "none";
    }
    else {
        skill.style.display = "block";
    }
});
