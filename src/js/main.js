//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/select2/dist/js/select2.min.js
//= ../../bower_components/remodal/dist/remodal.min.js


"use strict";

function owlFunction(carousel) {

    $(carousel).owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        dots: true,
        dotsContainer: ".c-dots",
        responsive: {
            320: {
                items: 1,
            },

            480: {
                items: 1
            },

            768: {
                items: 1
            },

            1023: {
                items: 1
            }
        }
    });
}


function quantity() {

    $('<div class="quantity__nav"><div class="quantity__button quantity__button_up"></div><div class="quantity__button quantity__button_down"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity__button_up'),
            btnDown = spinner.find('.quantity__button_down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

}

function cardBsuket() {

    $('.catalog__basket').on('click', function() {

        $('.c-backet__inner').removeClass('c-backet__inner_open');
        $('.catalog__content').removeClass('catalog__content_fw-medium');
        $(this).children('.c-backet__inner').addClass('c-backet__inner_open');
        $(this).parents('.catalog__content').addClass('catalog__content_fw-medium');

    });

}



function customSelect() {

    $('.c-price__select').select2({
        minimumResultsForSearch: -1,
        width: 51
    });

    $('.c-using__select').select2({
        minimumResultsForSearch: -1,
        width: 70
    });

}

function yaMap() {

    if ($('#map').length) {

        ymaps.ready(init);
        var myMap,
            myPlacemark = [];

        function init() {
            myMap = new ymaps.Map("map", {
                center: [59.959541, 30.316213],
                zoom: 13,
                controls: ['zoomControl'],
                behaviors: ['drag']
            });

            myPlacemark[0] = new ymaps.Placemark([55.715297, 37.574435], {
                hintContent: 'Москва',
                balloonContentHeader: 'Лужнецкая набережная, д.2/4, офис 237',
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/maker-map.png',
                iconImageSize: [37, 50],
                iconImageOffset: [-20, -60]
            });


            for (var i = 0; i < myPlacemark.length; i++) {
                myMap.geoObjects.add(myPlacemark[i]);
            };

        }

    }


}


function searchHover() {

    var timeKeeper;

    $('.search-btn').mouseenter(function() {

        $(this).siblings('.search-input').addClass('active').focus();

        clearTimeout(timeKeeper);
    });

    $('.search-input').focusout(function() {

        timeKeeper = setTimeout(function() {
            $('.search-input').removeClass('active').val('');
        }, 150);

    });

}



function busketHover() {

    var flag = true;

    $('.basket__link').mouseenter('click', function(e) {

        $(this).parent().find('.m-basket').addClass('active');

    });

    $('.m-basket__close').on('click', function() {

        $('.m-basket').removeClass('active');

    });

}


function menu() {

    $(".hamburger").click(function(e) {
        e.preventDefault();

        if ($('.m-basket').hasClass('active')) {

            $('.m-basket').removeClass('active');
        }

        $(this).toggleClass("is-active");

        $('.mobile-sidebar').toggleClass('mobile-sidebar__active');
        $('body, html').toggleClass('hidden');
        $('.main').toggleClass('blur');



    });

}


function dropdownFun() {

    var parentDropDown = $('.header__bottom');
    var dropDown = $('.nav__dropdown');


    dropDown.each(function() {

        if ($(this).outerWidth() >= 990) {

            $(this).addClass('ouherwidth');
        }

    });
}


function fixedSidebar() {
    if ($(window).width() <= 1024) {

        var areaTop = $('.header');

        var areaTopHeight = $('.header').height();

        $('.mobile-sidebar').css('top', areaTopHeight);

        if ($(window).scrollTop() >= areaTop.height()) {
            $('.header').addClass('fixed');
            $('.main').css('padding-top', areaTopHeight);

        } else if ($(window).scrollTop() < areaTop.height()) {
            $('.header').removeClass('fixed');
            $('.main').css('padding-top', 0);

        }
    } else {
        $('.mobile-sidebar').css('top', 0);
    }
}



function showAllFiles(blockHide, clickLink) {

    var notFalseFlag = true;
    blockHide.slice(8).hide();

    clickLink.click(function(e) {
        e.preventDefault();

        if (notFalseFlag) {
            notFalseFlag = false;

            blockHide.slice(8).show('slow');
            clickLink.text('свернуть');

            clickLink.addClass('rotate');

        } else {
            notFalseFlag = true;

            blockHide.slice(8).hide('slow');
            clickLink.text('показать еще');

            clickLink.removeClass('rotate');

        }

    });
}

$(function() {
    showAllFiles($('.catalog__item'), $('.catalog__more'));
    fixedSidebar();
    dropdownFun();
    menu();
    busketHover();
    searchHover();
    yaMap();
    cardBsuket();
    owlFunction('.card__carousel');
    quantity();
    customSelect();

    $('.promo__slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        dots: true,
        responsive: {
            320: {
                items: 1,
            },

            480: {
                items: 1
            },

            768: {
                items: 1
            },

            1023: {
                items: 1
            }
        }
    });

    $('.promo_back-red').addClass('active');

});


$(window).scroll(function() {
    fixedSidebar();
});


$(window).resize(function() {
    fixedSidebar();
    busketHover();
});
