import React, { useState } from 'react';
import ImageModal from './ImageModal';
import { getAssetUrl } from '../utils/assetUrl';

const images = [
    getAssetUrl('pic/Daytime.jpg'),
    getAssetUrl('pic/Daytime (2).jpg'),
    getAssetUrl('pic/Daytime (3).jpg'),
    getAssetUrl('pic/Daytime (4).jpg'),
    getAssetUrl('pic/Daytime (5).jpg'),
    getAssetUrl('pic/Daytime (6).jpg'),
    getAssetUrl('pic/Daytime (7).jpg'),
    getAssetUrl('pic/Daytime (8).jpg'),
    getAssetUrl('pic/Daytime (9).jpg'),
    getAssetUrl('pic/Daytime (10).jpg'),
    getAssetUrl('pic/Night1.jpg'),
    getAssetUrl('pic/Night2.jpg'),
    getAssetUrl('pic/Night3.jpg'),
    getAssetUrl('pic/Night4.jpg'),
    getAssetUrl('pic/Night5.jpg'),
    getAssetUrl('pic/Night6.jpg'),
    getAssetUrl('pic/Night7.jpg'),
    getAssetUrl('pic/Night8.jpg'),
    getAssetUrl('pic/Night9.jpg')
];

const imageSets = [
    [
        'pic/Daytime.jpg',
        'pic/Daytime (2).jpg',
        'pic/Daytime (3).jpg',
        'pic/Daytime (4).jpg',
        'pic/Daytime (5).jpg',
        'pic/Daytime (6).jpg'
    ],
    [
        'pic/Daytime (7).jpg',
        'pic/Daytime (8).jpg',
        'pic/Daytime (9).jpg',
        'pic/Daytime (10).jpg',
        'pic/Night1.jpg',
        'pic/Night2.jpg'
    ],
    [
        'pic/Night3.jpg',
        'pic/Night4.jpg',
        'pic/Night5.jpg',
        'pic/Night6.jpg',
        'pic/Night7.jpg',
        'pic/Night8.jpg'
    ],
    [
        'pic/Night9.jpg',
        'pic/Daytime.jpg',
        'pic/Daytime (2).jpg',
        'pic/Night1.jpg',
        'pic/Night2.jpg',
        'pic/Daytime (3).jpg'
    ]
].map(set => set.map(path => getAssetUrl(path)));

const Portfolio = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [modalInfo, setModalInfo] = useState({ isOpen: false, currentIndex: 0 });

    const changeImageSet = (direction) => {
        setIsTransitioning(true);
        setTimeout(() => {
            let nextSet = currentSet + direction;
            if (nextSet >= imageSets.length) nextSet = 0;
            if (nextSet < 0) nextSet = imageSets.length - 1;
            setCurrentSet(nextSet);
            setIsTransitioning(false);
        }, 300);
    };

    const goToSet = (index) => {
        if (index === currentSet) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSet(index);
            setIsTransitioning(false);
        }, 300);
    };

    const openModal = (src) => {
        const index = images.indexOf(src);
        setModalInfo({ isOpen: true, currentIndex: index !== -1 ? index : 0 });
    };

    const closeModal = () => {
        setModalInfo(prev => ({ ...prev, isOpen: false }));
    };

    const navigateModal = (direction) => {
        let newIndex = modalInfo.currentIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setModalInfo(prev => ({ ...prev, currentIndex: newIndex }));
    };

    return (
        <section className="section pp-scrollable slide4 portfolio-bg" id="portfolio" data-anchor="portfolio" style={{ backgroundImage: "url('/agency-hotspot/images/portfolio-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
            <style>
                {`
                .nav-controls {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 40px;
                    position: relative;
                    z-index: 10;
                }

                .nav-btn-bottom {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                }

                .nav-btn-bottom:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: scale(1.15) translateY(-2px);
                    border-color: rgba(255, 255, 255, 0.5);
                    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
                }

                .nav-btn-bottom:active {
                    transform: scale(0.95);
                }

                .nav-btn-bottom i {
                    font-size: 1.2rem;
                }

                .nav-dots {
                    display: flex;
                    gap: 12px;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 10px 20px;
                    border-radius: 30px;
                    backdrop-filter: blur(5px);
                }

                .dot {
                    width: 10px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .dot.active {
                    background: #ffffff;
                    transform: scale(1.4);
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
                }

                .dot:hover:not(.active) {
                    background: rgba(255, 255, 255, 0.6);
                }

                .works-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 25px;
                    margin: 0 auto;
                    max-width: 1200px;
                }

                .grid-item {
                    aspect-ratio: 16/10;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    transition: all 0.4s ease;
                    border: 1px solid rgba(255,255,255,0.1);
                    cursor: pointer;
                }

                .grid-item:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                    border-color: rgba(255,255,255,0.3);
                }

                .grid-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .grid-item:hover img {
                    transform: scale(1.1);
                }

                @media (max-width: 991px) {
                    .works-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 576px) {
                    .works-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }
                    .nav-controls {
                        gap: 15px;
                    }
                    .nav-btn-bottom {
                        width: 40px;
                        height: 40px;
                    }
                }
                `}
            </style>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(3px)', zIndex: 1 }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row section-heading mb-3 text-center">
                    <div className="col-12">
                        <h2 className="main-font text-white mb-1" style={{ fontSize: '2rem', fontWeight: 600 }}>OUR WORKS</h2>
                        <p className="text-white" style={{ fontSize: '1rem', marginBottom: 0 }}>Recent Projects</p>
                    </div>
                </div>
                
                <div className="works-container">
                    <div className="works-grid wow" style={{ opacity: isTransitioning ? 0.5 : 1, transition: 'opacity 0.3s ease' }} id="worksGrid">
                        {imageSets[currentSet].map((src, index) => (
                            <div key={index} className="grid-item" onClick={() => openModal(src)}>
                                <img src={src} alt={`Work ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="nav-controls">
                    <button className="nav-btn-bottom prev-btn-bottom" onClick={() => changeImageSet(-1)}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <div className="nav-dots">
                        {imageSets.map((_, index) => (
                            <span key={index} className={`dot ${currentSet === index ? 'active' : ''}`} onClick={() => goToSet(index)}></span>
                        ))}
                    </div>
                    
                    <button className="nav-btn-bottom next-btn-bottom" onClick={() => changeImageSet(1)}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <ImageModal 
                isOpen={modalInfo.isOpen}
                imageSrc={images[modalInfo.currentIndex]}
                onClose={closeModal}
                onPrev={() => navigateModal(-1)}
                onNext={() => navigateModal(1)}
            />
        </section>
    );
};

export default Portfolio;
