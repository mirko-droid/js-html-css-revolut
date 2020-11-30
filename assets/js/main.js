$(function() {

    var elemLink = $('.dropdown-toggle');
    var sottoMenu = $('.dropdown-menu');
   
    elemLink.mouseenter(function () {
        sottoMenu.show();
    });
    elemLink.mouseleave(function () {
        sottoMenu.hide();
    });

});