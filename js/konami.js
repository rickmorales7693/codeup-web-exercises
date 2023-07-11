"use strict";
$(() => {

    $(document).keyup(function (event) {
        console.log(event.keyCode);
    });

    $('#header-name').css('text-align', 'center')

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
        $('#header-name').html('!!!America!!!')
            .css('color', 'red')
            .css('font-size', '50px')
            .css('text-align', 'center')
            .css('font-family', 'Impact,Charcoal,sans-serif')
            .css('text-shadow', '2px 2px 4px #000000')
            .css('text-decoration', 'underline')
            .css('text-transform', 'uppercase')
            .css('letter-spacing', '5px');

        $('body')
            .css('background-image', 'url("img/america2.gif")')
            .css('background-size', 'cover')
            .css('background-repeat', 'no-repeat')
        $('#audio').html('<audio autoplay loop><source src="audio/america.mp3" type="audio/mpeg"></audio>');




    }








})