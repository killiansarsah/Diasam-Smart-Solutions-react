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
                    backdrop-filter: blur(15px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease;
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
                }

                .modal-image {
                    max-width: 100%;
                    max-height: 90vh;
                    object-fit: contain;
                    border-radius: 4px;
                    box-shadow: 0 0 50px rgba(0,0,0,0.5);
                    animation: zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .modal-close {
                    position: absolute;
                    top: 30px;
                    right: 40px;
                    color: #fff;
                    font-size: 40px;
                    font-weight: 200;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 100001;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                }

                .modal-close:hover {
                    background: rgba(255,255,255,0.2);
                    transform: rotate(90deg) scale(1.1);
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
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 20px;
                    font-size: 24px;
                    cursor: pointer;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                    border-radius: 50%;
                    width: 65px;
                    height: 65px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    pointer-events: auto;
                }

                .modal-nav-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-50%) scale(1.1);
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
