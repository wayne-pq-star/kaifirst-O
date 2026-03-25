
import React from 'react';

const Services: React.FC = () => {
  const serviceContent = [
    '1. 住宅空間設計',
    '2. 老屋翻新設計',
    '3. 預售屋客變',
    '4. 純設計繪圖',
    '5. 商業空間設計',
    '6. AI輔助設計'
  ];

  const serviceProcess = [
    {
      title: '1 初步諮詢',
      description: '透過初步溝通了解家庭成員、生活需求、風格偏好、預算範圍及預計施工時程，協助建立整體設計方向。'
    },
    {
      title: '2 現場丈量與空間評估',
      description: '進行空間丈量與環境評估，確認樑柱位置、水電管線及社區管委會相關施工規範，作為後續設計規劃依據。'
    },
    {
      title: '3 空間規劃與AI設計提案',
      description: '進行平面圖規劃，包含動線、收納、家具等，並透過AI輔助快速提供3D圖，更直觀了解未來空間樣貌。'
    },
    {
      title: '4 初步預算評估',
      description: '依空間坪數、規劃需求及過往施工經驗，提供初步工程預算區間，掌握整體費用範圍。'
    },
    {
      title: '5 設計合約簽訂與設計定案',
      description: '簽訂設計合約，並深化設計內容，確定空間規劃、材質搭配、設計細節與整體系統圖。'
    },
    {
      title: '6 工程報價與施工',
      description: '完成施工圖繪製並提供工程報價明細，簽訂工程合約並安排施工時程，施工期間進行控管與監工。'
    },
    {
      title: '7 完工驗收與交屋',
      description: '工程完成後進行驗收，確認施工品質並交付空間使用，同時提供後續保固服務。'
    }
  ];

  return (
    <section id="services" className="scroll-mt-24 pt-10 pb-10 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <span className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">EXPERTISE 專業領域</span>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase">OUR SERVICES 服務項目</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[160px_1px_1fr] gap-8 lg:gap-8">
          {/* Left Column: Service Content */}
          <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:h-full lg:justify-between">
            <div className="col-span-1 lg:mb-12">
              <h3 className="text-lg tracking-widest mb-4 font-medium uppercase">一、服務內容</h3>
              <ul className="space-y-3">
                {serviceContent.map((item, index) => (
                  <li key={index} className="text-lg tracking-widest font-medium uppercase opacity-80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 flex flex-col justify-center lg:mt-8">
               <p className="text-xs tracking-widest mb-2 opacity-60">「凱初設計」室內設計APP</p>
               <img 
                 src="https://res.cloudinary.com/dihkqwd43/image/upload/v1772714910/%E5%B0%8F%E5%B9%B3%E6%9D%BF-1_fmi7hi.png" 
                 alt="凱初設計 APP Interface 1" 
                 className="w-full h-auto mb-4"
                 referrerPolicy="no-referrer"
               />
               <img 
                 src="https://res.cloudinary.com/dihkqwd43/image/upload/v1772708827/%E5%B0%8F%E5%B9%B3%E6%9D%BF_slzd8f.png" 
                 alt="凱初設計 APP Interface" 
                 className="w-full h-auto"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>

          {/* Vertical Divider (Visible on large screens) */}
          <div className="hidden lg:block w-px bg-zinc-900 dark:bg-zinc-100 h-full opacity-20"></div>

          {/* Right Column: Service Process */}
          <div>
            <h3 className="text-lg tracking-widest mb-6 font-medium uppercase">二、服務流程</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-3">
              {/* Steps 1-4 */}
              <div className="space-y-3">
                {serviceProcess.slice(0, 4).map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-xl tracking-widest font-medium uppercase shrink-0">{step.title.split(' ')[0]}</span>
                    <div>
                      <h4 className="text-xl tracking-widest mb-1 font-medium uppercase">{step.title.substring(step.title.indexOf(' ') + 1)}</h4>
                      <p className="text-base opacity-80 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Steps 5-7 */}
              <div className="space-y-3">
                {serviceProcess.slice(4).map((step, index) => (
                  <div key={index + 4} className="flex gap-3">
                    <span className="text-xl tracking-widest font-medium uppercase shrink-0">{step.title.split(' ')[0]}</span>
                    <div>
                      <h4 className="text-xl tracking-widest mb-1 font-medium uppercase">{step.title.substring(step.title.indexOf(' ') + 1)}</h4>
                      <p className="text-base opacity-80 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remarks Section Moved Here */}
            <div className="pt-2">
               <h3 className="text-lg tracking-widest mb-4 font-medium uppercase">備註</h3>
               <div className="space-y-2">
                 <div className="flex gap-3">
                   <span className="text-base tracking-widest font-medium opacity-80 shrink-0">1</span>
                   <div>
                     <h4 className="text-base tracking-widest mb-1 font-medium opacity-80">設計費用說明:</h4>
                     <p className="text-base opacity-80 leading-relaxed font-light">
                       設計費用依空間坪數、設計範圍及設計複雜度進行整體評估，而非單純以坪數計價，提供更符合空間需求的客製化設計服務，並維持合理且親民的價格。
                     </p>
                   </div>
                 </div>
                 <div className="flex gap-3">
                   <span className="text-base tracking-widest font-medium opacity-80 shrink-0">2</span>
                   <div>
                     <h4 className="text-base tracking-widest mb-1 font-medium opacity-80">AI設計輔助:</h4>
                     <p className="text-base opacity-80 leading-relaxed font-light">
                       輔以自行開發之「凱初設計」室內設計專用APP，可快速生成符合空間條件與業主需求的3D效果圖，大幅提升設計溝通效率與空間呈現效果。
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
