function changecolor(event) {
    event.preventDefault();
    const color = document.getElementById("farbeAuswahlen").value;
    const tip = color.replace(" ", "");
    console.log(tip);
    document.body.style.backgroundColor = tip;
};

const button = document.getElementById("button").addEventListener("click", changecolor);