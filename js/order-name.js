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
    $(".btn-message").on("click", function () {
        $(this).parent().next().toggleClass("show");
        if ($('.content-order-name-offers-list-item-author-info-message').hasClass("show")) {
            $(this).html("<i class='fa fa-chevron-down'></i>Сообщения");
        } else {
            $(this).html("<i class='fa fa-chevron-up'></i>Сообщения");
        }
    })
    $(".more").on("click", function(){
        $(this).parent().parent().toggleClass("active");
        if ($('.content-order-name-offers-list-item-author-info-bottom-panel-info').hasClass("active")) {
            $(this).html("Свернуть");
        } else {
            $(this).html("Подробнее");
        }
    })
});