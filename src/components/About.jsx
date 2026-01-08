import React from 'react';

const About = () => {
    return (
        <div className="col-12 col-lg-7 mb-4 mb-lg-0">
            <div className="text-white h-100 d-flex flex-column justify-content-center">
                <h3 className="main-font mb-3" style={{ fontSize: '1.8rem', fontWeight: 600 }}>Who We Are</h3>
                <p className="alt-font" style={{ fontSize: '1.15rem', lineHeight: 1.8, textAlign: 'justify', marginBottom: '20px' }}>
                    We are a family-owned technology company dedicated to revolutionizing the way people interact with their homes and workplaces. With a specialization in automation and smart home solutions, we combine cutting-edge technology with personalized service to deliver innovative, efficient, and user-friendly systems that is affordable.
                </p>
                <h3 className="main-font mb-3 mt-2" style={{ fontSize: '1.8rem', fontWeight: 600 }}>Our Mission</h3>
                <p className="alt-font" style={{ fontSize: '1.15rem', lineHeight: 1.8, textAlign: 'justify', marginBottom: '20px' }}>
                    To make home security and smart living affordable by delivering reliable security and modern technology without the inflated prices of big-name companies. Our goal is to save you money while giving you dependable, energy-efficient solutions tailored to your needs—proving that top-tier technology doesn’t have to come with a premium price tag.
                </p>
            </div>
        </div>
    );
};

export default About;
