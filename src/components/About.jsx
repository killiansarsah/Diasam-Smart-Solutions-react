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
                    padding: 30px 35px;
                }
                .about-title {
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 800;
                    margin-bottom: 15px;
                    letter-spacing: 1px;
                    color: #ffffff;
                    text-shadow: 0 3px 6px rgba(0,0,0,0.4);
                }
                .about-para {
                    font-size: clamp(1.1rem, 1.8vw, 1.3rem);
                    line-height: 1.8;
                    text-align: justify;
                    margin-bottom: 25px;
                    color: rgba(255, 255, 255, 0.98);
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                }
                
                /* Large Desktop adjustments */
                @media (min-width: 1600px) {
                    .about-text-container {
                        padding: 40px 50px;
                    }
                    .about-title {
                        font-size: 2.4rem !important;
                    }
                    .about-para {
                        font-size: 1.4rem !important;
                        line-height: 1.9 !important;
                    }
                }

                /* Standard Desktop */
                @media (min-width: 1200px) and (max-width: 1599px) {
                    .about-text-container {
                        padding: 30px 40px;
                    }
                    .about-title {
                        font-size: 2.1rem !important;
                    }
                    .about-para {
                        font-size: 1.25rem !important;
                    }
                }
                
                /* Height-based constraints for compact viewports */
                @media (min-height: 900px) {
                    .about-para {
                        margin-bottom: 30px;
                    }
                }

                @media (max-height: 850px) {
                    .about-text-container {
                        padding: 20px 25px !important;
                    }
                    .about-title {
                        font-size: clamp(1.3rem, 2.2vw, 1.6rem) !important;
                        margin-bottom: 10px !important;
                    }
                    .about-para {
                        font-size: clamp(1rem, 1.4vw, 1.15rem) !important;
                        line-height: 1.65 !important;
                        margin-bottom: 15px !important;
                    }
                }

                /* Very tight height constraints */
                @media (max-height: 720px) {
                    .about-text-container {
                        padding: 12px 20px !important;
                    }
                    .about-title {
                        font-size: 1.2rem !important;
                        margin-bottom: 6px !important;
                    }
                    .about-para {
                        font-size: 0.92rem !important;
                        line-height: 1.5 !important;
                        margin-bottom: 10px !important;
                    }
                }
                
                /* Mobile & Tablet adjustments */
                @media (max-width: 991px) {
                    .about-text-container {
                        text-align: center;
                        padding: 25px 20px;
                    }
                    .about-para {
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default About;
