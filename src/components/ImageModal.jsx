import React, { useEffect } from 'react';

const ImageModal = ({ isOpen, imageSrc, onClose, onPrev, onNext }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') onClose();
                if (e.key === 'ArrowLeft') onPrev();
                if (e.key === 'ArrowRight') onNext();
            };
            
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        }
    }, [isOpen, onClose, onPrev, onNext]);

    if (!isOpen) return null;

    return (
        <div 
            className="image-modal active" 
            onClick={(e) => {
                if (e.target.classList.contains('image-modal')) onClose();
            }}
        >
            <style>
                {`
                .image-modal {
                    position: fixed;
                    z-index: 100000;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.95);
                    -webkit-backdrop-filter: blur(15px);
                    backdrop-filter: blur(15px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    -webkit-animation: fadeIn 0.3s ease;
                    animation: fadeIn 0.3s ease;
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                }

                @-webkit-keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .modal-image-container {
                    position: relative;
                    max-width: 90%;
                    max-height: 90vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                    -webkit-perspective: 1000px;
                    perspective: 1000px;
                }

                .modal-image {
                    max-width: 100%;
                    max-height: 90vh;
                    object-fit: contain;
                    border-radius: 4px;
                    box-shadow: 0 0 50px rgba(0,0,0,0.5);
                    -webkit-animation: zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    animation: zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                }

                @-webkit-keyframes zoomIn {
                    from { -webkit-transform: scale3d(0.8, 0.8, 1); transform: scale3d(0.8, 0.8, 1); opacity: 0; }
                    to { -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); opacity: 1; }
                }

                @keyframes zoomIn {
                    from { -webkit-transform: scale3d(0.8, 0.8, 1); transform: scale3d(0.8, 0.8, 1); opacity: 0; }
                    to { -webkit-transform: scale3d(1, 1, 1); transform: scale3d(1, 1, 1); opacity: 1; }
                }

                .modal-close {
                    position: absolute;
                    top: 30px;
                    right: 40px;
                    color: #fff;
                    font-size: 40px;
                    font-weight: 200;
                    cursor: pointer;
                    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    z-index: 100001;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                }

                .modal-close:hover {
                    background: rgba(255,255,255,0.2);
                    -webkit-transform: rotate(90deg) scale3d(1.1, 1.1, 1);
                    transform: rotate(90deg) scale3d(1.1, 1.1, 1);
                }

                .modal-nav-btns {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                }

                .modal-nav-btn {
                    position: absolute;
                    top: 50%;
                    -webkit-transform: translate3d(0, -50%, 0);
                    transform: translate3d(0, -50%, 0);
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 20px;
                    font-size: 24px;
                    cursor: pointer;
                    -webkit-backdrop-filter: blur(10px);
                    backdrop-filter: blur(10px);
                    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    border-radius: 50%;
                    width: 65px;
                    height: 65px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    pointer-events: auto;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                }

                .modal-nav-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    -webkit-transform: translate3d(0, -50%, 0) scale3d(1.1, 1.1, 1);
                    transform: translate3d(0, -50%, 0) scale3d(1.1, 1.1, 1);
                    border-color: rgba(255,255,255,0.5);
                }

                .modal-nav-btn.prev {
                    left: 40px;
                }

                .modal-nav-btn.next {
                    right: 40px;
                }

                @media (max-width: 767px) {
                    .modal-nav-btn {
                        width: 50px;
                        height: 50px;
                        font-size: 18px;
                    }
                    .modal-nav-btn.prev { left: 15px; }
                    .modal-nav-btn.next { right: 15px; }
                    .modal-close { top: 20px; right: 20px; width: 40px; height: 40px; font-size: 30px; }
                }
                `}
            </style>
            
            <div className="modal-close" onClick={onClose}>&times;</div>
            
            <div className="modal-image-container">
                <img src={imageSrc} id="modalImage" className="modal-image" alt="Full view" />
            </div>

            <div className="modal-nav-btns">
                <button className="modal-nav-btn prev" onClick={onPrev}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="modal-nav-btn next" onClick={onNext}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
