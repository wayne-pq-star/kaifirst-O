import React, { useState, useEffect } from 'react';

const getCloudinaryUrl = (url: string, transform: string) => {
  if (!url.includes('cloudinary.com')) return url;
  const baseUpload = url.replace(/\/upload\/(?:[^\/]*\/)?/, '/upload/');
  return baseUpload.replace('/upload/', `/upload/${transform}/`);
};

interface FeaturedCarouselProps {
  images: string[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const timer = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full aspect-[2/1] flex bg-zinc-100 dark:bg-zinc-900">
      {/* Left Column - Thumbnails */}
      <div 
        className="w-1/3 h-full overflow-y-auto grid grid-cols-2 content-start scrollbar-hide border-r border-white/10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((img, index) => {
          const thumbSrc = getCloudinaryUrl(img, 'w_300,f_auto,q_auto');

          return (
            <div 
              key={index}
              className={`relative w-full aspect-[4/3] cursor-pointer transition-all duration-300 ${
                currentIndex === index 
                  ? 'opacity-100 ring-2 ring-inset ring-black dark:ring-white z-10' 
                  : 'opacity-[0.65] hover:opacity-[0.85]'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img 
                src={thumbSrc} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
                loading={index < 8 ? "eager" : "lazy"}
                // @ts-ignore
                fetchPriority={index < 8 ? "high" : "low"}
                decoding="async"
                width={300}
                height={225}
              />
            </div>
          );
        })}
      </div>

      {/* Right Column - Main Image */}
      <div 
        className="w-2/3 h-full relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((img, index) => {
          const src400 = getCloudinaryUrl(img, 'f_auto,q_auto,w_400');
          const src960 = getCloudinaryUrl(img, 'f_auto,q_auto,w_960');

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={src960}
                srcSet={`${src400} 400w, ${src960} 960w`}
                sizes="(max-width: 768px) 400px, 960px"
                alt={`Featured ${index + 1}`} 
                className="w-full h-full object-cover"
                width={960}
                height={720}
                style={{ aspectRatio: '960/720' }}
                loading={index === 0 ? "eager" : "lazy"}
                // @ts-ignore
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
              />
            </div>
          );
        })}
        
        {/* Progress Indicator (Optional) */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
          {images.map((_, index) => (
            <div 
              key={index}
              className={`h-1 transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-8 bg-white' 
                  : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
