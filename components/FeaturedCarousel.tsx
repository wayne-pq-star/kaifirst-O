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
  const [isInteractive, setIsInteractive] = useState(false);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  // 首頁第一張 LCP 固定 URL
  const lcpImage = images[0];
  const lcpSrcMobile = getCloudinaryUrl(lcpImage, 'f_auto,q_auto:eco,w_600');
  const lcpSrcDesktop = getCloudinaryUrl(lcpImage, 'f_auto,q_auto:eco,w_960');

  // 輪播延遲掛載，確保首幀零 JS 阻塞
  useEffect(() => {
    const activateInteractive = () => setIsInteractive(true);
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      const idleId = window.requestIdleCallback(activateInteractive, { timeout: 2500 });
      // @ts-ignore
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timer = setTimeout(activateInteractive, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // 輪播自動播放 (僅在進入互動模式後啟動)
  useEffect(() => {
    if (!isInteractive || isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isInteractive, isPaused, images.length]);

  // 縮圖延遲監聽 (滾動或互動時加載)
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
      { rootMargin: '200px' }
    );
    observer.observe(thumbnailsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleThumbnailClick = (index: number) => {
    setIsInteractive(true);
    setCurrentIndex(index);
  };

  return (
    <div 
      className="w-full aspect-[2/1] flex bg-zinc-100 dark:bg-zinc-900"
      style={{ contentVisibility: 'auto' }}
    >
      {/* Left Column - Thumbnails */}
      <div 
        ref={thumbnailsRef}
        className="w-1/3 h-full overflow-y-auto grid grid-cols-2 content-start scrollbar-hide border-r border-white/10"
        onMouseEnter={() => { setIsInteractive(true); setIsPaused(true); }}
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
        onMouseEnter={() => { setIsInteractive(true); setIsPaused(true); }}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 首張圖：純 HTML 優先即時渲染 (保證 LCP 零延遲，絕不等待動態渲染或 JS) */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={lcpSrcMobile}
            srcSet={`${lcpSrcMobile} 600w, ${lcpSrcDesktop} 960w`}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Featured 1" 
            className="w-full h-full object-cover"
            width={960}
            height={540}
            style={{ aspectRatio: '960/720' }}
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        {/* 第 2 張之後的主圖：僅在進入互動模式後動態掛載 */}
        {isInteractive && images.slice(1).map((img, sliceIdx) => {
          const index = sliceIdx + 1;
          const srcMobile = getCloudinaryUrl(img, 'f_auto,q_auto,w_400');
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
                srcSet={`${srcMobile} 400w, ${srcDesktop} 960w`}
                sizes="(max-width: 768px) 100vw, 60vw"
                alt={`Featured ${index + 1}`} 
                className="w-full h-full object-cover"
                width={960}
                height={720}
                style={{ aspectRatio: '960/720' }}
                loading="lazy"
                // @ts-ignore
                fetchPriority="low"
                decoding="async"
              />
            </div>
          );
        })}
        
        {/* Progress Indicator */}
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
