"use strict";
$(() => {

    $(document).keyup(function (event) {
        console.log(event.keyCode);
    });

    $('#header-name').css({
        'text-align': 'center',
        'color': 'white',
    });

    $('body').css({
        'background-image': 'url("img/plaid_ludicrous_speed.webp")',
        'background-size': 'cover',
    });


    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let position = 0;

    $(document).keyup(function (e) {
        if (e.keyCode === konamiCode[position]) {
            position++;
            if (position === konamiCode.length) {
                activateCode();
                position = 0;
            }
        } else {
            position = 0;
        }
    });

    function activateCode() {
        alert("You are Correct!");
        $('#header-name').html('!!!America!!!').css({
            'color': 'red',
            'font-size': '50px',
            'text-align': 'center',
            'font-family': 'Impact,Charcoal,sans-serif',
            'text-shadow': '2px 2px 4px #000000',
            'text-decoration': 'underline',
            'text-transform': 'uppercase',
            'letter-spacing': '5px'
        });

        $('body').css({
            'background-image': 'url("img/america2.gif")',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });

        $('#audio').html('<audio autoplay loop><source src="audio/america.mp3" type="audio/mpeg"></audio>');




    }








})