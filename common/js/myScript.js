/**
 * Creator : Lac Vinh Phat
 * Date created : February 16, 2019
 * Content : Process the index page event
 */

$(document).ready(function () {
    //Product slide show
    var index = 1;
    $(".slideCureent").hide();

    $(".slideItem").on('click', function () {
        let slideId = $(this).attr("data-id");
        index = slideId;
    })

    let array = $(".slideCureent");
    for (let i = 0; i<array.length ; i++){
        console.log(array[i].attr("data-index"));
    }


    // function showSlides(n) {
    //     console.log(n);
    //     let slides = (".slideCurrent");
    //     if (n > slides.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = slides.length }
    //     for (let i = 0; i < slides.length; i++) {
    //         slides[i].hide(); 
    //     }
    //     for (let i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " active";
    // }
    // showSlides(1);
});