let preloader = document.querySelector('#preloader');

document.body.onload = function () {

    setTimeout(function () {
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 4500);
}

$(document).ready(function () {
    $('body, html').css({
        overflow: 'hidden'
    });
    setTimeout(function () {
        $('#preloader').fadeOut('slow', function () {
            $('body, html').css({
                overflowY: 'auto'
            });
        });
    }, 5500);
});