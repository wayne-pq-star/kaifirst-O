import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 4;

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedPost || isViewAllOpen || selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedPost, isViewAllOpen, selectedVideo]);

  // Initial posts to show (first 2)
  const initialPosts = BLOG_POSTS.slice(0, 2);

  // Pagination logic for View All
  const totalPages = 3; // Hardcoded as requested
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = BLOG_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section id="blog" className="scroll-mt-24 pt-10 pb-10 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <span className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">INSIGHTS 洞察</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase">LATEST BLOG 最新文章</h2>
          </div>
          <button 
            onClick={() => setIsViewAllOpen(true)}
            className="text-[10px] tracking-[0.3em] font-medium border-b border-black dark:border-white pb-1 mb-1 uppercase hover:opacity-60 transition-opacity"
          >
            VIEW ALL 全部查看
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {initialPosts.map((post) => (
            <div 
              key={post.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div 
                className="relative overflow-hidden aspect-[16/9] mb-4 bg-zinc-200 dark:bg-zinc-800"
                onClick={(e) => {
                  if (post.video) {
                    e.stopPropagation();
                    setSelectedVideo(post.video);
                  }
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  width={800}
                  height={450}
                  style={{ aspectRatio: '16/9' }}
                  loading="lazy"
                  decoding="async"
                />
                {post.video && (
                  <div className="absolute inset-0 flex items-center justify-center transition-colors">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-black/30 backdrop-blur-sm text-white">
                      <Play size={20} className="ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>
              <span className="text-[10px] opacity-40 tracking-[0.2em] block mb-2 uppercase">{post.date}</span>
              <h3 className="text-xl font-medium tracking-wide mb-2 group-hover:opacity-60 transition-opacity uppercase">
                {post.title}
              </h3>
              <div className="flex justify-between items-end">
                <p className="text-sm opacity-60 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase whitespace-nowrap ml-4 group-hover:opacity-60 transition-opacity">
                  READ MORE 閱讀更多
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Modal */}
      {isViewAllOpen && (
        <div className="fixed inset-0 z-[90] flex flex-col bg-white dark:bg-black overflow-y-auto animate-fade-in">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 w-full px-6 py-8 flex justify-between items-center bg-white/90 dark:bg-black/90 backdrop-blur-md">
            <div>
              <span className="text-[10px] tracking-[0.4em] opacity-40 block mb-1 uppercase">INSIGHTS 洞察</span>
              <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase">ALL BLOGS 全部文章</h2>
            </div>
            <button 
              onClick={() => setIsViewAllOpen(false)}
              className="group flex items-center space-x-3 text-[10px] tracking-[0.4em] font-bold hover:opacity-50 transition-opacity uppercase"
            >
              <span>CLOSE 關閉</span>
              <div className="w-8 h-[1px] bg-black dark:bg-white relative">
                <div className="absolute top-0 left-0 w-full h-full rotate-45 origin-center"></div>
                <div className="absolute top-0 left-0 w-full h-full -rotate-45 origin-center"></div>
              </div>
            </button>
          </div>

          {/* Modal Content */}
          <div className="max-w-7xl mx-auto px-6 pb-32 pt-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div 
                      className="relative overflow-hidden aspect-[16/9] mb-4 bg-zinc-200 dark:bg-zinc-800"
                      onClick={(e) => {
                        if (post.video) {
                          e.stopPropagation();
                          setSelectedVideo(post.video);
                        }
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        width={800}
                        height={450}
                        style={{ aspectRatio: '16/9' }}
                        loading="lazy"
                        decoding="async"
                      />
                      {post.video && (
                        <div className="absolute inset-0 flex items-center justify-center transition-colors">
                          <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-black/30 backdrop-blur-sm text-white">
                            <Play size={20} className="ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] opacity-40 tracking-[0.2em] block mb-2 uppercase">{post.date}</span>
                    <h3 className="text-xl font-medium tracking-wide mb-2 group-hover:opacity-60 transition-opacity uppercase">
                      {post.title}
                    </h3>
                    <div className="flex justify-between items-end">
                      <p className="text-sm opacity-60 font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="text-[10px] tracking-[0.4em] font-bold uppercase whitespace-nowrap ml-4 group-hover:opacity-60 transition-opacity">
                        READ MORE 閱讀更多
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 py-20 text-center opacity-30 tracking-[0.2em] uppercase">
                  Coming Soon... 即將推出...
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-8 mt-10">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`text-sm font-medium transition-all ${
                    currentPage === page 
                      ? 'opacity-100 border-b border-black dark:border-white pb-1' 
                      : 'opacity-30 hover:opacity-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-black overflow-y-auto animate-fade-in">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 w-full px-6 py-8 flex justify-between items-center bg-white/90 dark:bg-black/90 backdrop-blur-md">
            <div>
              <span className="text-[10px] tracking-[0.4em] opacity-40 block mb-1 uppercase">BLOG POST 文章詳情</span>
              <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase whitespace-pre-line">{selectedPost.title}</h2>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mt-1">
                <p className="text-[10px] opacity-50 tracking-[0.2em] uppercase">{selectedPost.date}</p>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPost(null);
              }}
              className="group flex items-center space-x-3 text-[10px] tracking-[0.4em] font-bold hover:opacity-50 transition-opacity uppercase"
            >
              <span>CLOSE 關閉</span>
              <div className="w-8 h-[1px] bg-black dark:bg-white relative">
                <div className="absolute top-0 left-0 w-full h-full rotate-45 origin-center"></div>
                <div className="absolute top-0 left-0 w-full h-full -rotate-45 origin-center"></div>
              </div>
            </button>
          </div>

          {/* Modal Content */}
          <div className="max-w-4xl mx-auto px-6 pb-32 pt-8 space-y-12 w-full">
            {/* Video or Image */}
            <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-900">
              {selectedPost.video ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedPost.video}
                  title={selectedPost.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              ) : (
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  width={1200}
                  height={675}
                  style={{ aspectRatio: '16/9' }}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>

            {/* Content */}
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-medium tracking-wide mb-6 uppercase opacity-80">
                {selectedPost.excerpt}
              </h3>
              
              {selectedPost.content ? (
                <div className="whitespace-pre-line text-base leading-loose opacity-80 font-light">
                  {selectedPost.content}
                </div>
              ) : (
                <p className="text-base leading-loose opacity-60 font-light">
                  {selectedPost.excerpt}
                </p>
              )}
            </div>
            
            <div className="flex justify-center w-full pt-12 border-t border-zinc-200 dark:border-zinc-800">
               <button 
                onClick={() => setSelectedPost(null)}
                className="text-[10px] tracking-[0.4em] border border-black dark:border-white px-12 py-5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase"
              >
                BACK TO BLOG 返回文章列表
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 p-4 group flex items-center space-x-3 text-[10px] tracking-[0.4em] font-bold hover:opacity-50 transition-opacity uppercase text-black dark:text-white z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <span>CLOSE 關閉</span>
            <div className="w-8 h-[1px] bg-black dark:bg-white relative">
              <div className="absolute top-0 left-0 w-full h-full rotate-45 origin-center"></div>
              <div className="absolute top-0 left-0 w-full h-full -rotate-45 origin-center"></div>
            </div>
          </button>
          <div 
            className="w-full max-w-5xl px-4 md:px-12" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-video relative shadow-2xl bg-black">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;