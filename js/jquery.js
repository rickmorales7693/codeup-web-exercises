"use strict";
$(() => {

    $(document).keyup(function(event){
        console.log(event.keyCode);
    });

    let konamiCode = [38,38,40,40,37,39,37,39,66,65];
    let konamiCodePosition = 0;

    $(document).keyup(function(event){
        if (event.keyCode === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                alert("You have unlocked 30 lives!");
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });



})

    // alert($('#header').html());
    //
    // const aboutPara1 = $('#paragraph1').html();
    // alert(aboutPara1);
    //
    // alert($('#paragraph2').html());
    //
    // $('.codeup').css('border', '1px solid red');
    //
    // $('li').css('font-size', '20px');
    //
    // $('h1, p, li').css('background-color', 'yellow');


    // //function style example
    // function hideUnorderedList() {
    //     $('ul').hide();
    // }
    //
    // $('h1')
    //     .on('click', hideUnorderedList);


    // $('h2')
    //     .on('click', function () {
    //         $(this).css('text-decoration', 'underline');
    //     })
    //     .on('dblclick', function () {
    //         $(this).css('text-decoration', 'none');
    //     })
    //     .on('mouseenter', function (){
    //         $(this).css('cursor', 'pointer');
    //     })
    //     .on('mouseleave', function (){
    //         $(this).css('cursor', 'default');
    //     });

    // $('h1')
    //     .on('click', function () {
    //         $(this).css('background-color', 'green');
    //     });
    // $('p')
    //     .on('dblclick', function () {
    //         $('p').css('font-size', '18px');
    //     });
    // $('li')
    //     .on('mouseenter', function () {
    //         $(this).css('color', 'red');
    //     })
    //     .on('mouseleave', function () {
    //         $(this).css('color', 'black');
    //     });

    // $('li').hover(
    //     function () {
    //         $(this).css('color', 'red');
    //     },
    //     function () {
    //         $(this).css('color', 'black');
    //     }
    // );
