const btn = document.querySelector(".btn");
const emti = document.querySelector(".container");

btn.addEventListener("click", () => {
    btn.style.visibility = "hidden";
    btn.style.opacity = "0";

    emti.style.visibility = "visible";
    emti.style.opacity = "1";
});
