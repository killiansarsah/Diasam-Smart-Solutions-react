import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import Counter from './components/Counter';

const App = () => {
    useEffect(() => {
        // Wait for DOM to be fully ready
        const initializePagePiling = () => {
            const pagePilingElement = document.getElementById('pagepiling');
            
            if (!pagePilingElement) {
                console.error('ERROR: #pagepiling element not found!');
                return;
            }

            console.log('Initializing PagePiling...');

            // Check if we're on mobile/tablet
            const isMobile = window.innerWidth < 768;
            
            if (isMobile) {
                console.log('Mobile detected - using normal scroll');
                // For mobile, just use normal scrolling
                document.body.style.overflow = 'auto';
                return;
            }

            // Initialize PagePiling for desktop
            if (window.$ && window.$.fn.pagepiling) {
                window.$('#pagepiling').pagepiling({
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
                    onLeave: function (index, nextIndex, direction) {
                        // Fade animations for navbar
                        window.$('.navbar-top-default').fadeOut();
                        window.$('.slider-bottom .slider-social').fadeOut();
                        window.$('.slider-copyright').fadeOut();

                        if(nextIndex >= 1 && nextIndex <= 10) {
                            setTimeout(function(){
                                window.$('.navbar-top-default').fadeIn();
                                window.$('.slider-bottom .slider-social').fadeIn();
                                window.$('.slider-copyright').fadeIn();
                            }, 600);
                        }

                        // Section-specific animations
                        if(nextIndex == 1) {
                            window.$('.section1left').addClass('slideInLeft');
                            setTimeout(() => window.$('.section1left').removeClass('slideInLeft'), 1800);
                            window.$('.section1right').addClass('slideInRight');
                            setTimeout(() => window.$('.section1right').removeClass('slideInRight'), 1800);
                        }

                        if(nextIndex == 2) {
                            window.$('.about-fadeIn').addClass('slideInLeft');
                            setTimeout(() => window.$('.about-fadeIn').removeClass('slideInLeft'), 1500);
                            window.$('.about-zoom1In').addClass('zoomIn');
                            setTimeout(() => window.$('.about-zoom1In').removeClass('zoomIn'), 1000);
                            window.$('.about-zoom2In').addClass('zoomIn');
                            setTimeout(() => window.$('.about-zoom2In').removeClass('zoomIn'), 1200);
                            window.$('.about-zoom3In').addClass('zoomIn');
                            setTimeout(() => window.$('.about-zoom3In').removeClass('zoomIn'), 1400);
                            window.$('.about-zoom4In').addClass('zoomIn');
                            setTimeout(() => window.$('.about-zoom4In').removeClass('zoomIn'), 1600);
                            window.$('.about-zoom5In').addClass('fadeInUp');
                            setTimeout(() => window.$('.about-zoom5In').removeClass('fadeInUp'), 1400);
                        }

                        if(nextIndex == 3) {
                            window.$('.section3left').addClass('slideInLeft');
                            setTimeout(() => window.$('.section3left').removeClass('slideInLeft'), 1800);
                            window.$('.section3right').addClass('slideInRight');
                            setTimeout(() => window.$('.section3right').removeClass('slideInRight'), 1800);
                            window.$('.team-fade').addClass('zoomIn');
                            setTimeout(() => window.$('.team-fade').removeClass('zoomIn'), 1600);
                            
                            // Team Counter
                            window.$('.count').each(function () {
                                window.$(this).appear(function () {
                                    window.$(this).prop('Counter', 0).animate({
                                        Counter: window.$(this).text()
                                    }, {
                                        duration: 3000,
                                        easing: 'swing',
                                        step: function (now) {
                                            window.$(this).text(Math.ceil(now));
                                        }
                                    });
                                });
                            });
                        }

                        if(nextIndex == 4) {
                            window.$('.section4left').addClass('slideInLeft');
                            setTimeout(() => window.$('.section4left').removeClass('slideInLeft'), 1800);
                            window.$('.section4right').addClass('slideInRight');
                            setTimeout(() => window.$('.section4right').removeClass('slideInRight'), 1800);
                            
                            // Portfolio Counter
                            window.$('.portfolio-counter').each(function () {
                                window.$(this).appear(function () {
                                    window.$(this).prop('Counter', 0).animate({
                                        Counter: window.$(this).text()
                                    }, {
                                        duration: 3000,
                                        easing: 'swing',
                                        step: function (now) {
                                            window.$(this).text(Math.ceil(now));
                                        }
                                    });
                                });
                            });
                        }
                    }
                });

                console.log('PagePiling initialized successfully!');
            } else {
                console.error('PagePiling library not loaded!');
            }
        };

        // Small delay to ensure all external scripts are loaded
        const timer = setTimeout(initializePagePiling, 100);

        return () => {
            clearTimeout(timer);
            // Cleanup PagePiling on unmount
            if (window.$ && window.$.fn.pagepiling && window.$('#pagepiling').data('pagepiling')) {
                window.$.fn.pagepiling.destroy('all');
            }
        };
    }, []);

    return (
        <div className="App">
            <Preloader />
            <Header />
            <div id="pagepiling">
                <Hero />
                <Services />
                <section className="section pp-scrollable slide3 team p-0" id="team" data-anchor="team" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div className="bg-overlay bg-brown opacity-8"></div>
                    <div className="container expand-container section-relative-padding">
                        {/* Section Heading */}
                        <div className="row mb-2 section-heading text-center">
                            <div className="col-12 wow" data-wow-delay=".3s">
                                <h2 className="main-font text-white mb-1 section3-main-title">About DiaSam</h2>
                                <p className="text-white section3-sub-title" style={{ opacity: 0.9 }}>Smart Solutions for Modern Living</p>
                            </div>
                        </div>
                        <div className="row align-items-stretch wow" data-wow-delay=".5s">
                            <About />
                            <Team />
                        </div>
                        <Counter />
                    </div>
                    <style jsx="true">{`
                        .section3-main-title {
                            font-size: 1.8rem;
                            font-weight: 700;
                        }
                        .section3-sub-title {
                            font-size: 1rem;
                        }
                        @media (max-height: 800px) {
                            .section-relative-padding {
                                padding-top: 10px !important;
                                padding-bottom: 30px !important;
                            }
                            .section3-main-title {
                                font-size: 1.5rem !important;
                            }
                            .section3-sub-title {
                                font-size: 0.85rem !important;
                            }
                        }
                    `}</style>
                </section>
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
};

export default App;
