import React from 'react';

import Footer from './Footer';

const Contact = () => {
    return (
        <section className="section pp-scrollable slide5 contact-sec" id="contact" data-anchor="contact" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.45) 0%, rgba(178, 34, 34, 0.45) 100%)', zIndex: 1 }}></div>
            <div className="container expand-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row">
                    <div className="col-12 col-lg-7 section6left wow" data-wow-delay=".8s">
                        <h4 className="heading text-center text-md-left main-font">Questions?<span className="d-block">How Can we help?</span></h4>
                        <form className="row contact-form wow fadeInLeft" id="contact-form-data">
                            <div className="col-12 col-lg-8" id="result"></div>
                            <div className="col-12 col-lg-8">
                                <input type="text" name="userName" placeholder="Name" className="form-control" />
                                <input type="text" name="userPhone" placeholder="Contact No" className="form-control" />
                                <input type="email" name="userEmail" placeholder="Email" className="form-control" />
                                <textarea className="form-control" name="userMessage" rows="6" placeholder="Type Your Message Here"></textarea>
                                <button type="button" className="btn btn-medium btn-rounded btn-white rounded-pill w-100 contact_btn main-font">Submit Information</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-5 section6left wow text-center text-lg-left d-flex align-items-center" data-wow-delay=".8s">
                        <div className="contact-details wow fadeInRight">
                            <h4 className="heading main-font">Office Location</h4>
                            <p className="text alt-font">We are closer than you think, contact us at your convenience with any questions or enquiries. We look forward to serving you!</p>
                            
                            <div className="contact-buttons mt-4">
                                <a href="https://www.google.com/maps/search/?api=1&query=123+Park+Avenue,+New+York,+United+States" target="_blank" rel="noopener noreferrer" className="btn btn-glass-contact mb-3" style={{ display: 'block' }}>
                                    <i className="fas fa-map-marker-alt"></i> View Location
                                </a>
                                <a href="tel:+12109714545" className="btn btn-glass-contact mb-3" style={{ display: 'block' }}>
                                    <i className="fas fa-phone"></i> Call Us
                                </a>
                                <a href="mailto:info@diasamsolutions.com" className="btn btn-glass-contact mb-3" style={{ display: 'block' }}>
                                    <i className="fas fa-envelope"></i> Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
                <Footer />
            </div>
        </section>
    );
};

export default Contact;
