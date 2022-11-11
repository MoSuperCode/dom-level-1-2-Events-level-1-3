const div = document.getElementById("element");
function small() {
    div.classList.remove("middle", "big");
    div.classList.add("small");
}
function middle() {
    div.classList.remove("small", "big");
    div.classList.add("middle");
}
function big() {
    div.classList.remove("middle", "small");
    div.classList.add("big");
}