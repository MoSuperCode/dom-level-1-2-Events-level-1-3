function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

function changeHandle() {
    const red = document.getElementById("rot").value;
    const green = document.getElementById("grün").value;
    const blue = document.getElementById("blau").value;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    console.log({ red, green, blue });
}