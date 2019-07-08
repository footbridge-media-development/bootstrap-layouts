/* ******************************************************************************************** */
/* Shrinking the Navigation as You Scroll Down the Page *************************************** */
/* Added by: Sarah W., 03/26/2019 ************************************************************* */
/* ******************************************************************************************** */

$(document).ready(function() {

    $('#navigation-logo').css('width', '200px');
    $('#navigation-logo').css('transition', 'all .5s ease');

    $('#large-navigation-container-2').css('transition', 'all .5s ease');
    $('#large-navigation-container-2').css('background', 'rgba(0, 0, 0, 0.5)');

    $('#small-navigation-container-1').css('transition', 'all .5s ease');
    $('#small-navigation-container-1').css('background', 'rgba(0, 0, 0, 0.5)');

    if ($("#large-navigation-container-2").length !== 0) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {

                $('#navigation-logo').css('width', '170px');

                $('#large-navigation-container-2').css('background-color', 'rgba(0, 0, 0, 1)');

                $('#small-navigation-container-1').css('background-color', 'rgba(0, 0, 0, 1)');

            }
            else {

                $('#large-navigation-container-2').css('background', 'rgba(0, 0, 0, 0.5)');

                $('#small-navigation-container-1').css('background', 'rgba(0, 0, 0, 0.5)');

                $('#navigation-logo').css('width', '200px');

            }
        });
    }
});

/* ******************************************************************************************** */
