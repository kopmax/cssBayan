$(function() {

    // fixed Header 
    let header = $('#header')
    let intro = $('#intro')
    let introH = intro.innerHeight()
    let scrollPos = $(window).scrollTop()

    $(window).on('scroll', function() {
        scrollPos = $(this).scrollTop()

        if(scrollPos > introH) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }

        // console.log(scrollPos)
    })

    // console.log(scrollPos)

    header.addClass('fixed')

    // fixed Header 

    // SmoothScroll 

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault()

        let elementId = $(this).data('scroll')
        let elementOffset = $(elementId).offset().top

        console.log(elementOffset)

        $('html, body').animate({
            scrollTop: elementOffset
        })
    })

    // SmoothScroll
});