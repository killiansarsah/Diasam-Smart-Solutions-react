import React from 'react';

const Counter = () => {
    const stats = [
        { label: 'Years Experience', value: '12', icon: 'las la-history' },
        { label: 'Projects Completed', value: '500', icon: 'las la-check-circle' },
        { label: 'Happy Clients', value: '200', icon: 'las la-user-friends' },
        { label: 'Service Areas', value: '15', icon: 'las la-map-marked-alt' }
    ];

    return (
        <div className="row mt-2 stats-row wow fadeInUp" data-wow-delay=".7s">
            {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3 mb-1">
                    <div className="parallax-box text-center">
                        <i className={`${stat.icon} mb-1 stat-icon`} style={{ fontSize: '1.6rem', color: '#ffffff', opacity: 0.8 }}></i>
                        <h2 className="count text-white mb-0 stat-number" style={{ fontWeight: 700, fontSize: '1.6rem' }}>{stat.value}</h2>
                        <h5 className="text-white opacity-8 stat-label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>{stat.label}</h5>
                    </div>
                </div>
            ))}
            <style jsx="true">{`
                .stats-row {
                    padding: 15px 10px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    margin: 0 5px;
                }
                @media (max-width: 767px) {
                    .stats-row {
                        padding: 10px 5px;
                        margin: 5px 0 0 0;
                    }
                    .parallax-box h2 {
                        font-size: 1.3rem !important;
                    }
                    .parallax-box i {
                        font-size: 1.3rem !important;
                    }
                }
                @media (max-height: 750px) {
                    .stats-row {
                        padding: 8px 10px;
                        margin-top: 10px !important;
                    }
                    .stat-icon {
                        font-size: 1.2rem !important;
                        margin-bottom: 2px !important;
                    }
                    .stat-number {
                        font-size: 1.2rem !important;
                    }
                    .stat-label {
                        font-size: 0.6rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Counter;
