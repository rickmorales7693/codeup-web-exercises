$(()=> {

    $('dd').addClass('invisible');

    $('body').append('<button class="btn btn-primary">Read More</button>');

    $('button').on('click', function() {
        $('dd').toggleClass('invisible');
    });

    $('dt').on('click', function() {
        $(this).css('background-color', 'chartreuse');
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