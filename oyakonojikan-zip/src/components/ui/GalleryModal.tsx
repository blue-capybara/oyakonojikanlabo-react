import React from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  imageCaption
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="relative">
            <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
            <button 
              className="absolute top-4 right-4 bg-white bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-opacity-100 transition-colors"
              onClick={onClose}
            >
              <i className="ri-close-line ri-lg"></i>
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-700">{imageCaption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};