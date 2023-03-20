// import allStatusInfo from "./infoObj.js";
const bs = document.querySelector(".button-start");
const whb = Array.from(document.querySelectorAll(".window_choice-button"));

bs.onclick = function () {
    if (localStorage.difficulty != "") {
        window.location.href = "gaeme_screen.html";
    }
};
whb.forEach((element) => {
    element.onclick = function () {
        localStorage.difficulty = element.id*6
    };
});
