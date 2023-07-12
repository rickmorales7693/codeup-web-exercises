$(()=> {

    $('dd').addClass('invisible');


    $('.btn-1').on('click', () =>{
        $('dd').toggleClass('invisible');
    });


    $('.btn-2').on('click', () => {
        $('ul').each( function () {
            $(this)
                .children()
                .last()
                .toggleClass('yellow-background')
        });
    });


    $('dt').on('click', () => {
        $(this).css('background-color', 'chartreuse');
    });


    $('h3').on('click',function () {
        $(this)
            .next('ul')
            .children()
            .toggleClass('bold')
    });


    $('li').on('click', function () {
        $(this)
            .parent()
            .children()
            .first()
            .toggleClass('color-blue')
    });







    //JS...

    // const toggleVisibility = document.createElement('button');
    // toggleVisibility.innerText = 'Toggle Visibility';
    //
    // const bodyElement = document.querySelector('body');
    // bodyElement.appendChild(toggleVisibility);
    //
    // toggleVisibility.addEventListener('click', function() {
    //     const ddElements = document.querySelectorAll('dd');
    //     ddElements.forEach(function(ddElement){
    //         ddElement.classList.toggle('invisible');
    //     });
    // });
    //
    // const dtElements = document.querySelectorAll('dt');
    // dtElements.forEach(function(dtElement) {
    //     dtElement.addEventListener('click', function() {
    //         dtElement.style.backgroundColor = 'chartreuse';
    //     });
    // });









})