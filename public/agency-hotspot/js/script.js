$(window).on("load", function () {

    "use strict";

    //Clear URL On Page Refresh
    var loc = window.location.href,
        index = loc.indexOf('#');

    if (index > 0) {
        window.location = loc.substring(0, index);
    }

    /* ===================================
        Page Piling
    ====================================== */
    // Debug: Check window width
    console.log('Window width:', $(window).width());
    console.log('PagePiling element exists:', $('#pagepiling').length > 0);
    
    // Safari-specific mobile detection
    var isSafariMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isSmallScreen = $(window).width() < 768;
    var isiPadPortrait = /iPad/.test(navigator.userAgent) && $(window).width() >= 768 && $(window).width() <= 1024 && $(window).height() > $(window).width();
    
    if($(window).width() < 1025) {
        console.log('Tablet/Mobile device detected - using normal scroll');
        $('.pagedata').removeAttr('id');
        $('html, body').css('overflow-y', 'scroll');
        //Team Counter
        $('.count').each(function () {
            $(this).appear(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        });
        //Portfolio Counter
        $('.portfolio-counter').each(function () {
            $(this).appear(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        });
    }
    else{
        console.log('Initializing pagepiling...');
        
        // Make sure the element exists before initializing
        if($('#pagepiling').length === 0) {
            console.error('ERROR: #pagepiling element not found!');
            return;
        }
        
        $('#pagepiling').pagepiling({
            direction: 'vertical',
            sectionsColor: ['#171717', '#171717', '#171717', '#171717', '#171717'],
            anchors: ['home-banner', 'about', 'team', 'portfolio', 'contact'],
            scrollingSpeed: 500,
            menu: '#menu',
            easing: 'linear',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'bulletsColor': '#535353',
                'position': 'left',
                'tooltips': ['Home', 'Our Services', 'Who We Are', 'Our Works', 'Contact'],
            },

            //events
            onLeave: function (index, nextIndex, direction) {
                //reaching our First section? The one with our normal site?

                $('.navbar-top-default').fadeOut();
                $('.slider-bottom .slider-social').fadeOut();
                $('.slider-copyright').fadeOut();

                if(nextIndex == 1 || nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5 || nextIndex == 6 || nextIndex == 7 || nextIndex == 8 || nextIndex == 9 || nextIndex == 10){

                    setTimeout(function(){
                        $('.navbar-top-default').fadeIn();
                        $('.slider-bottom .slider-social').fadeIn();
                        $('.slider-copyright').fadeIn();
                    }, 600);
                }

                //Team Counter
                if(nextIndex == 3) {
                    $('.count').each(function () {
                        $(this).appear(function () {
                            $(this).prop('Counter', 0).animate({
                                Counter: $(this).text()
                            }, {
                                duration: 3000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        });
                    });
                }
                //Portfolio Counter
                if(nextIndex == 4) {
                    $('.portfolio-counter').each(function () {
                        $(this).appear(function () {
                            $(this).prop('Counter', 0).animate({
                                Counter: $(this).text()
                            }, {
                                duration: 3000,
                                easing: 'swing',
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                }
                            });
                        });
                    });
                }

                if(nextIndex == 1) {
                    $('.section1left').addClass('slideInLeft');
                    setTimeout(function(){
                        $('.section1left').removeClass('slideInLeft');
                    }, 1800);

                    $('.section1right').addClass('slideInRight');
                    setTimeout(function(){
                        $('.section1right').removeClass('slideInRight');
                    }, 1800);
                }

                if(nextIndex == 2) {
                    $('.about-fadeIn').addClass('slideInLeft');
                    setTimeout(function(){
                        $('.about-fadeIn').removeClass('slideInLeft');
                    }, 1500);

                    $('.about-zoom1In').addClass('zoomIn');
                    setTimeout(function(){
                        $('.about-zoom1In').removeClass('zoomIn');
                    }, 1000);

                    $('.about-zoom2In').addClass('zoomIn');
                    setTimeout(function(){
                        $('.about-zoom2In').removeClass('zoomIn');
                    }, 1200);

                    $('.about-zoom3In').addClass('zoomIn');
                    setTimeout(function(){
                        $('.about-zoom3In').removeClass('zoomIn');
                    }, 1400);

                    $('.about-zoom4In').addClass('zoomIn');
                    setTimeout(function(){
                        $('.about-zoom4In').removeClass('zoomIn');
                    }, 1600);

                    $('.about-zoom5In').addClass('fadeInUp');
                    setTimeout(function(){
                        $('.about-zoom5In').removeClass('fadeInUp');
                    }, 1400);
                }

                if(nextIndex == 3) {
                    $('.section3left').addClass('slideInLeft');
                    setTimeout(function(){
                        $('.section3left').removeClass('slideInLeft');
                    }, 1800);

                    $('.section3right').addClass('slideInRight');
                    setTimeout(function(){
                        $('.section3right').removeClass('slideInRight');
                    }, 1800);

                    $('.team-fade').addClass('zoomIn');
                    setTimeout(function(){
                        $('.team-fade').removeClass('zoomIn');
                    }, 1600);
                }

                if(nextIndex == 4) {
                    $('.section4left').addClass('slideInLeft');
                    setTimeout(function(){
                        $('.section4left').removeClass('slideInLeft');
                    }, 1800);

                    $('.section4right').addClass('slideInRight');
                    setTimeout(function(){
                        $('.section4right').removeClass('slideInRight');
                    }, 1800);

                    $('.portfolio-fade').addClass('zoomIn');
                    setTimeout(function(){
                        $('.portfolio-fade').removeClass('zoomIn');
                    }, 1600);
                }

                if(nextIndex == 5) {
                    $('.section6left').addClass('slideInLeft');
                    setTimeout(function(){
                        $('.section6left').removeClass('slideInLeft');
                    }, 1800);
                }
            },
        });
        
        console.log('PagePiling initialized successfully!');
    }

/* ===================================
        WOW Animation
====================================== */

    if ($(window).width() > 991) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

/* ===================================
    Loading Timeout
 ====================================== */
    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $("#loader-fade").fadeOut("slow");
    }, 1000);
});

jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});

/* ===================================
     Side Menu Open & Close
====================================== */
function my_click() {
    try {
        $(document).off('click', '#my_tog #close_nav');
        
        $(document).on('click', '#my_tog', function(e) {
            e.preventDefault();
            $(".side_nav").addClass("expand_nav");
            $(this).addClass("close_nav active").attr("id", "close_nav");
            $(".overlay-body").addClass("show_body_overlay");
            $('#pp-nav').hide();
        });

        $(document).on('click', '#close_nav', function(e) {
            e.preventDefault();
            $(this).removeClass("close_nav active").attr("id", "my_tog");
            $(".side_nav").removeClass("expand_nav");
            $(".overlay-body").removeClass("show_body_overlay");
            $('#pp-nav').show();
        });
    } catch (error) {
        console.error('Error in hamburger menu:', error);
    }
}

$('.side-nav-menu .nav-menu li a').on("click", function () {
    $(".side_nav").removeClass("expand_nav");
    $("#close_nav").removeClass("close_nav active");
    $(".side_nav").removeClass("expand_nav");
    $("#my_tog").removeClass("close_nav active");
    $("#close_nav").attr("id","my_tog");
    $('#pp-nav').show();
    $('.side-nav-menu .nav-menu .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
});

/* ===================================
    Broad Nav
====================================== */

$('.my_nav_tog').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.broad').addClass('broad-nav');
    $('.broad').css({ 
        'visibility': 'visible',
        'opacity': '1',
        'transform': 'translateX(0)'
    });
    $('.head-nav').hide();
    $('body').addClass('show-modal');
    // Add backdrop
    if (!$('.mobile-backdrop').length) {
        $('body').append('<div class="mobile-backdrop"></div>');
    }
    $('.mobile-backdrop').fadeIn(300);
});

$('.btn-close').click(function() {
    $('.broad').css({ 
        'opacity': '0',
        'transform': 'translateX(100%)'
    });
    $('.mobile-backdrop').fadeOut(300);
    $('body').removeClass('show-modal');
    setTimeout(function() {
        $('.broad').removeClass('broad-nav');
        $('.broad').css('visibility', 'hidden');
    }, 300);
});

$('.broad ul li a').click(function () {
    $('.broad').css({ 
        'opacity': '0',
        'transform': 'translateX(100%)'
    });
    $('.mobile-backdrop').fadeOut(300);
    $('body').removeClass('show-modal');
    setTimeout(function() {
        $('.broad').removeClass('broad-nav');
        $('.broad').css('visibility', 'hidden');
    }, 300);
});

// Close menu when clicking backdrop
$(document).on('click', '.mobile-backdrop', function() {
    $('.broad').css({ 
        'opacity': '0',
        'transform': 'translateX(100%)'
    });
    $('.mobile-backdrop').fadeOut(300);
    $('body').removeClass('show-modal');
    setTimeout(function() {
        $('.broad').removeClass('broad-nav');
        $('.broad').css('visibility', 'hidden');
    }, 300);
});

/* ===================================
    Fixed Broad Nav-Bar
 ====================================== */

$(window).on('scroll', function () {

    if($(window).width() <= 767){
        if ($(this).scrollTop() > 300) {
            $('#home').addClass('fixed-top')
            $('#home').addClass('fix-top')
            $('#pagepiling').addClass('margin-manage');
        }
        else {
            $('#home').removeClass('fixed-top')
            $('#home').removeClass('fix-top')
            $('#pagepiling').removeClass('margin-manage');
        }
    }else {
        $('#home').removeClass('fixed-top')
        $('#home').removeClass('fix-top')
    }
});

$('.overlay-body').on('click', function(e) {
    $("#close_nav").removeClass("close_nav");
    $(".side_nav").removeClass("expand_nav");
    $("#my_tog").removeClass("close_nav");
    $("#close_nav").attr("id","my_tog");
    $(".overlay-body").removeClass('show_body_overlay');
});

