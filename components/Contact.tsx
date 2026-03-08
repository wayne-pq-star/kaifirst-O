
import React from 'react';
import { Youtube, Facebook, Instagram, AtSign } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-10 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col h-full justify-between">
          <div>
            <span className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">GET IN TOUCH 聯絡我們</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12 uppercase">LET'S START A<br />CONVERSATION.<br />
            <span className="block mt-4 opacity-80">歡迎來訊諮詢</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col justify-between shrink-0">
              <div>
                <h3 className="text-[10px] tracking-[0.4em] opacity-30 mb-4 uppercase">Office 辦公室</h3>
                <p className="text-sm font-light tracking-widest leading-relaxed uppercase">
                  三重區中正北路15號5樓5-60<br />
                  新北市，台灣 TAIWAN
                </p>
              </div>
              <div>
                <h3 className="text-[10px] tracking-[0.4em] opacity-30 mb-4 uppercase">Contact 聯繫方式</h3>
                <p className="text-sm font-light tracking-widest">
                  w6988215@gmail.com<br />
                  0955305817
                </p>
              </div>
              <div>
                <h3 className="text-[10px] tracking-[0.4em] opacity-30 mb-4 uppercase">Social Media 社交媒體</h3>
                <div className="flex space-x-6 pt-2">
                  <a href="https://www.youtube.com/@TheWayneFang" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Youtube size={20} strokeWidth={1.5} /></a>
                  <a href="https://www.facebook.com/KaiFirstDesign/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Facebook size={20} strokeWidth={1.5} /></a>
                  <a href="https://www.instagram.com/w6988215/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Instagram size={20} strokeWidth={1.5} /></a>
                  <a href="https://www.threads.net/@w6988215" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><AtSign size={20} strokeWidth={1.5} /></a>
                </div>
              </div>
            </div>
            
            <div className="w-full h-64 md:h-auto md:aspect-square bg-zinc-100 dark:bg-zinc-900 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe 
                src="https://maps.google.com/maps?q=新北市三重區中正北路15號&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        <form className="space-y-8 flex flex-col h-full" action="https://formspree.io/f/xvzwodyl" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <label className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">Full Name 您的姓名</label>
              <input type="text" name="name" className="w-full bg-transparent outline-none text-sm font-light py-2" placeholder="Your Name" required />
            </div>
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <label className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">Email Address 您的電子郵件</label>
              <input type="email" name="email" className="w-full bg-transparent outline-none text-sm font-light py-2" placeholder="name@email.com" required />
            </div>
          </div>
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <label className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">Subject 主題</label>
            <input type="text" name="subject" className="w-full bg-transparent outline-none text-sm font-light py-2" placeholder="Inquiry about..." required />
          </div>
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 flex-grow">
            <label className="text-[10px] tracking-[0.4em] opacity-40 block mb-2 uppercase">Message 訊息內容</label>
            <textarea name="message" rows={4} className="w-full bg-transparent outline-none text-sm font-light py-2 resize-none h-full min-h-[120px]" placeholder="Tell us about your project" required></textarea>
          </div>
          <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black py-6 text-[10px] tracking-[0.4em] font-bold hover:opacity-80 transition-opacity uppercase mt-auto">
            SEND MESSAGE 送出訊息
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
