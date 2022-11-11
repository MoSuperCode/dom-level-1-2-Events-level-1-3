const select = document.getElementById("my-select");

select.addEventListener("change", e => {
    const paragraph = document.getElementById("option-selected");
    paragraph.innerHTML = "du hast " + select.value + " ausgewählt";

});