let friend = $("#friend");
let exit = $("#exit");
let learn = $("#learn");

learn.on("click", function(event){
    event.preventDefault();
    friend.toggleClass("show");
});
exit.on("click", function(event){
    event.preventDefault();
    friend.toggleClass("show");
});

let burger = $("#burger");
let menu = $("#menu");

burger.on("click", function(event){
    event.preventDefault();
    menu.toggleClass("modal");
});

//СЛАЙДЕР !-->

$('.container__pet').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">&#8592</button>',
    nextArrow: '<button class="slick-next">&#10141</button>'
});
$('.container__pet2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">&#8592</button>',
    nextArrow: '<button class="slick-next">&#10141</button>'
});

//Меню навигации..................................
$(function(){
    let navbar = $("#navbar");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

$(window).on("scroll", function() {
    scrollPos = $(this).scrollTop();

    if(scrollPos > introH){
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
    });
});