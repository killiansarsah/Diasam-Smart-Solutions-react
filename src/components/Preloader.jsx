import { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assetUrl';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum display time for the preloader (adjust as needed)
    const minLoadTime = 1500; // 1.5 seconds
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader">
      <div style={{ textAlign: 'center' }}>
        <img 
          src={getAssetUrl('agency-hotspot/images/logo.png')} 
          alt="Loading..." 
          style={{ 
            width: '120px', 
            height: 'auto',
            marginBottom: '30px',
            animation: 'pulse 1.5s ease-in-out infinite'
          }} 
        />
        <div className="linear-activity">
          <div className="indeterminate"></div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
