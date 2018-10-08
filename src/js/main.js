//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/select2/dist/js/select2.min.js


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

    $('<div class="quantity__nav"><div class="quantity__button quantity__button_up">+</div><div class="quantity__button quantity__button_down">-</div></div>').insertAfter('.quantity input');
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

function cardBsuket(){

    $('.catalog__basket').on('click', function() {

        $('.c-backet__inner').removeClass('c-backet__inner_open');
        $(this).children('.c-backet__inner').addClass('c-backet__inner_open');

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


$(function() {

    cardBsuket();
    owlFunction('.card__carousel');
    quantity();
    customSelect();

});