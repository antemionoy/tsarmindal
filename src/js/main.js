//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/select2/dist/js/select2.min.js

"use strict";

function changeCheckbox() {
    var elementDisabled = document.querySelector('.form__disabled');
    var elementCheckbox = document.querySelector('.form__checkbox');

    elementCheckbox.onchange = function() {
        elementDisabled.disabled = !this.checked;
        elementDisabled.classList.toggle('form__input_disabled');
    };
}

function mainMenu(){
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('nav');

    hamburger.onclick = function(){
        this.classList.toggle('is-active');
        nav.classList.toggle('header__menu_show');
    };
}


$(function() {
    $('.form__select').select2({
        minimumResultsForSearch: -1
    });

    changeCheckbox();
    mainMenu();
});
