$(function() {

    // fixed Header 
    let header = $('#header')
    let intro = $('#intro')
    let introH = intro.innerHeight()
    let scrollPos = $(window).scrollTop()

    let nav = $('#nav')
    let navToggle = $('#navToggle')

    checkScroll(scrollPos, introH)

    $(window).on('scroll', function() {
        scrollPos = $(this).scrollTop()

        checkScroll(scrollPos, introH)

        // console.log(scrollPos)
    })

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
    }

    // console.log(scrollPos)

    header.addClass('fixed')

    // fixed Header 

    // SmoothScroll 

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault()

        let elementId = $(this).data('scroll')
        let elementOffset = $(elementId).offset().top

        nav.removeClass('show')

        console.log(elementOffset)

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 1000)
    })

    // SmoothScroll

    // Menu 
    

    navToggle.on('click', function(event) {
        event.preventDefault()
        nav.toggleClass('show')
    })

    // Menu 


    // reviews 
    // https://kenwheeler.github.io/slick/
    let slider = $('#reviewsSlider')

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        // dots: true
      });

    // reviews 
});