/*global $,jQuery*/
$(document).ready(function () {
    'use strict';
    $(".btn-open-list").on("click", function () {
        $(this).parent().next().toggleClass("hidden");
        if (!$('.content-order-name-description-list').hasClass("hidden")) {
            $(this).empty();
            $(this).html("Скрыть");
        } else {
            $(this).empty();
            $(this).html("Подробнее");
        }
    });

});