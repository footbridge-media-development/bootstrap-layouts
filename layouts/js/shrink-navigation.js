/* ******************************************************************************************** */
/* Shrinking the Navigation as You Scroll Down the Page *************************************** */
/* Added by: Sarah W., 03/26/2019 ************************************************************* */
/* ******************************************************************************************** */

$(document).ready(function() {
    $('#nav-logo').css('width', '250px');
    $('#nav-logo').css('transition', 'all .5s ease');
    $('#large-navigation-container-2').css('transition', 'all .5s ease');
    $('#large-navigation-container-2').css('background', '#555555');
    $('#small-navigation-container-1').css('transition', 'all .5s ease');
    $('#small-navigation-container-1').css('background', '#555555');
    if ($("#large-navigation-container-2").length !== 0) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $('#nav-logo').css('width', '200px');
                $('#large-navigation-container-2').css('background-color', '#000000');
                $('#small-navigation-container-1').css('background-color', '#000000');
            }
            else {
                $('#large-navigation-container-2').css('background', '#555555');
                $('#small-navigation-container-1').css('background', '#555555');
                $('#nav-logo').css('width', '250px');
            }
        });
    }
});

/* ******************************************************************************************** */
