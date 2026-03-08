import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 pt-10 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Left Column: Portrait and Awards Image */}
        <div className="flex flex-col space-y-6">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dihkqwd43/image/upload/v1772792060/7688_d6vxiw.png"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dihkqwd43/image/upload/v1772779989/GI_xfkjka.png"
              alt="Awards Logos"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col h-full">
          {/* Philosophy Header */}
          <div className="mb-8">
            <h2 className="text-[10px] tracking-[0.4em] opacity-40 block mb-6 uppercase">PHILOSOPHY 設計理念</h2>
            
            <div className="space-y-6 text-zinc-800 dark:text-zinc-200">
              <div className="space-y-1">
                <h3 className="text-lg font-medium tracking-wide">
                  我們，不僅是活在環境，更是活在心境的情感生物。
                </h3>
                <p className="text-sm font-medium tracking-wide">
                  We are not only beings living in our environment, but also emotional beings living within our hearts.
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  凱初設計以「實用、美感、情感與預算平衡」為核心，回應居住者的生活方式與情感需求，打造真正適合生活的空間。同時結合AI輔助設計，快速提供空間構想與3D視覺呈現，讓設計溝通更加清晰及高效。
                </p>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  KAI First Design focuses on a balance of practicality, aesthetics, emotion, and budget, responding to the lifestyles and emotional needs of residents to create truly suitable living spaces. We also incorporates AI to provide spatial and 3D visual representations, making design clearer and more efficient.
                </p>
              </div>
            </div>
          </div>

          {/* Awards and Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-x-4 gap-y-8 mb-8">
            {/* Awards Column */}
            <div>
              <h3 className="text-xl font-serif mb-4 uppercase tracking-wide text-zinc-800 dark:text-zinc-200">AWARDS</h3>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <div className="border-l-2 border-zinc-300 pl-4">
                  <p className="text-sm">
                    <a href="https://design.museaward.com/winner-info.php?id=11166" target="_blank" rel="noopener noreferrer" className="hover:underline">MUSE Design Awards</a>
                  </p>
                  <p className="text-sm">A' Design Award</p>
                  <p className="text-xs opacity-60 mt-1">2022-2023</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-4">
                  <p className="text-sm">
                    <a href="https://worldarchitecture.org/architecture-projects/hvzhz/experience-cruise-project-pages.html?fbclid=IwAR0ddTtXvSR6_l3P8CzyxjDhyHS_DuWSWXXTpyD9WzPCi30BVTKssMYL_Jg" target="_blank" rel="noopener noreferrer" className="hover:underline">World Architecture Community</a>
                  </p>
                  <p className="text-sm">
                    <a href="https://www.idesignawards.com/winners/zoom.php?eid=9-34540-21&fbclid=IwAR2oinn_ma3oSPm9tOxG00VP9GIUhW_GnnDoLuGEouyybut08t2RCjZUXTk" target="_blank" rel="noopener noreferrer" className="hover:underline">IDA International Design Awards</a>
                  </p>
                  <p className="text-sm">
                    <a href="https://livawards.com/winner/liv/2021/557/0/" target="_blank" rel="noopener noreferrer" className="hover:underline">LIV Hospitality Design Award</a>
                  </p>
                  <p className="text-xs opacity-60 mt-1">2021</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-4">
                  <p className="text-sm">
                    <a href="https://today.line.me/tw/v3/article/D6Q7G5?fbclid=IwY2xjawQZqfBleHRuA2FlbQIxMABicmlkETFIT1M3Vm9NUUlsYkk3MmN1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjrz8K58YXRXCMclzEVAYuoW_PRaJSgNqAbC2XfIT6TRKPI0ypUAILmX8jlV_aem_oQplXWVEwutY3kz8jL8i2Q" target="_blank" rel="noopener noreferrer" className="hover:underline">工裝組 商業空間類 晶鯤鵬優秀獎</a>
                  </p>
                  <p className="text-xs opacity-60 mt-1">2020</p>
                </div>
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-xl font-serif mb-4 uppercase tracking-wide text-zinc-800 dark:text-zinc-200">EDUCATION & Technician Certificate</h3>
              <div className="space-y-6 text-zinc-600 dark:text-zinc-400">
                <div className="border-l-2 border-zinc-300 pl-4">
                  <p className="text-sm font-medium">China University of Technology</p>
                  <p className="text-sm italic opacity-80">Bachelor of Interior design</p>
                  <p className="text-sm">中國科技大學-室內設計系</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-4">
                  <p className="text-sm font-medium whitespace-nowrap">National Taiwan University of Science and Technology</p>
                  <p className="text-sm italic opacity-80">Master of Science in Engineering</p>
                  <p className="text-sm italic opacity-80">Bachelor of Science in Engineering</p>
                  <p className="text-sm">國立台灣科技大學-機械工程系</p>
                </div>
                <div className="border-l-2 border-zinc-300 pl-4">
                  <p className="text-sm">乙級建築物室內設計技術士 民國109</p>
                  <p className="text-sm">乙級建築物室內裝修工程管理技術士 民國110</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experiences Section */}
          <div>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wide text-zinc-800 dark:text-zinc-200">EXPERIENCES</h3>
            <div className="flex flex-wrap items-center gap-x-4 text-zinc-600 dark:text-zinc-400 border-l-2 border-zinc-300 pl-4">
              <span className="text-sm font-medium">Just Design (均典設計)</span>
              <span className="text-sm font-medium">Vouge Design (峰閣設計)</span>
              <span className="text-sm font-medium">AI Group (築內設計)</span>
              <span className="text-sm font-medium">Star Design (星葉設計)</span>
              <span className="text-sm opacity-60">2015-2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;