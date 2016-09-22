/*global $*/
$(document).ready(function () {
    'use strict';
    $(".checkbox-dynamic").on("click", function(){
        $(this).toggleClass("checked");
    })
    $(".btn-blue").on("click", function(){
        event.preventDefault();
        $(this).removeClass("btn-blue");
        $(this).addClass("btn-gray");
        $(this).next().css("display", "inline-block");
    })
});