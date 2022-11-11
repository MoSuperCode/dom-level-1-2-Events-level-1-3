function keyDown() {
    let unicode = event.keyCode;
    let x = event.code;
    console.log(unicode, x);

    const keyCode = document.getElementById("keyCode");
    const code = document.getElementById("code");
    const keyN = document.getElementById("key");
    keyCode.innerHTML = unicode;
    code.innerHTML = x;

    if (x.length === 4) {
        const key = x.slice(3);
        keyN.innerHTML = key;
    } else {
        key = x;
        keyN.innerHTML = key;
    }
}

