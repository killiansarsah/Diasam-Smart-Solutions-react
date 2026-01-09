import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assetUrl';

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const teamMembers = [
        {
            name: "Sam G",
            role: "CEO",
            image: getAssetUrl('agency-hotspot/images/Fafa.jpeg'),
            imagePosition: "center 50%"
        },
        {
            name: "Killian S",
            role: "Team Member",
            image: getAssetUrl('agency-hotspot/images/killian.jpeg'),
            imagePosition: "center 50%"
        }
    ];
    
    // Auto-rotate every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, [teamMembers.length]);
    
    return (
        <div className="col-12 col-lg-5 section3right">
            <div className="team-fade h-100 d-flex flex-column justify-content-center">
                {/* Header - centered on all devices */}
                <div className="text-center mb-4">
                    <div style={{ display: 'inline-block', position: 'relative' }}>
                        <h3 className="main-font text-white mb-3" style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '1px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Meet Our Team</h3>
                        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)', margin: '0 auto', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', background: '#ffffff', borderRadius: '50%', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>
                        </div>
                    </div>
                    <p className="alt-font text-white mt-2" style={{ fontSize: '0.95rem', opacity: 0.8, fontStyle: 'italic', textAlign: 'center', margin: '0 auto' }}>Leadership & Innovation</p>
                </div>
                
                {/* Desktop: Show both cards side by side */}
                <div className="d-none d-md-block">
                    <div className="row justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-12 col-md-6 mb-4">
                                <div className="team-card-professional" style={{ background: '#ffffff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 45px rgba(0,0,0,0.18)', transition: 'all 0.4s ease', position: 'relative', height: '500px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                                        <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.imagePosition }} />
                                    </div>
                                    <div style={{ padding: '20px', textAlign: 'center', background: '#ffffff' }}>
                                        <h4 className="main-font" style={{ color: '#2c3e50', fontSize: '1.3rem', fontWeight: 600, marginBottom: '8px' }}>{member.name}</h4>
                                        <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)', color: '#ffffff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>{member.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Mobile: Auto-rotating single card */}
                <div className="d-block d-md-none">
                    <div className="team-carousel-mobile" style={{ position: 'relative', overflow: 'hidden' }}>
                        <div className="team-card-professional" style={{ background: '#ffffff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 45px rgba(0,0,0,0.18)', transition: 'all 0.5s ease', position: 'relative', height: '550px', display: 'flex', flexDirection: 'column', margin: '0 auto', maxWidth: '300px' }}>
                            <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                                <img 
                                    src={teamMembers[currentIndex].image} 
                                    alt={teamMembers[currentIndex].name} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: teamMembers[currentIndex].imagePosition, transition: 'opacity 0.5s ease' }} 
                                />
                            </div>
                            <div style={{ padding: '20px', textAlign: 'center', background: '#ffffff' }}>
                                <h4 className="main-font" style={{ color: '#2c3e50', fontSize: '1.3rem', fontWeight: 600, marginBottom: '8px' }}>{teamMembers[currentIndex].name}</h4>
                                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)', color: '#ffffff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>{teamMembers[currentIndex].role}</div>
                            </div>
                        </div>
                        
                        {/* Carousel indicators */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                            {teamMembers.map((_, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    style={{
                                        width: currentIndex === index ? '24px' : '10px',
                                        height: '10px',
                                        borderRadius: '5px',
                                        background: currentIndex === index ? '#ffffff' : 'rgba(255,255,255,0.4)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        padding: 0
                                    }}
                                    aria-label={`View ${teamMembers[index].name}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
