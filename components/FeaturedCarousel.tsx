import React, { useState, useEffect, useRef } from 'react';

const getCloudinaryUrl = (url: string, transform: string) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  if (/\/upload\/[^/]+\/v\d+\//.test(url)) {
    return url.replace(/\/upload\/[^/]+\/(v\d+\/.*)/, `/upload/${transform}/$1`);
  }
  if (/\/upload\/v\d+\//.test(url)) {
    return url.replace(/\/upload\/(v\d+\/.*)/, `/upload/${transform}/$1`);
  }
  return url.replace(/\/upload\/(.*)/, `/upload/${transform}/$1`);
};

interface FeaturedCarouselProps {
  images: string[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (!thumbnailsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setThumbnailsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );
    observer.observe(thumbnailsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full aspect-[2/1] flex bg-zinc-100 dark:bg-zinc-900">
      {/* Left Column - Thumbnails */}
      <div 
        ref={thumbnailsRef}
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
              {thumbnailsVisible ? (
                <img 
                  src={thumbSrc} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  // @ts-ignore
                  fetchPriority="low"
                  decoding="async"
                  width={300}
                  height={225}
                />
              ) : (
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800" />
              )}
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
          const isLcp = index === 0;
          // LCP image uses w_300,q_auto:low for mobile (or w_400,f_auto,q_auto:low)
          const srcMobile = isLcp 
            ? getCloudinaryUrl(img, 'f_auto,q_auto:low,w_300')
            : getCloudinaryUrl(img, 'f_auto,q_auto,w_400');
          const srcDesktop = getCloudinaryUrl(img, 'f_auto,q_auto,w_960');

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={srcDesktop}
                srcSet={`${srcMobile} 300w, ${srcDesktop} 960w`}
                sizes="(max-width: 768px) 300px, 960px"
                alt={`Featured ${index + 1}`} 
                className="w-full h-full object-cover"
                width={960}
                height={720}
                style={{ aspectRatio: '960/720' }}
                loading={isLcp ? "eager" : "lazy"}
                // @ts-ignore
                fetchPriority={isLcp ? "high" : "low"}
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
