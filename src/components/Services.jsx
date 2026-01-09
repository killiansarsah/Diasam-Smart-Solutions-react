import React from 'react';

const Services = ({ openModal }) => {
    return (
        <section className="section slide2 about" id="about" data-anchor="about" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <style>{`
                /* iPad Mini Landscape (1024x768) - Services Section */
                @media screen and (max-width: 1024px) and (orientation: landscape) {
                    .about {
                        height: auto !important;
                        min-height: 100vh;
                        overflow: visible !important;
                    }
                    .services-container {
                        padding-top: 15px !important;
                        padding-bottom: 15px !important;
                    }
                    .services-title {
                        font-size: clamp(22px, 4vw, 32px) !important;
                        margin-bottom: 10px !important;
                    }
                    .services-row {
                        padding-bottom: 10px !important;
                    }
                    .services-row .feature-item {
                        padding: 10px 8px !important;
                    }
                    .services-row .feature-item .f-icon {
                        font-size: 28px !important;
                    }
                    .services-row .feature-item .title {
                        font-size: 13px !important;
                        margin-top: 5px !important;
                    }
                    .services-row .feature-item p {
                        font-size: 10px !important;
                        line-height: 1.3 !important;
                        margin-top: 5px !important;
                    }
                    .get-started-box {
                        padding: 15px !important;
                        margin-top: 10px !important;
                    }
                    .get-started-title {
                        font-size: 20px !important;
                    }
                    .get-started-desc {
                        font-size: 12px !important;
                        padding: 5px 0 !important;
                    }
                    .service-locations {
                        margin-top: 10px !important;
                    }
                    .service-locations-text {
                        font-size: 12px !important;
                    }
                }
                
                /* Very short landscape screens */
                @media screen and (orientation: landscape) and (max-height: 700px) {
                    .services-row .feature-item p {
                        font-size: 9px !important;
                    }
                    .get-started-box {
                        padding: 10px 12px !important;
                    }
                    .get-started-title {
                        font-size: 18px !important;
                    }
                    .get-started-desc {
                        font-size: 11px !important;
                    }
                }
            `}</style>
            <div className="bg-overlay" style={{ background: 'linear-gradient(135deg, rgba(4, 36, 63, 0.85) 0%, rgba(1, 46, 87, 0.85) 100%)' }}></div>
            <div className="container expand-container services-container">
                <div className="col-12 px-0 section-heading about-fadeIn" style={{ visibility: 'visible' }}>
                    <h2 className="main-font services-title">DiaSam Smart Solution</h2>
                </div>
                <div className="row services-row">
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom1In">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('smart-home')} style={{ cursor: 'pointer' }}>
                            <i className="las la-home f-icon"></i>
                            <h5 className="title main-font mt-1">Smart Home</h5>
                            <p className="alt-font mt-3">We offer a unified smart home experience that puts control, protection, convenience and affordability in the palm of your hands.</p>
                        </div>
                    </div>
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom2In">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('home-security')} style={{ cursor: 'pointer' }}>
                            <i className="las la-shield-alt f-icon"></i>
                            <h5 className="title main-font mt-1">Home Security</h5>
                            <p className="alt-font mt-3">We offer an advanced complete home security solution, combining AI-enabled cameras, intelligent motion detection, and 24/7 professional monitoring.</p>
                        </div>
                    </div>
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom3In">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('surveillance')} style={{ cursor: 'pointer' }}>
                            <i className="las la-video f-icon"></i>
                            <h5 className="title main-font mt-1">Surveillance</h5>
                            <p className="alt-font mt-3">Our retinal 4K cameras are built with advanced technology to capture critical details with exceptional clarity—even from a distance.</p>
                        </div>
                    </div>
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom4In">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('protection')} style={{ cursor: 'pointer' }}>
                            <i className="las la-user-shield f-icon"></i>
                            <h5 className="title main-font mt-1">24/7 Protection</h5>
                            <p className="alt-font mt-3">A security system designed to fit your lifestyle—whether you’re protecting an apartment, condo, small home, or business.</p>
                        </div>
                    </div>
                </div>
                <div className="box position-relative about-zoom5In get-started-box">
                    <div className="box-overlay"></div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7 col-lg-9">
                            <h2 className="main-font get-started-title">Let's Get Started</h2>
                            <p className="py-4 py-md-0 get-started-desc">We are a family-owned technology company dedicated to revolutionizing the way people interact with their homes and workplaces. </p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 text-center">
                            <a href="#contact" className="btn btn-medium btn-rounded btn-trans text-capitalize">Contact Us</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 px-0 mt-4 text-center service-locations">
                    <p className="grey-color service-locations-text"><strong>Service Locations:</strong> San Antonio, Austin, Corpus Christi and surrounding areas</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
