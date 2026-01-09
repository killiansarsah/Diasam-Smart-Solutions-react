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
                paddingTop: '80px',
                paddingBottom: '20px'
            }}
        >
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
                                <textarea className="form-control" name="userMessage" rows="4" placeholder="Type Your Message Here"></textarea>
                                <button type="button" className="btn btn-medium btn-rounded btn-white rounded-pill w-100 contact_btn main-font">Submit Information</button>
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
