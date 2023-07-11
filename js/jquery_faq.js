$(()=> {

    $('dd').addClass('invisible');

    $('.invisible').css('display', 'none');

    $('body').append('<button class="btn btn-primary">Read More</button>');

    $('button').on('click', function() {
        $('.invisible').toggle();
    });

    $('dt').on('click', function() {
        $(this).css('background-color', 'chartreuse');
    });















})