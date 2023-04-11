$('.products').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.toggle').click(function () {
    $('.navbar').slideToggle()
})

$('.collection-text').click(function () {
    $(this).siblings().slideToggle()
    $(this).parents('.collection').toggleClass('active')
})

$('.fa-filter').click(function () {
    $('.filter').toggleClass('active')
    $('body').toggleClass('overflow')
})

$('.categories').slick({
    arrows: false,
    slidesToShow: 3,
    vertical: true,
    verticalScrolling: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});