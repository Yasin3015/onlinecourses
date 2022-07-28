
// go to top function
const mybutton = document.getElementById("myBtn");
function scrollToTopFunction() {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop > 400) {
        mybutton.classList.remove("hide");
        mybutton.classList.add("view");
    } else {
        mybutton.classList.remove("view");
        mybutton.classList.add("hide");
    }
}
window.onscroll=function(){
    scrollToTopFunction();
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
// owl slider

jQuery(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        autoplay: true,
    });
})

