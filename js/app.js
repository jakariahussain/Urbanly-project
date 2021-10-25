// Data-background js
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

/******************** mobile menu ********************/
$('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
});

/*================= Sticky Menu =================*/
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
        $(".sticky").removeClass("sticky-header");
    } else {
        $(".sticky").addClass("sticky-header");
    }
});

/*=============================== imgages-gallery ===============================*/

// $('.gallery-item-thumb').magnificPopup({
//     type: 'image',
//     gallery: {
//         enabled: true
//     }
// });
/*=============================== video-gallery ===============================*/
// $('.video-opens').magnificPopup({
//     type: 'iframe',
// });

// nice-select
// $('select').niceSelect();


// clients-slider
$('.clients-area .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
});


// clients-slider
$('.team-mission .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText:["<img src='images/all/02.png'>","<img src='images/all/03.png'>"],
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

/*================= Work file =================*/
var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
});
var $buttonGroup = $('.filters');
$buttonGroup.on('click', 'li', function (event) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $(event.currentTarget);
    $button.addClass('is-checked');
    var filterValue = $button.attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

// Footer-current-year
var currntYear = new Date();
document.getElementById("years").innerHTML = currntYear.getFullYear();


//Menu-bar active script
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.primary-menu nav li a')
const menuLength = menuItem.length
for(let i = 0; i<menuItem.length; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = 'active-menu'
    }
}




