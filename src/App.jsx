import React from 'react';
import './index.css';

function App() {
  return (
    <div className="font-sans bg-dark text-white min-h-screen">
      {/* Navigation */}
      <nav className="relative z-50 px-8 py-6 bg-[#1a1a1a] bg-opacity-95 bg-[url('/texture-overlay.png')]">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <ul className="flex space-x-6 flex-1 justify-end pr-8 hidden md:flex items-center">
            <li>
              <a href="#home" className="text-sm tracking-[0.15em] font-bold text-white relative flex flex-col items-center">
                HOME
                <div className="w-8 h-[2px] bg-white mt-1"></div>
              </a>
            </li>
            <li><a href="#menu" className="text-sm tracking-[0.15em] font-bold text-gray-400 hover:text-white transition-colors">MENU</a></li>
            <li><a href="#services" className="text-sm tracking-[0.15em] font-bold text-gray-400 hover:text-white transition-colors">SERVICES</a></li>
          </ul>
          
          <div className="flex-shrink-0 text-center px-4 flex flex-col items-center mt-2">
            <h1 className="text-5xl md:text-6xl font-dancing text-gold-gradient mb-1">Alanzo</h1>
            <span className="text-[0.6rem] font-sans text-gray-400 tracking-[0.3em] uppercase">Personal Chef & Catering</span>
          </div>

          <ul className="flex space-x-6 flex-1 pl-8 items-center hidden md:flex">
            <div className="flex gap-4 items-center">
              {/* social icons placeholders to match red scribble areas */}
              <div className="w-16 h-4 bg-red-600/0"></div> 
              <div className="w-8 h-4 bg-red-600/0"></div>
            </div>
            <li><a href="#contact" className="text-sm tracking-[0.15em] font-bold text-gray-400 hover:text-white transition-colors">CONTACT US</a></li>
          </ul>
        </div>
      </nav>
      {/* Thick white divider line */}
      <div className="w-full h-1.5 bg-gray-200"></div>

      {/* Hero */}
      <section id="home" className="relative flex items-center h-screen bg-cover bg-center overflow-hidden" style={{backgroundImage: "url('/hero_food.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent w-[70%]" />
        
        <div className="relative z-10 pl-8 md:pl-24 lg:pl-40 max-w-4xl animate-fadeInLeft mt-[-10vh]">
          <h2 className="text-6xl md:text-8xl font-sans font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Delicious Food Is <br/> My Passion
          </h2>
          
          <div className="flex items-start gap-6 mb-12">
            <div className="w-8 h-1 bg-[#d4af37] mt-3 flex-shrink-0"></div>
            <p className="text-gray-300 text-lg md:text-xl font-playfair max-w-lg leading-relaxed">
              I believe in its power to nourish, sustain, delight, and bring people together. I use only the highest quality ingredients
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-3">
              <span className="text-lg">💬</span> Free Chat
            </button>
            <button className="border border-[#d4af37] text-white font-bold py-3 px-8 rounded-full hover:bg-[#d4af37]/10 transition-colors uppercase tracking-[0.2em] text-sm">
              Contact Us
            </button>
          </div>
        </div>

        {/* Floating Right Sidebar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col shadow-2xl z-20">
          <button className="w-16 h-16 bg-[#f4e2b8] flex items-center justify-center border-b border-black/10 hover:bg-[#e0cd9e] transition-colors text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
          <button className="w-16 h-16 bg-[#f4e2b8] flex items-center justify-center border-b border-black/10 hover:bg-[#e0cd9e] transition-colors text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </button>
          <button className="w-16 h-16 bg-[#f4e2b8] flex items-center justify-center hover:bg-[#e0cd9e] transition-colors text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-8 bg-dark-surface flex justify-center">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fadeInLeft">
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 rounded-lg"></div>
            <img src="/about_chef.jpg" alt="Chef" className="relative rounded-lg shadow-2xl w-full h-auto max-h-[500px] object-cover" />
          </div>
          <div className="animate-fadeInRight flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold tracking-widest text-sm uppercase font-bold">About Us</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-playfair mb-6 leading-tight text-white">Culinary Excellence <br/><span className="text-gold-gradient">In Every Bite</span></h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">Chef Alessandro brings 20 years of Michelin‑star experience, turning seasonal produce into culinary art.</p>
            <p className="text-gray-400 mb-8 leading-relaxed">Our philosophy blends classic techniques with modern flair, delivering a gastronomic journey for every palate. Whether it's an intimate dinner or a grand celebration, we craft menus that inspire and delight.</p>
            <div>
              <button className="btn-gold">Meet the Team</button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-32 px-8 bg-dark-mid flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold tracking-widest text-sm uppercase font-bold">Our Menu</span>
              <div className="w-12 h-[1px] bg-gold"></div>
            </div>
            <h3 className="text-4xl md:text-5xl font-playfair text-white text-center">Signature <span className="text-gold-gradient">Selections</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-gold/30 transition-colors duration-500">
              <div className="overflow-hidden h-64">
                <img src="/menu_appetizer.jpg" alt="Appetizer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 text-center relative bg-[#1a1a1a]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                <h4 className="font-playfair text-2xl mb-3 text-white">Appetizer Platter</h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Assorted bruschetta, artisanal charcuterie, and seasonal pickles.</p>
                <div className="text-gold font-sans font-bold tracking-widest">$24</div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-gold/30 transition-colors duration-500">
              <div className="overflow-hidden h-64">
                <img src="/menu_main.jpg" alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 text-center relative bg-[#1a1a1a]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                <h4 className="font-playfair text-2xl mb-3 text-white">Pan-Seared Salmon</h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Lemon butter sauce, asparagus, and herb-infused quinoa.</p>
                <div className="text-gold font-sans font-bold tracking-widest">$42</div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-gold/30 transition-colors duration-500">
              <div className="overflow-hidden h-64">
                <img src="/menu_dessert.jpg" alt="Dessert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8 text-center relative bg-[#1a1a1a]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                <h4 className="font-playfair text-2xl mb-3 text-white">Chocolate Lava Cake</h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Gold-leaf garnish, vanilla ice cream, and fresh berries.</p>
                <div className="text-gold font-sans font-bold tracking-widest">$18</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-8 bg-dark relative overflow-hidden flex justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('/catering_event.jpg')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
        <div className="w-full max-w-6xl relative z-10 grid md:grid-cols-5 gap-0 items-stretch bg-dark-mid/90 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
          
          <div className="md:col-span-2 p-10 md:p-16 bg-gradient-to-br from-dark-surface to-dark h-full flex flex-col justify-center border-r border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-gold tracking-widest text-sm uppercase font-bold">Reach Out</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-playfair text-white mb-6">Book Your <br/><span className="text-gold-gradient">Event</span></h3>
            <p className="text-gray-400 mb-8 leading-relaxed">Ready to create an unforgettable culinary experience? Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-4">
              <p className="text-gray-300 flex items-center gap-3"><span className="text-gold text-xl">📞</span> (555) 123-4567</p>
              <p className="text-gray-300 flex items-center gap-3"><span className="text-gold text-xl">✉️</span> events@gourmetcatering.com</p>
            </div>
          </div>
          
          <div className="md:col-span-3 p-10 md:p-16 flex flex-col justify-center">
            <form className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest text-gray-400 uppercase">First Name</label>
                <input type="text" className="w-full p-4 rounded bg-dark/50 border border-gray-700 focus:outline-none focus:border-gold transition-colors text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Last Name</label>
                <input type="text" className="w-full p-4 rounded bg-dark/50 border border-gray-700 focus:outline-none focus:border-gold transition-colors text-white" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Email Address</label>
                <input type="email" className="w-full p-4 rounded bg-dark/50 border border-gray-700 focus:outline-none focus:border-gold transition-colors text-white" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Message</label>
                <textarea rows={4} className="w-full p-4 rounded bg-dark/50 border border-gray-700 focus:outline-none focus:border-gold transition-colors text-white resize-none" />
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full btn-gold justify-center py-4 text-sm tracking-[0.2em]">SEND INQUIRY</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 bg-dark-mid">
        <p>&copy; {new Date().getFullYear()} Gourmet Catering. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
