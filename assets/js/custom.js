/*=====================================================================
    ==========================  03-ScrollToptoBottom  =========================
    ========================================================================*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$('#patient-carousel').owlCarousel({
    margin: 15,
    loop: true,
    nav: true,
    navText: ["<img src='assets/img/download.png' class='left-img'/>", "<img src='assets/img/download.png' class='right-img'/>"],
    dots: false,
    autoplay: false,
    smartSpeed: 700,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1024: {
            items: 2,
        },
        1200: {
            items: 2.2,
        }
    }
});

$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },

        {

            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }

        });



});

/*========================================================================================================
================================ pensions_carousel ===================================================================
===========================================================================================================*/
var o1 = $('#image-carousel')
var o2 = $('#content-carousel')
o1.owlCarousel({
    margin: 0,
    rewind: true,
    autoHeight: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 700,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('#scrollBottom').click(() => o1.trigger('next.owl.carousel'))

o2.owlCarousel({
    rtl: true,
    margin: 0,
    rewind: true,
    autoHeight: true,
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    smartSpeed: 700,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

o1.on('changed.owl.carousel', function (event) {
    o2.trigger('to.owl.carousel', [event.item.index - 2]);
});


$("#bugurToggle").click(function () {
    $(this).toggleClass("active");
})