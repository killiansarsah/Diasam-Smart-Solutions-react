import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="section pp-scrollable slide2 about" id="about" data-anchor="about" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
            <div className="bg-overlay" style={{ background: 'linear-gradient(135deg, rgba(4, 36, 63, 0.85) 0%, rgba(1, 46, 87, 0.85) 100%)' }}></div>
            <div className="container expand-container">
                <div className="col-12 px-0 section-heading about-fadeIn wow" data-wow-delay=".5s">
                    <h2 className="main-font">DiaSam Smart Solution</h2>
                </div>
                <div className="row pb-5">
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom1In wow" data-wow-delay=".2s">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('smart-home')} style={{ cursor: 'pointer' }}>
                            <i className="las la-home f-icon"></i>
                            <h5 className="title main-font mt-1">Smart Home</h5>
                            <p className="alt-font mt-3">We offer a unified smart home experience that puts control, protection, convenience and affordability in the palm of your hands.</p>
                        </div>
                    </div>
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom2In wow" data-wow-delay=".4s">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('home-security')} style={{ cursor: 'pointer' }}>
                            <i className="las la-shield-alt f-icon"></i>
                            <h5 className="title main-font mt-1">Home Security</h5>
                            <p className="alt-font mt-3">We offer an advanced complete home security solution, combining AI-enabled cameras, intelligent motion detection, and 24/7 professional monitoring.</p>
                        </div>
                    </div>
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom3In wow" data-wow-delay=".6s">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('surveillance')} style={{ cursor: 'pointer' }}>
                            <i className="las la-video f-icon"></i>
                            <h5 className="title main-font mt-1">Surveillance</h5>
                            <p className="alt-font mt-3">Our retinal 4K cameras are built with advanced technology to capture critical details with exceptional clarity—even from a distance.</p>
                        </div>
                    </div>
                    {/* Feature Box */}
                    <div className="col-12 col-md-3 about-zoom4In wow" data-wow-delay=".8s">
                        <div className="feature-item text-center text-md-left" onClick={() => openModal('protection')} style={{ cursor: 'pointer' }}>
                            <i className="las la-user-shield f-icon"></i>
                            <h5 className="title main-font mt-1">24/7 Protection</h5>
                            <p className="alt-font mt-3">A security system designed to fit your lifestyle—whether you’re protecting an apartment, condo, small home, or business.</p>
                        </div>
                    </div>
                </div>
                <div className="box position-relative about-zoom5In wow" data-wow-delay=".5s">
                    <div className="box-overlay"></div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7 col-lg-9">
                            <h2 className="main-font">Let's Get Started</h2>
                            <p className="py-4 py-md-0">We are a family-owned technology company dedicated to revolutionizing the way people interact with their homes and workplaces. </p>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 text-center">
                            <a href="#contact" className="btn btn-medium btn-rounded btn-trans text-capitalize">Contact Us</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 px-0 mt-4 text-center">
                    <p className="grey-color" style={{ fontSize: '1.6rem' }}><strong>Service Locations:</strong> San Antonio, Austin, Corpus Christi and surrounding areas</p>
                </div>
            </div>
            
            <ServiceModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                serviceKey={selectedService} 
            />
        </section>
    );
};

export default Services;