/* =====================================
      Nav-Bar Offset
 ====================================== */

$(".broad .nav-menu .nav-link").on("click", function (event) {
    event.preventDefault();
    var target = $(this.hash);
    if(target.length) {
        var off_set = 65;
        if($(window).width() > 768){
            off_set = 140;
        }
        $("html,body").animate({
            scrollTop: target.offset().top - off_set
        }, 800);
    }
});

/* ===================================
     Team Carousel
====================================== */

$("#team-slider").owlCarousel({
    items: 2,
    dots: false,
    nav: false,
    loop: false,
    center: false,
    autoplay: true,
    autoplayHoverPause: true,
    slideSpeed: 3000,
    paginationSpeed: 5000,
    smartSpeed: 1000,
    rewind: true,
    responsive: {
        992: {
            items: 2
        },
        600: {
            items: 2
        },
        320: {
            items: 1
        },
        280: {
            items: 1
        }
    }
});

/*===================================
    Testimonials Carousel
====================================== */

$(".owl-testimonial").owlCarousel({
    items: 3,
    margin: 30,
    dots: false,
    nav: false,
    loop:true,
    autoplay: true,
    autoplayHoverPause:true,
    responsiveClass:true,
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    responsive: {
        992: {
            items: 1
        },
        600: {
            items: 1
        },
        320: {
            items: 1
        },
    }
});

/*===================================
    Portfolio Carousel
====================================== */

$(".team-classic.owl-team").owlCarousel({
    items: 3,
    margin: 30,
    dots: false,
    nav: false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 1500,
    smartSpeed:500,
    navSpeed: true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        992: {
            items: 1
        },
        600: {
            items: 1
        },
        320: {
            items: 1
        },
        280: {
            items: 1
        }
    }
});

// Custom Portfolio OWL
$('.ini-customNextBtn').click(function () {
    var owl = $('.team-classic.owl-team');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel');
});
$('.ini-customPrevBtn').click(function () {
    var owl = $('.team-classic.owl-team');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel', [300]);
});

/* ===================================
        Mouse parallax
 ====================================== */

if ($(window).width() > 991) {
    $('#home-banner').mousemove(function(e) {
        $('[data-depth]').each(function () {
            var depth = $(this).data('depth');
            var amountMovedX = (e.pageX * -depth/4);
            var amountMovedY = (e.pageY * -depth/4);

            $(this).css({
                'transform':'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
            });
        });
    });
}

/* ===================================
        Fancy Box
====================================== */

$('[data-fancybox]').fancybox({
    protect: true,
    animationEffect: "fade",
    hash: null,
});

/* ===================================
        Animated Cursor
====================================== */

function animatedCursor() {

    if ($("#animated-cursor").length) {

        var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("cursor"),
            i = document.getElementById("cursor-loader");
        TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
            var n = window.pageYOffset || document.documentElement.scrollTop;
            e.x = t.pageX, e.y = t.pageY - n
        }), TweenLite.ticker.addEventListener("tick", function () {
            o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
        }),
            $(".animated-wrap").mouseenter(function (e) {
                TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                    scale: 2,
                    borderWidth: "1px",
                    opacity: .2
                }), TweenMax.to(i, .3, {
                    scale: 2,
                    borderWidth: "1px",
                    top: 1,
                    left: 1
                }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
            }),
            $(".animated-wrap").mouseleave(function (e) {
                TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                    scale: 1,
                    borderWidth: "2px",
                    opacity: 1
                }), TweenMax.to(i, .3, {
                    scale: 1,
                    borderWidth: "2px",
                    top: 0,
                    left: 0
                }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
            }),

            $(".testimonial-images .animated-wrap").mouseenter(function (e) {
                TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                    scale: 2,
                    borderWidth: "1px",
                    opacity: .2
                }), TweenMax.to(i, .3, {
                    scale: 2,
                    borderWidth: "1px",
                    top: 1,
                    left: 1
                }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
            }),

            $(".animated-wrap").mousemove(function (e) {
                var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                    x: t.x,
                    y: t.y
                }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                    x: (w - u.width / 2) / u.width * x,
                    y: (f - u.height / 2 - m) / u.height * x,
                    ease: Power2.easeOut
                })
            }),
            $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                TweenMax.to("#cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
            }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
            TweenMax.to("#cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
        }),$(".link").mouseenter(function (e) {
            TweenMax.to("#cursor", .2, {
                borderWidth: "0px",
                scale: 3,
                backgroundColor: "rgba(5,5,5,0.27)",
                opacity: .15
            })
        }), $(".link").mouseleave(function (e) {
            TweenMax.to("#cursor", .3, {
                borderWidth: "2px",
                scale: 1,
                backgroundColor: "rgba(12,12,12,0)",
                opacity: 1
            })
        })
    }
}

if ($(window).width() > 991) {
    setTimeout(function () {
        animatedCursor();
    }, 1000);
}