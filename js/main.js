/*global $*/
$(document).ready(function () {
    'use strict';
    /*calendar*/
    
    /*pop-up notification*/
    $(".navbar-header-info-list-item_notifications").on("click", function(){
        $('.pop-up-notification_info').toggleClass("show");
        $(this).find(".pop-up_tr_notifications").toggleClass("show");
    });
    $(".navbar-header-info-list-item_message").on("click", function(){
        $('.pop-up-notification_message').toggleClass("show");
        $(this).find(".pop-up_tr_notifications").toggleClass("show");
    });
    $(".navbar-header-info-list-item_user").on("click", function(){
        $('.pop-up_user').addClass("show");
        $(this).find(".pop-up_tr_user").addClass("show");
    });
    $(".btn-pop-up_user-exit").on("click", function(){
        $('.pop-up_user').removeClass("show");
        $('.pop-up_tr_user').removeClass("show");
    });
    $(document).mouseup(function (e) {
        var toggleMenu = $(".pop-up-notification");
        if (!toggleMenu.is(e.target) && toggleMenu.has(e.target).length === 0) {
            toggleMenu.removeClass("show");
            $(".pop-up_tr_notifications").removeClass("show");
        }
    });
    
});