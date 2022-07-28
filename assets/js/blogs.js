var divs = Array.from(document.getElementsByClassName("cardes")),
    count = divs.length,
    currenttab = 1,
    tabLink = Array.from(document.getElementsByClassName("page-link"));

function animationTheTap() {
    divs.forEach(function (div) {
        div.classList.remove("cardes-active");
        div.classList.add("cardes");
    });
    tabLink.forEach(function (theLink) {
        theLink.classList.remove("active-pag");
    });
    divs[currenttab - 1].classList.remove("cardes");
    divs[currenttab - 1].classList.add("cardes-active");
    tabLink[currenttab - 1].classList.add("active-pag");
}
for (var i = 0; i < tabLink.length; i++) {
    tabLink[i].onclick = function () {
        currenttab = parseInt(this.getAttribute("data-index"));
        animationTheTap();
    }
}