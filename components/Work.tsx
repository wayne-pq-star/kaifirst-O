import React, { useState, useEffect } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../constants';

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
  aspectRatio?: string;
  projectTitle: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, index, aspectRatio, projectTitle }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // LQIP logic: For all Cloudinary images
  const isCloudinary = src.includes('res.cloudinary.com');
  let lqipSrc = '';
  
  if (isCloudinary) {
      // Inject w_50,e_blur:1000
      // Handle both /upload/ and /upload/f_auto,q_auto/ cases
      if (src.includes('/upload/f_auto,q_auto/')) {
        lqipSrc = src.replace('/upload/f_auto,q_auto/', '/upload/w_50,e_blur:1000/f_auto,q_auto/');
      } else {
        lqipSrc = src.replace('/upload/', '/upload/w_50,e_blur:1000/');
      }
  }

  return (
    <div 
      className="group overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative w-full"
      style={aspectRatio ? { aspectRatio } : {}}
    >
      {lqipSrc && (
        <img
          src={lqipSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />
      )}
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-auto ${lqipSrc ? `transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}` : ''}`}
        loading={index < 2 ? "eager" : "lazy"}
        // @ts-ignore - React 19 supports fetchPriority but types might not be updated yet
        fetchPriority={index < 2 ? "high" : "auto"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === ProjectCategory.ALL
    ? PROJECTS.filter(p => !p.excludeFromAll && p.id !== 'public-facilities' && p.id !== 'morning-light' && p.id !== 'office-xingzhu' && p.id !== 'experience-cruise' && p.id !== 'tgl-rs-ls-visibility' && p.id !== 'jw-display' && p.id !== 'ds-display' && p.id !== 'wine-display-pillar' && p.id !== 'wine-event-stand' && p.id !== 'wine-display-window' && p.id !== 'wine-accessories' && p.id !== 'kai-first-living-room' && p.id !== 'kai-first-study-room' && p.id !== 'kai-first-living-room-original' && p.id !== 'kai-first-dining-room' && p.id !== 'kai-first-living-room-2' && p.id !== 'kai-first-residence' && p.id !== 'kai-first-living-room-3' && p.id !== 'kai-first-bedroom' && p.id !== 'kai-first-floor-plan' && p.id !== 'kai-first-ai-application' && p.id !== 'kai-first-panorama' && p.id !== 'white-studio' && p.id !== 'kai-first-color-floor-plan' && p.id !== 'elegant-residence' && p.id !== 'unique-craftsmanship' && p.id !== 'silent-element' && p.id !== 'sunny-royalty' && p.id !== 'endorse-classical' && p.id !== 'mind-flow' && p.id !== 'light-era')
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories = Object.values(ProjectCategory);

  // Simple mapping for category translation
  const categoryLabels: Record<string, string> = {
    [ProjectCategory.ALL]: 'ALL 全部',
    [ProjectCategory.RESIDENTIAL]: '￭ RESIDENTIAL 住宅',
    [ProjectCategory.COMMERCIAL]: '￭ COMMERCIAL 商業',
    [ProjectCategory.AWARDS]: '￭ AWARDS 得獎作品',
    [ProjectCategory.AI]: '￭ AI 創意',
    [ProjectCategory.FIRST_DESIGN]: '￭ First 初設計',
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <section id="work" className="pt-4 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-8">
        <div>
          <span className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">PORTFOLIO 作品集</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase">SELECTED WORKS</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-x-6 gap-y-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] tracking-[0.25em] transition-all pb-1 border-b ${
                activeCategory === cat ? 'border-black dark:border-white opacity-100' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isHiddenOnMobile = 
            activeCategory === ProjectCategory.ALL && 
            ['1', 'things-stars-shift', 'guinness-station'].includes(project.id);
            
          return (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${isHiddenOnMobile ? 'hidden md:block' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-2 bg-zinc-100 dark:bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${project.customImageClass || ''}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] tracking-[0.4em] border border-white/40 px-6 py-3 uppercase text-center">
                  VIEW GALLERY 作品賞析
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 mr-4">
                <h3 className="text-sm font-medium tracking-widest mb-1 uppercase whitespace-pre-line">{project.title}</h3>
                <p className="text-[10px] opacity-50 tracking-widest uppercase whitespace-pre-line">{project.location}</p>
              </div>
              <span className="text-[10px] opacity-30 font-light flex-shrink-0">{project.year}</span>
            </div>
          </div>
          );
        })}
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-black overflow-y-auto animate-fade-in">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 w-full px-6 py-8 flex justify-between items-center bg-white/90 dark:bg-black/90 backdrop-blur-md">
            <div>
              <span className="text-[10px] tracking-[0.4em] opacity-40 block mb-1 uppercase">{selectedProject.category} 專案類別</span>
              <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase whitespace-pre-line">{selectedProject.title}</h2>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mt-1">
                <p className="text-[10px] opacity-50 tracking-[0.2em] uppercase whitespace-pre-line">{selectedProject.location}</p>
                <span className="hidden md:inline text-[10px] opacity-50">•</span>
                <p className="text-[10px] opacity-50 tracking-[0.2em] uppercase">{selectedProject.year}</p>
              </div>
              
              {/* Project Attribution - Custom */}
              {selectedProject.attribution && (
                <p className="text-[10px] opacity-50 tracking-[0.2em] uppercase mt-1">
                  {selectedProject.attribution}
                </p>
              )}
              
              {/* Project Attribution - Star Leaf Design */}
              {[
                'Pursuit of Light 逐光誓影',
                'Profound Gathering 行雅文斂',
                'Restrained Charm 沉斂深韻'
              ].includes(selectedProject.title) && (
                <p className="text-[10px] opacity-50 tracking-[0.2em] uppercase mt-1">
                  本專案為任職於星葉設計期間，由本人擔任室內設計師主導執行之作品
                </p>
              )}
              
              {/* Project Attribution - Feng Ge Design */}
              {[
                'Elegant Collection 宏暉雅集',
                'Unique Craftsmanship 匠心獨印',
                'sunny Royalty 尊御上晴',
                'ENDORSE classical 欣穎古典',
                'mind flow 境心•流',
                'light era 實光爍際',
                'public facilities•尊御',
                'Office•興築'
              ].includes(selectedProject.title) && (
                <p className="text-[10px] opacity-50 tracking-[0.2em] uppercase mt-1">
                  本專案為任職於峰閣設計期間，由本人擔任室內設計師主導執行之作品
                </p>
              )}

              {/* Project Attribution - Jun Dian Design */}
              {[
                'guinness Drinks and Promotion Station',
                'wall Display and night club',
                'RS LS visibility guideline',
                'wine Display window & wall bay',
                'DS-wall bay display',
                'wine display podium',
                'wine event stand',
                'wine Accessories'
              ].includes(selectedProject.title) && (
                <p className="text-[10px] opacity-50 tracking-[0.2em] uppercase mt-1">
                   本專案為任職於均典設計期間，由本人擔任室內設計助理主導設計之作品
                </p>
              )}
            </div>
            <button 
              onClick={() => setSelectedProject(null)}
              className="group flex items-center space-x-3 text-[10px] tracking-[0.4em] font-bold hover:opacity-50 transition-opacity uppercase"
            >
              <span>CLOSE 關閉</span>
              <div className="w-8 h-[1px] bg-black dark:bg-white relative">
                <div className="absolute top-0 left-0 w-full h-full rotate-45 origin-center"></div>
                <div className="absolute top-0 left-0 w-full h-full -rotate-45 origin-center"></div>
              </div>
            </button>
          </div>

          {/* Modal Content - Images */}
          <div className="max-w-5xl mx-auto px-6 pb-32 pt-12 space-y-8">
            {selectedProject.gallery ? (
              <div className="space-y-8">
                {selectedProject.gallery.map((img, idx) => (
                  <div key={idx}>
                    <GalleryImage 
                      src={img}
                      alt={`${selectedProject.title} detail ${idx + 1}`}
                      index={idx}
                      projectTitle={selectedProject.title}
                      aspectRatio={
                        idx === 0 && selectedProject.firstImageRatio 
                          ? selectedProject.firstImageRatio 
                          : idx === 1 && selectedProject.secondImageRatio
                            ? selectedProject.secondImageRatio
                            : idx === 2 && selectedProject.thirdImageRatio
                              ? selectedProject.thirdImageRatio
                              : undefined
                      }
                    />
                    {/* Disclaimer right after the last image */}
                    {idx === selectedProject.gallery!.length - 1 && (
                      (selectedProject.footerAttribution ||
                      selectedProject.title.includes('Profound Gathering') || 
                      selectedProject.title.includes('Pursuit of Light') ||
                      selectedProject.title.includes('Restrained Charm') ||
                      selectedProject.title.includes('guinness Drinks and Promotion Station') ||
                      selectedProject.title.includes('Unique Craftsmanship') ||
                      selectedProject.title.includes('sunny Royalty') ||
                      selectedProject.title.includes('ENDORSE classical') ||
                      selectedProject.title.includes('mind flow') ||
                      selectedProject.title.includes('light era') ||
                      selectedProject.title.includes('Elegant Collection') ||
                      selectedProject.title.includes('public facilities•尊御') ||
                      selectedProject.title.includes('wall Display and night club') ||
                      selectedProject.title.includes('Office•興築') ||
                      selectedProject.title.includes('RS LS visibility guideline') ||
                      selectedProject.title.includes('DS-wall bay display') ||
                      selectedProject.title.includes('wine display podium') ||
                      selectedProject.title.includes('wine event stand') ||
                      selectedProject.title.includes('wine Display window & wall bay') ||
                      selectedProject.title.includes('wine Accessories')) && (
                      <div className="w-full text-right mt-4">
                         <span className="text-[10px] tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase">
                           {selectedProject.footerAttribution || "此專案為任職公司時期之作品"}
                         </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-40 text-center opacity-30 tracking-[0.4em] text-xs uppercase">
                Detailed views coming soon... 詳情即將推出...
              </div>
            )}
            
            <div className="flex justify-center w-full pt-12">
               <button 
                onClick={() => setSelectedProject(null)}
                className="text-[10px] tracking-[0.4em] border border-black dark:border-white px-12 py-5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase"
              >
                BACK TO PROJECTS 返回專案列表
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;