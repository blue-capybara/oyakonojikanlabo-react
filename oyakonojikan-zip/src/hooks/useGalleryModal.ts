import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const useGalleryModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryImage>({ src: '', alt: '', caption: '' });

  const openModal = (image: GalleryImage) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return {
    showModal,
    currentImage,
    openModal,
    closeModal
  };
};