$(()=> {

    $('dd').addClass('invisible');

    $('body').append('<button class="btn btn-primary">Read More</button>');

    $('button').on('click', function() {
        $('dd').toggleClass('invisible');
    });

    $('dt').on('click', function() {
        $(this).css('background-color', 'chartreuse');
    });















})