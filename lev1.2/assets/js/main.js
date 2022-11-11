function myFunction() {
    const exampleElements = (document.getElementsByClassName("example"));

    console.log(exampleElements);

    for (i = 0; i < 5; i++) {
        exampleElements[i].classList.toggle("toggle");
    }

}