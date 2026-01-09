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
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !serviceKey || !serviceData[serviceKey]) return null;

    const data = serviceData[serviceKey];

    return (
        <div id="serviceModal" className="service-modal-enhanced active">
            <style dangerouslySetInnerHTML={{ __html: `
                .service-modal-enhanced {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000000;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    -webkit-overflow-scrolling: touch;
                    overscroll-behavior: contain;
                }

                .service-modal-enhanced.active {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 1;
                }

                .service-modal-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }

                .service-modal-container {
                    position: relative;
                    width: 90%;
                    max-width: 900px;
                    max-height: 85vh;
                    overflow-y: auto;
                    overflow-x: hidden;
                    z-index: 10000001;
                    animation: slideUpFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    scrollbar-width: thin;
                    scrollbar-color: rgba(102, 126, 234, 0.5) rgba(255, 255, 255, 0.1);
                }

                @keyframes slideUpFadeIn {
                    from { opacity: 0; transform: translateY(50px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                .service-modal-content {
                    background: linear-gradient(135deg, rgba(15, 32, 58, 0.98) 0%, rgba(32, 58, 95, 0.98) 100%);
                    border-radius: 25px;
                    padding: 40px;
                    border: 2px solid rgba(255, 255, 255, 0.15);
                    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6), 0 15px 50px rgba(102, 126, 234, 0.4);
                    backdrop-filter: blur(25px);
                    position: relative;
                }

                .service-modal-close {
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    background: rgba(255, 68, 87, 0.25);
                    border: 2px solid rgba(255, 68, 87, 0.4);
                    color: #fff;
                    font-size: 32px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000002;
                }

                .service-modal-close:hover {
                    transform: rotate(90deg) scale(1.1);
                    background: rgba(255, 68, 87, 0.4);
                }

                .service-modal-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .service-modal-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 50%;
                    margin-bottom: 15px;
                }

                .service-modal-icon i {
                    font-size: 2.5rem;
                    color: #fff;
                }

                .service-modal-title {
                    font-size: 2rem;
                    font-weight: 800;
                    margin: 0;
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .service-modal-description {
                    color: rgba(255, 255, 255, 0.95);
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 30px;
                    text-align: center;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .service-images-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 15px;
                    margin: 0 auto 30px;
                    max-width: 600px;
                }

                .service-image-card {
                    border-radius: 15px;
                    overflow: hidden;
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    aspect-ratio: 1;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                    transition: all 0.4s ease;
                }

                .service-image-card:hover {
                    transform: translateY(-5px) scale(1.03);
                    border-color: rgba(102, 126, 234, 0.5);
                    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
                }

                .service-image-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .service-modal-features {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .service-feature-item {
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.08);
                    padding: 14px 18px;
                    border-radius: 12px;
                    border-left: 4px solid #667eea;
                    transition: all 0.3s ease;
                }

                .service-feature-item:hover {
                    transform: translateX(5px);
                    background: rgba(255, 255, 255, 0.12);
                    border-left-color: #f5576c;
                }

                @media (max-width: 767px) {
                    .service-modal-content { padding: 60px 20px 30px; }
                    .service-modal-title { font-size: 1.6rem; }
                    .service-images-grid { grid-template-columns: 1fr; }
                    .service-modal-container { max-height: 90vh; }
                }
            ` }} />
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
                        <p className="service-modal-description">{data.desc}</p>
                        
                        <div className="service-images-grid">
                            {data.images.map((img, i) => (
                                <div key={i} className="service-image-card">
                                    <img src={getAssetUrl(img)} alt={data.title} />
                                </div>
                            ))}
                        </div>
                        
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
    );
};

export default ServiceModal;
