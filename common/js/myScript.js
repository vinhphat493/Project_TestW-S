/**
 * Creator : Lac Vinh Phat
 * Date created : February 16, 2019
 * Content : Process the index page event
 */

$(document).ready(function () {
    //Product slide show
    var index = 1;
    var productSlide = $(".slideCurrent");
    var productInfoSlide = $(".mySlide");
    $(".slideItemDefau").addClass("acitveProduct");
    $(".slideItem").on('click', function () {
        $(".slideItem").removeClass("acitveProduct");
        var slideId = $(this).attr("data-id");
        $(this).toggleClass("acitveProduct");
        index = slideId;
        slidesShow(index, productSlide);
        slidesShow(index, productInfoSlide);
    });

    $(".controlSlide").on('click', function () {
        var indexPlus = parseInt($(this).attr("data-plus"));
        index += indexPlus;
        slidesShow(index, productSlide);
        slidesShow(index, productInfoSlide);
    })

    function slidesShow(n, slidesBox) {
        var i;
        var x = slidesBox;
        if (n > x.length) { index = 1 };
        if (n < 1) { index = x.length - 1 };
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[index - 1].style.display = "block";
    }

    //Event Button scroll to top
    //Check to see if the window is top if not then display button pageTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#pageTopBtn').fadeIn();
        } else {
            $('#pageTopBtn').fadeOut();
        }
    });
    //Click button PageTop event to scroll to top
    $('#pageTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // Event Show the button close when user click the subNav for Layout SP
    $(".btn__collapse").on('click',function(){
        $(".close").toggle();
        $(".open").toggle();
    })  
    
});