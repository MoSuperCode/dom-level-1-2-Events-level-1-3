let count = 0;
let button = document.getElementById("clickMe");

button.addEventListener("click", counte);

function counte() {
    count = count + 1;
    const counter = document.getElementById("counter");
    counter.innerHTML = count;
};