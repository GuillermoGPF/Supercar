// Supercar Script
$(document).ready(function($) {
    $('video').hide();
    $('#door').hide();
    $('.foto').hide();
    $('.texto').hide();
    $('.gallery').hide();
    $('.references').hide();
    $('.garage').hide();

    $('#history').on('click', function() {
        $('#slider').hide('drop', {direction: "up"}, 1000);
        $('video').show();
        $('.gallery').hide();
        $('.references').hide();
        $('.garage').hide();
        setTimeout(function() {
            $('video').hide('fade');
            $('.foto').show('drop', {direction: "left"}, 1000);
            $('.texto').show('drop', {direction: "right"}, 1000);
        }, 4000);
    });

    $('#gallery').on('click', function() {
        $('#slider').hide('drop', {direction: "up"}, 1000);
        $('video').show();
        $('.foto').hide();
        $('.texto').hide();
        $('.references').hide();
        $('.garage').hide();
        setTimeout(function() {
            $('video').hide('fade');
            $('.gallery').show('blind', 1000);
        }, 4000);
    });

    $('#references').on('click', function() {
        $('#slider').hide('drop', {direction: "up"}, 1000);
        $('video').show();
        $('.foto').hide();
        $('.texto').hide();
        $('.gallery').hide();
        $('.garage').hide();
        setTimeout(function() {
            $('video').hide('fade');
            $('.references').show('fade', 1500);
        }, 4000);
    });

    $('#garage').on('click', function() {
        $('#slider').hide('drop', {direction: "up"}, 1000);
        $('#door').show('drop', {direction: "up"}, 1500);
        $('.foto').hide();
        $('.texto').hide();
        $('.gallery').hide();
        $('.references').hide();
        $('video').hide();
        setTimeout(function() {
            $('#door').hide('drop', {direction: "up"}, 1500);
            $('.garage').show('fade', 2000);
        }, 3000);
    });
});