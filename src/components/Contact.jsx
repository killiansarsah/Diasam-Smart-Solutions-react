import React from 'react';

import Footer from './Footer';

const Contact = () => {
    return (
        <section 
            className="section slide5 contact-sec" 
            id="contact" 
            data-anchor="contact" 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                position: 'relative', 
                minHeight: '100vh',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                paddingTop: '60px',
                paddingBottom: '10px'
            }}
        >
            <style>{`
                /* Contact Section - Desktop Viewport Fix */
                .contact-sec .container {
                    max-height: 85vh;
                    overflow: visible;
                }
                
                .contact-heading {
                    font-size: clamp(1.3rem, 2.5vw, 1.8rem) !important;
                    margin-bottom: 15px !important;
                }
                
                .contact-heading span {
                    font-size: inherit;
                }
                
                .contact-form-inner {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .contact-form-inner .form-control {
                    padding: 10px 15px;
                    font-size: 0.9rem;
                }
                
                .contact-form-inner textarea.form-control {
                    min-height: 80px;
                }
                
                .contact-details .heading {
                    font-size: clamp(1.2rem, 2vw, 1.5rem) !important;
                    margin-bottom: 10px !important;
                }
                
                .contact-details .text {
                    font-size: clamp(0.85rem, 1.2vw, 1rem) !important;
                    line-height: 1.5 !important;
                    margin-bottom: 15px !important;
                }
                
                .contact-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: flex-start;
                }
                
                .btn-glass-contact {
                    padding: 12px 25px !important;
                    font-size: 14px !important;
                    width: auto;
                    white-space: nowrap;
                }
                
                .btn-glass-contact i {
                    margin-right: 10px;
                    font-size: 16px;
                }
                
                /* Desktop Large (1400px+) */
                @media (min-width: 1400px) {
                    .contact-heading {
                        font-size: 2rem !important;
                    }
                    .contact-details .heading {
                        font-size: 1.6rem !important;
                    }
                    .btn-glass-contact {
                        padding: 14px 30px !important;
                        font-size: 15px !important;
                    }
                }
                
                /* Desktop Standard (1200px - 1399px) */
                @media (min-width: 1200px) and (max-width: 1399px) {
                    .contact-heading {
                        font-size: 1.7rem !important;
                    }
                    .contact-details .heading {
                        font-size: 1.4rem !important;
                    }
                }
                
                /* Desktop Small / Laptop (992px - 1199px) */
                @media (min-width: 992px) and (max-width: 1199px) {
                    .contact-heading {
                        font-size: 1.5rem !important;
                    }
                    .contact-details .heading {
                        font-size: 1.3rem !important;
                    }
                    .btn-glass-contact {
                        padding: 10px 20px !important;
                        font-size: 13px !important;
                    }
                }
                
                /* Short desktop screens (height constraint) */
                @media (min-width: 992px) and (max-height: 800px) {
                    .contact-sec {
                        padding-top: 40px !important;
                        padding-bottom: 5px !important;
                    }
                    .contact-heading {
                        font-size: 1.4rem !important;
                        margin-bottom: 10px !important;
                    }
                    .contact-form-inner {
                        gap: 8px;
                    }
                    .contact-form-inner .form-control {
                        padding: 8px 12px;
                        font-size: 0.85rem;
                    }
                    .contact-form-inner textarea.form-control {
                        min-height: 60px;
                    }
                    .contact-details .heading {
                        font-size: 1.2rem !important;
                        margin-bottom: 8px !important;
                    }
                    .contact-details .text {
                        font-size: 0.85rem !important;
                        margin-bottom: 10px !important;
                    }
                    .contact-buttons {
                        gap: 8px;
                    }
                    .btn-glass-contact {
                        padding: 10px 18px !important;
                        font-size: 12px !important;
                    }
                    .btn-glass-contact i {
                        margin-right: 8px;
                        font-size: 14px;
                    }
                }
                
                /* Very short desktop screens */
                @media (min-width: 992px) and (max-height: 700px) {
                    .contact-sec {
                        padding-top: 30px !important;
                    }
                    .contact-heading {
                        font-size: 1.2rem !important;
                        margin-bottom: 8px !important;
                    }
                    .contact-form-inner {
                        gap: 6px;
                    }
                    .contact-form-inner .form-control {
                        padding: 6px 10px;
                        font-size: 0.8rem;
                    }
                    .contact-form-inner textarea.form-control {
                        min-height: 50px;
                    }
                    .contact-details .heading {
                        font-size: 1.1rem !important;
                    }
                    .contact-details .text {
                        font-size: 0.8rem !important;
                        margin-bottom: 8px !important;
                    }
                    .contact-buttons {
                        gap: 6px;
                    }
                    .btn-glass-contact {
                        padding: 8px 15px !important;
                        font-size: 11px !important;
                    }
                    .btn-glass-contact i {
                        margin-right: 6px;
                        font-size: 12px;
                    }
                }
            `}</style>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.45) 0%, rgba(178, 34, 34, 0.45) 100%)', zIndex: 1 }}></div>
            <div className="container expand-container" style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center' }}>
                <div className="row w-100 align-items-center">
                    {/* Contact Form - Left Side */}
                    <div className="col-12 col-md-7 col-lg-7 section6left wow mb-4 mb-md-0" data-wow-delay=".8s">
                        <h4 className="heading text-center text-md-left main-font contact-heading">
                            Questions?<span className="d-block">How Can we help?</span>
                        </h4>
                        <form className="contact-form wow fadeInLeft" id="contact-form-data">
                            <div id="result"></div>
                            <div className="contact-form-inner">
                                <input type="text" name="userName" placeholder="Name" className="form-control" />
                                <input type="text" name="userPhone" placeholder="Contact No" className="form-control" />
                                <input type="email" name="userEmail" placeholder="Email" className="form-control" />
                                <input type="text" name="userSubject" placeholder="Subject" className="form-control" />
                                <textarea className="form-control" name="userMessage" rows="4" placeholder="Type Your Message Here"></textarea>
                                <button type="button" className="btn btn-medium btn-rounded btn-white rounded-pill w-100 contact_btn main-font">
                                    <i className="fas fa-spinner fa-spin d-none mr-2"></i>
                                    Submit Information
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Office Location - Right Side */}
                    <div className="col-12 col-md-5 col-lg-5 section6left wow text-center text-md-left" data-wow-delay=".8s">
                        <div className="contact-details wow fadeInRight">
                            <h4 className="heading main-font">Office Location</h4>
                            <p className="text alt-font">We are closer than you think, contact us at your convenience with any questions or enquiries. We look forward to serving you!</p>
                            
                            <div className="contact-buttons mt-4">
                                <a href="https://www.google.com/maps/search/?api=1&query=123+Park+Avenue,+New+York,+United+States" target="_blank" rel="noopener noreferrer" className="btn btn-glass-contact mb-3">
                                    <i className="fas fa-map-marker-alt"></i> View Location
                                </a>
                                <a href="tel:+12109714545" className="btn btn-glass-contact mb-3">
                                    <i className="fas fa-phone"></i> Call Us
                                </a>
                                <a href="mailto:info@diasamsolutions.com" className="btn btn-glass-contact mb-3">
                                    <i className="fas fa-envelope"></i> Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Footer />
            </div>
        </section>
    );
};

export default Contact;
