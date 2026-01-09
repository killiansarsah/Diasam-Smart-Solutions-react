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
                <div className="text-center mb-2 team-header-box">
                    <div style={{ display: 'inline-block', position: 'relative' }}>
                        <h3 className="main-font text-white mb-2 team-section-title" style={{ fontWeight: 600, letterSpacing: '1px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Meet Our Team</h3>
                        <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)', margin: '0 auto', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '5px', height: '5px', background: '#ffffff', borderRadius: '50%' }}></div>
                        </div>
                    </div>
                    <p className="alt-font text-white mt-1" style={{ fontSize: '0.8rem', opacity: 0.8, fontStyle: 'italic', textAlign: 'center', margin: '0 auto' }}>Leadership & Innovation</p>
                </div>
                
                {/* Desktop: Show both cards side by side */}
                <div className="d-none d-md-block">
                    <div className="row justify-content-center px-1">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-12 col-md-6 mb-2">
                                <div className="team-card-professional" style={{ background: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', transition: 'all 0.4s ease', position: 'relative', height: '40vh', minHeight: '300px', maxHeight: '380px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                                        <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: member.imagePosition }} />
                                    </div>
                                    <div style={{ padding: '10px 5px', textAlign: 'center', background: '#ffffff' }}>
                                        <h4 className="main-font" style={{ color: '#2c3e50', fontSize: '1rem', fontWeight: 600, marginBottom: '2px' }}>{member.name}</h4>
                                        <div className="role-badge" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)', color: '#ffffff', padding: '2px 10px', borderRadius: '15px', fontSize: '0.7rem' }}>{member.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Mobile: Auto-rotating single card */}
                <div className="d-block d-md-none">
                    <div className="team-carousel-mobile" style={{ position: 'relative', overflow: 'hidden' }}>
                        <div className="team-card-professional" style={{ background: '#ffffff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.15)', transition: 'all 0.5s ease', position: 'relative', height: '45vh', minHeight: '320px', maxHeight: '380px', display: 'flex', flexDirection: 'column', margin: '0 auto', maxWidth: '260px' }}>
                            <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                                <img 
                                    src={teamMembers[currentIndex].image} 
                                    alt={teamMembers[currentIndex].name} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: teamMembers[currentIndex].imagePosition, transition: 'opacity 0.5s ease' }} 
                                />
                            </div>
                            <div style={{ padding: '10px', textAlign: 'center', background: '#ffffff' }}>
                                <h4 className="main-font" style={{ color: '#2c3e50', fontSize: '1.1rem', fontWeight: 600, marginBottom: '4px' }}>{teamMembers[currentIndex].name}</h4>
                                <div className="role-badge" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)', color: '#ffffff', padding: '3px 12px', borderRadius: '20px', fontSize: '0.75rem' }}>{teamMembers[currentIndex].role}</div>
                            </div>
                        </div>
                        
                        {/* Carousel indicators */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '15px' }}>
                            {teamMembers.map((_, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    style={{
                                        width: currentIndex === index ? '20px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
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
            <style jsx="true">{`
                /* Base desktop styling */
                .team-section-title {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .team-card-professional h4 {
                    font-size: clamp(1rem, 1.5vw, 1.25rem) !important;
                }
                .team-card-professional .role-badge {
                    font-size: clamp(0.7rem, 1vw, 0.85rem) !important;
                    padding: 4px 12px !important;
                }
                
                /* Desktop Large (1400px+) */
                @media (min-width: 1400px) {
                    .team-section-title {
                        font-size: 2rem !important;
                    }
                    .team-card-professional {
                        max-height: 440px !important;
                    }
                    .team-header-box {
                        margin-bottom: 15px !important;
                    }
                }
                
                /* Desktop Standard (1200px - 1399px) */
                @media (min-width: 1200px) and (max-width: 1399px) {
                    .team-section-title {
                        font-size: 1.8rem !important;
                    }
                    .team-card-professional {
                        max-height: 420px !important;
                    }
                }
                
                /* Desktop Small / Laptop (992px - 1199px) */
                @media (min-width: 992px) and (max-width: 1199px) {
                    .team-section-title {
                        font-size: 1.5rem !important;
                    }
                    .team-card-professional {
                        max-height: 380px !important;
                    }
                }
                
                /* Short desktop screens */
                @media (min-width: 992px) and (max-height: 850px) {
                    .team-header-box {
                        margin-bottom: 10px !important;
                    }
                    .team-section-title {
                        font-size: 1.4rem !important;
                    }
                    .team-card-professional {
                        height: 38vh !important;
                        min-height: 300px !important;
                        max-height: 360px !important;
                    }
                }
                
                /* Very short desktop screens */
                @media (min-width: 992px) and (max-height: 720px) {
                    .team-section-title {
                        font-size: 1.25rem !important;
                        margin-bottom: 5px !important;
                    }
                    .team-card-professional {
                        height: 35vh !important;
                        min-height: 250px !important;
                        max-height: 310px !important;
                    }
                }
                
                /* Tablet and below */
                @media (max-width: 991px) {
                    .team-section-title {
                        font-size: 1.5rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Team;
