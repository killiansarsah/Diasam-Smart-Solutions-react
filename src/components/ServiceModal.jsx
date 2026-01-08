import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

const serviceData = {
    'smart-home': {
        title: 'Smart Home',
        icon: 'las la-home',
        desc: 'We offer a unified smart home experience that puts control, protection, convenience and affordability in the palm of your hands. See, hear, and control everything from the palm of your hand while advanced automation and intelligent monitoring work quietly in the background.',
        features: [
            'Voice control with Alexa and Google Assistant',
            'Remote access from anywhere in the world',
            'Energy-efficient automation',
            'Seamless device integration'
        ],
        images: [
            '/agency-hotspot/images/services/smart-home-1.jpg',
            '/agency-hotspot/images/services/smart-home-2.jpg',
            '/agency-hotspot/images/services/smart-home-3.jpg',
            '/agency-hotspot/images/services/smart-home-4.jpg'
        ]
    },
    'home-security': {
        title: 'Home Security',
        icon: 'las la-shield-alt',
        desc: 'We offer an advanced complete home security solution, combining AI-enabled cameras, intelligent motion detection, and 24/7 professional monitoring to keep your property and loved ones safe.',
        features: [
            'AI-powered threat detection',
            '24/7 professional monitoring',
            'Smart locks and access control',
            'Real-time alerts to your phone'
        ],
        images: [
            '/agency-hotspot/images/services/home-security-1.jpg',
            '/agency-hotspot/images/services/home-security-2.jpg',
            '/agency-hotspot/images/services/home-security-3.jpg',
            '/agency-hotspot/images/services/home-security-4.jpg'
        ]
    },
    'surveillance': {
        title: 'Surveillance',
        icon: 'las la-video',
        desc: 'Our retinal 4K cameras are built with advanced technology to capture critical details with exceptional clarity—even from a distance. Radar-powered 3D Motion Detection allows you to customize motion zones to your property for highly accurate alerts.',
        features: [
            '4K Ultra HD video quality',
            'Night vision and floodlights',
            'Customizable motion zones',
            'Cloud and local storage options'
        ],
        images: [
            '/agency-hotspot/images/services/surveillance-1.jpg',
            '/agency-hotspot/images/services/surveillance-2.jpg',
            '/agency-hotspot/images/services/surveillance-3.jpg',
            '/agency-hotspot/images/services/surveillance-4.jpg'
        ]
    },
    'protection': {
        title: '24/7 Protection',
        icon: 'las la-user-shield',
        desc: 'A security system designed to fit your lifestyle - whether you are protecting an apartment, condo, small home, or business. Enjoy premium protection with door and window sensors, motion detectors, glass-break sensors, and continuous professional monitoring.',
        features: [
            'Door and window sensors',
            'Glass-break detection',
            'Cellular backup connectivity',
            'Professional monitoring team'
        ],
        images: [
            '/agency-hotspot/images/services/protection-1.jpg',
            '/agency-hotspot/images/services/protection-2.jpg',
            '/agency-hotspot/images/services/protection-3.jpg',
            '/agency-hotspot/images/services/protection-4.jpg'
        ]
    }
};

const ServiceModal = ({ isOpen, onClose, serviceKey }) => {
    if (!isOpen || !serviceKey || !serviceData[serviceKey]) return null;

    const data = serviceData[serviceKey];

    return (
        <div id="serviceModal" className="service-modal-enhanced active" style={{ display: 'flex' }}>
            <div className="service-modal-backdrop" onClick={onClose}></div>
            <div className="service-modal-container">
                <div className="service-modal-content">
                    <button className="service-modal-close" onClick={onClose}>&times;</button>
                    
                    <div className="service-modal-header">
                        <div className="service-modal-icon">
                            <i className={data.icon}></i>
                        </div>
                        <h2 className="service-modal-title">{data.title}</h2>
                    </div>
                    
                    <div className="service-modal-body">
                        <div className="row mb-4">
                            <div className="col-12">
                                <p className="service-modal-description">{data.desc}</p>
                            </div>
                        </div>
                        
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="service-images-grid">
                                    {data.images.map((img, i) => (
                                        <div key={i} className="service-image-card">
                                            <div className="service-image-card-inner">
                                                <img src={getAssetUrl(img)} alt={data.title} />
                                                <div className="service-image-overlay"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="service-modal-features">
                                    {data.features.map((feature, i) => (
                                        <div key={i} className="service-feature-item">
                                            <i className="las la-check-circle"></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
