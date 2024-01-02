import React, { useEffect } from 'react';

const ImagesLoader = ({setAllImagesLoaded, imageUrls }) => {
  

  useEffect(() => {
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === imageUrls.length) {
        setAllImagesLoaded(true);
      }
    };

    const handleImageError = (error, url) => {
      console.error('Error loading image:', error);
      // If you want to handle errors and still count them towards completion, remove the console.error line.
      loadedCount += 1;
      if (loadedCount === imageUrls.length) {
        setAllImagesLoaded(true);
      }
    };

    imageUrls.forEach((url) => {
      // Check if the item is an object and extract the URL
      const imageUrl = typeof url === 'object' ? url.src : url;

      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(url, imageUrl);
      img.src = imageUrl;
    });
  }, [imageUrls]);
};

export default ImagesLoader;