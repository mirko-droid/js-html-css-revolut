$( function () {
    var elemLink = $('.dropdown');
    // var sottoMenu = $('.dropdown-menu');
    elemLink.mouseenter(function () {
        $(this).find('.dropdown-menu').show(); // find su elementi html 
    });
    elemLink.mouseleave(function () {
        $(this).find('.dropdown-menu').hide(); // find su elementi html 
    });
});