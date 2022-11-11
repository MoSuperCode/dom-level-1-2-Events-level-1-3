const change = (para => {

    const array = document.getElementsByTagName("a");
    array[0].classList.toggle("pens");
    array[1].classList.toggle("kaka");
    array[2].classList.toggle("kiki");
    array[3].classList.toggle("lachs");

    /*     const homeButton = document.getElementById("navHome");
        homeButton.classList.toggle("pens");
        const newsButton = document.getElementById("navNews");
        newsButton.classList.toggle("kaka");
        const contactButton = document.getElementById("navContact");
        contactButton.classList.toggle("kiki");
        const changeButton = document.getElementById("navChange");
        changeButton.classList.toggle("lachs"); */
});