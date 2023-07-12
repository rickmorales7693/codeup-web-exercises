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


    //BONUS
    $(document).ready(function() {
        $('.swap-btn').on('click', function() {
            const currentBox = $(this).parent();
            let targetBox;

            if (currentBox.is('#box1')){
                targetBox = $('#box2');
            } else if (currentBox.is('#box2')) {
                let randomDirection = Math.random() < 0.5 ? 'left' : 'right';
                targetBox = randomDirection === 'left' ? $('#box1') : $('#box3');
            } else if (currentBox.is('#box3')) {
                targetBox = $('#box2');
            }

            const currentImage = currentBox.find('img').attr('src');
            const targetImage = targetBox.find('img').attr('src');

            currentBox.find('img').attr('src', targetImage);
            targetBox.find('img').attr('src', currentImage);
        });
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