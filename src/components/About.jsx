import React from 'react';

const About = () => {
    return (
        <div className="col-12 col-lg-7 mb-4 mb-lg-0 section3left">
            <div className="text-white h-100 d-flex flex-column justify-content-center about-text-container">
                <h3 className="main-font mb-2 about-title">Who We Are</h3>
                <p className="alt-font about-para">
                    We are a family-owned technology company dedicated to revolutionizing the way people interact with their homes and workplaces. With a specialization in automation and smart home solutions, we combine cutting-edge technology with personalized service to deliver innovative, efficient, and user-friendly systems that is affordable.
                </p>
                <h3 className="main-font mb-2 mt-1 about-title">Our Mission</h3>
                <p className="alt-font about-para">
                    To make home security and smart living affordable by delivering reliable security and modern technology without the inflated prices of big-name companies. Our goal is to save you money while giving you dependable, energy-efficient solutions tailored to your needs - proving that top-tier technology does not have to come with a premium price tag.
                </p>
            </div>
            <style jsx="true">{`
                /* Base styles */
                .about-text-container {
                    padding: 15px 20px;
                }
                .about-title {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-bottom: 10px;
                    letter-spacing: 0.5px;
                }
                .about-para {
                    font-size: 1rem;
                    line-height: 1.6;
                    text-align: justify;
                    margin-bottom: 15px;
                }
                
                /* Desktop Large (1400px+) */
                @media (min-width: 1400px) {
                    .about-text-container {
                        padding: 20px 30px;
                    }
                    .about-title {
                        font-size: 1.75rem !important;
                        margin-bottom: 15px !important;
                    }
                    .about-para {
                        font-size: 1.1rem !important;
                        line-height: 1.7 !important;
                        margin-bottom: 20px !important;
                    }
                }
                
                /* Desktop Standard (1200px - 1399px) */
                @media (min-width: 1200px) and (max-width: 1399px) {
                    .about-text-container {
                        padding: 15px 25px;
                    }
                    .about-title {
                        font-size: 1.5rem !important;
                        margin-bottom: 12px !important;
                    }
                    .about-para {
                        font-size: 1rem !important;
                        line-height: 1.65 !important;
                        margin-bottom: 18px !important;
                    }
                }
                
                /* Desktop Small / Laptop (992px - 1199px) */
                @media (min-width: 992px) and (max-width: 1199px) {
                    .about-text-container {
                        padding: 12px 18px;
                    }
                    .about-title {
                        font-size: 1.3rem !important;
                        margin-bottom: 10px !important;
                    }
                    .about-para {
                        font-size: 0.95rem !important;
                        line-height: 1.55 !important;
                        margin-bottom: 14px !important;
                    }
                }
                
                /* Short desktop screens (height constraint) */
                @media (min-width: 992px) and (max-height: 800px) {
                    .about-text-container {
                        padding: 8px 15px !important;
                    }
                    .about-title {
                        font-size: 1.2rem !important;
                        margin-bottom: 8px !important;
                    }
                    .about-para {
                        font-size: 0.9rem !important;
                        line-height: 1.5 !important;
                        margin-bottom: 10px !important;
                    }
                }
                
                /* Very short desktop screens */
                @media (min-width: 992px) and (max-height: 700px) {
                    .about-title {
                        font-size: 1.1rem !important;
                        margin-bottom: 6px !important;
                    }
                    .about-para {
                        font-size: 0.85rem !important;
                        line-height: 1.45 !important;
                        margin-bottom: 8px !important;
                    }
                }
                
                /* Tablet (768px - 991px) */
                @media (min-width: 768px) and (max-width: 991px) {
                    .about-text-container {
                        text-align: center;
                        padding: 15px;
                    }
                    .about-title {
                        font-size: 1.25rem !important;
                    }
                    .about-para {
                        text-align: center;
                        font-size: 0.95rem !important;
                        line-height: 1.55 !important;
                    }
                }
                
                /* Mobile (below 768px) */
                @media (max-width: 767px) {
                    .about-text-container {
                        text-align: center;
                        padding: 10px;
                    }
                    .about-title {
                        font-size: 1.15rem !important;
                    }
                    .about-para {
                        text-align: center;
                        font-size: 0.9rem !important;
                        line-height: 1.5 !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default About;
