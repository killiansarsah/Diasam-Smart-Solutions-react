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
                .about-title {
                    font-size: clamp(1.2rem, 2vw, 1.5rem);
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                .about-para {
                    font-size: clamp(0.9rem, 1.2vw, 1.05rem);
                    line-height: 1.55;
                    text-align: justify;
                    margin-bottom: 12px;
                }
                .about-text-container {
                    padding: 10px;
                }
                @media (max-height: 750px) {
                    .about-title {
                        font-size: 1.1rem !important;
                        margin-bottom: 5px !important;
                    }
                    .about-para {
                        font-size: 0.85rem !important;
                        line-height: 1.4 !important;
                        margin-bottom: 8px !important;
                    }
                }
                @media (max-width: 991px) {
                    .about-text-container {
                        text-align: center;
                    }
                    .about-para {
                        text-align: center;
                    }
                }
                @media (min-width: 768px) and (max-width: 991px) {
                    .about-title {
                        font-size: 1.2rem !important;
                    }
                    .about-para {
                        font-size: 0.9rem !important;
                        line-height: 1.5 !important;
                    }
                }
                @media (min-width: 1200px) {
                    .about-title {
                        font-size: 1.5rem !important;
                    }
                    .about-para {
                        font-size: 1rem !important;
                        line-height: 1.6 !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default About;
