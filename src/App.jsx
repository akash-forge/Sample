import React, { useState } from 'react';
import './index.css';

// Import local images so Vite bundles them with correct base path for GitHub Pages
import heroFoodImg from './assets/hero_food.jpg';
import aboutChefImg from './assets/about_chef.jpg';
import menuAppetizerImg from './assets/menu_appetizer.jpg';
import menuMainImg from './assets/menu_main.jpg';
import menuDessertImg from './assets/menu_dessert.jpg';
import cateringEventImg from './assets/catering_event.jpg';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-[#061813] text-slate-100 min-h-screen selection:bg-[#FCCC00] selection:text-[#061813]">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#007C5A] via-[#FCCC00] to-[#007C5A]"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-6 sm:px-10 py-5 bg-[#071e18]/95 backdrop-blur-md border-b border-[#007C5A]/30">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Navigation Links (Desktop) */}
          <ul className="hidden md:flex items-center space-x-8 flex-1 justify-end pr-8">
            <li>
              <a 
                href="#home" 
                className="text-xs tracking-[0.2em] font-semibold text-[#FCCC00] hover:text-[#ffe566] transition-colors relative flex flex-col items-center py-1 group"
              >
                HOME
                <span className="w-5 h-[2px] bg-[#FCCC00] mt-1 transition-all group-hover:w-8"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-xs tracking-[0.2em] font-semibold text-slate-300 hover:text-[#FCCC00] transition-colors py-1"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className="text-xs tracking-[0.2em] font-semibold text-slate-300 hover:text-[#FCCC00] transition-colors py-1"
              >
                MENU
              </a>
            </li>
          </ul>

          {/* Brand Logo (Center) */}
          <div className="flex-shrink-0 text-center px-4 flex flex-col items-center">
            <a href="#home" className="group">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-dancing text-[#FCCC00] tracking-wide transition-transform group-hover:scale-105">
                Alanzo
              </h1>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <span className="h-[1px] w-3 sm:w-5 bg-[#007C5A]"></span>
                <span className="text-[0.55rem] sm:text-[0.65rem] font-semibold text-slate-300 tracking-[0.3em] uppercase">
                  Personal Chef & Catering
                </span>
                <span className="h-[1px] w-3 sm:w-5 bg-[#007C5A]"></span>
              </div>
            </a>
          </div>

          {/* Right Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 flex-1 pl-8">
            <a 
              href="#services" 
              className="text-xs tracking-[0.2em] font-semibold text-slate-300 hover:text-[#FCCC00] transition-colors py-1"
            >
              SERVICES
            </a>
            <a 
              href="#contact" 
              className="btn-gold !py-2.5 !px-6 !text-xs !shadow-none hover:!scale-105"
            >
              BOOK EVENT
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg text-slate-200 hover:text-[#FCCC00] hover:bg-[#007C5A]/20 focus:outline-none transition-colors border border-[#007C5A]/40"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#007C5A]/30 pb-3 flex flex-col space-y-3 bg-[#061813]/98 px-4 rounded-xl">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-[#FCCC00] py-2 border-b border-[#007C5A]/20"
            >
              HOME
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-slate-300 hover:text-[#FCCC00] py-2 border-b border-[#007C5A]/20"
            >
              ABOUT CHEF
            </a>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-slate-300 hover:text-[#FCCC00] py-2 border-b border-[#007C5A]/20"
            >
              SIGNATURE MENU
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-slate-300 hover:text-[#FCCC00] py-2 border-b border-[#007C5A]/20"
            >
              SERVICES
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold !w-full text-center mt-2 py-3"
            >
              CONTACT & BOOKINGS
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative flex items-center min-h-[90vh] lg:min-h-screen bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: `url(${heroFoodImg})` }}
      >
        {/* Layered Rich Gradient Overlay in #061813 and #007C5A */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061813] via-[#061813]/90 to-transparent w-full md:w-[75%] lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061813] via-transparent to-black/40" />

        <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-28 py-20 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#007C5A]/25 border border-[#007C5A] text-[#FCCC00] text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FCCC00] animate-ping"></span>
            Private Dining & Artisanal Catering
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-[1.08] tracking-tight">
            Delicious Food Is <br/>
            <span className="text-gold-gradient">My Passion</span>
          </h2>
          
          <div className="flex items-start gap-4 sm:gap-6 mb-10 max-w-xl">
            <div className="w-10 h-1 bg-[#FCCC00] mt-3 flex-shrink-0 rounded-full"></div>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              I believe in food's power to nourish, sustain, delight, and bring people together. Each dish is tailored with the highest quality seasonal ingredients.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <a href="#contact" className="btn-gold">
              <span>Book A Consultation</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#menu" className="btn-emerald-outline">
              Explore Tasting Menu
            </a>
          </div>
        </div>

        {/* Floating Quick Action Bar (Desktop) */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col shadow-2xl z-20 rounded-l-2xl overflow-hidden border-l border-y border-[#007C5A]/50 bg-[#071e18]/90 backdrop-blur-md">
          <a 
            href="#menu" 
            title="View Menu"
            className="w-14 h-14 flex items-center justify-center border-b border-[#007C5A]/30 text-[#FCCC00] hover:bg-[#007C5A] hover:text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </a>
          <a 
            href="#about" 
            title="About Chef"
            className="w-14 h-14 flex items-center justify-center border-b border-[#007C5A]/30 text-[#FCCC00] hover:bg-[#007C5A] hover:text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </a>
          <a 
            href="#contact" 
            title="Contact Chef"
            className="w-14 h-14 flex items-center justify-center text-[#FCCC00] hover:bg-[#007C5A] hover:text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#08221b] border-t border-[#007C5A]/30 flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Chef Image with Dual-tone Frame */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 border-2 border-[#FCCC00] translate-x-3 sm:translate-x-5 translate-y-3 sm:translate-y-5 rounded-2xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#007C5A]/40 to-transparent rounded-2xl blur-sm"></div>
            <img 
              src={aboutChefImg} 
              alt="Executive Chef Alanzo" 
              className="relative rounded-2xl shadow-2xl w-full h-[400px] sm:h-[480px] object-cover border border-[#007C5A]/40" 
            />
            {/* Experience Pill */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-[#061813] border-2 border-[#007C5A] p-4 rounded-xl shadow-xl flex items-center gap-3">
              <span className="text-3xl font-playfair font-bold text-[#FCCC00]">20+</span>
              <div className="text-xs font-semibold leading-tight text-slate-300 uppercase tracking-wider">
                Years of <br/><span className="text-[#00a87a]">Mastery</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[2px] bg-[#007C5A]"></div>
              <span className="text-[#FCCC00] tracking-[0.25em] text-xs uppercase font-bold">About Executive Chef</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-6 leading-tight text-white">
              Culinary Artistry <br/>
              <span className="text-gold-gradient">In Every Custom Dish</span>
            </h3>
            
            <p className="text-slate-300 mb-6 text-base sm:text-lg leading-relaxed">
              With over two decades spent in premier European dining capitals and award-winning private kitchens, Chef Alanzo crafts sensory experiences that linger long after the final course.
            </p>
            
            <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
              From intimate candlelit private dining to gala celebrations, every menu is completely tailored to your vision, dietary preferences, and seasonal inspirations.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#0b2b22] border border-[#007C5A]/40">
                <div className="text-xl font-bold text-[#FCCC00] mb-1 font-playfair">500+</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-medium">Bespoke Events</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0b2b22] border border-[#007C5A]/40">
                <div className="text-xl font-bold text-[#FCCC00] mb-1 font-playfair">100%</div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-medium">Farm Fresh Sourcing</div>
              </div>
            </div>

            <div>
              <a href="#contact" className="btn-gold">
                Reserve A Date
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Menu Section */}
      <section id="menu" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#061813] border-t border-[#007C5A]/30 flex justify-center">
        <div className="w-full max-w-6xl">
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-[1.5px] bg-[#007C5A]"></div>
              <span className="text-[#FCCC00] tracking-[0.25em] text-xs uppercase font-bold">Chef's Curated Courses</span>
              <div className="w-10 h-[1.5px] bg-[#007C5A]"></div>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white">
              Signature <span className="text-gold-gradient">Catering Selections</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4">
              Handcrafted delicacies celebrating bold flavors, fresh harvests, and Michelin-inspired presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Menu Item 1 */}
            <div className="menu-card group relative overflow-hidden rounded-2xl bg-[#0a251e] border border-[#007C5A]/40">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={menuAppetizerImg} 
                  alt="Artisanal Appetizer Platter" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-[#007C5A] text-white text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  Starter
                </div>
              </div>
              <div className="p-7 relative bg-[#0a251e]">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-playfair text-xl sm:text-2xl text-white group-hover:text-[#FCCC00] transition-colors">
                    Appetizer Platter
                  </h4>
                  <span className="text-[#FCCC00] font-bold text-xl font-playfair">$24</span>
                </div>
                <div className="w-10 h-[1px] bg-[#007C5A]/60 mb-3"></div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Stone-baked crostini, artisanal cured meats, burrata with truffle drizzle, and pickled orchard figs.
                </p>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="menu-card group relative overflow-hidden rounded-2xl bg-[#0a251e] border border-[#007C5A]/40">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={menuMainImg} 
                  alt="Pan-Seared Wild Salmon" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-[#FCCC00] text-[#061813] text-[0.65rem] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  Chef Choice
                </div>
              </div>
              <div className="p-7 relative bg-[#0a251e]">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-playfair text-xl sm:text-2xl text-white group-hover:text-[#FCCC00] transition-colors">
                    Pan-Seared Salmon
                  </h4>
                  <span className="text-[#FCCC00] font-bold text-xl font-playfair">$42</span>
                </div>
                <div className="w-10 h-[1px] bg-[#007C5A]/60 mb-3"></div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Wild-caught king salmon with herb-infused butter, braised tender asparagus, and quinoa pilaf.
                </p>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="menu-card group relative overflow-hidden rounded-2xl bg-[#0a251e] border border-[#007C5A]/40">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={menuDessertImg} 
                  alt="Chocolate Lava Cake" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-[#007C5A] text-white text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  Dessert
                </div>
              </div>
              <div className="p-7 relative bg-[#0a251e]">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-playfair text-xl sm:text-2xl text-white group-hover:text-[#FCCC00] transition-colors">
                    Chocolate Lava Cake
                  </h4>
                  <span className="text-[#FCCC00] font-bold text-xl font-playfair">$18</span>
                </div>
                <div className="w-10 h-[1px] bg-[#007C5A]/60 mb-3"></div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Valrhona dark chocolate cake with warm molten center, gold flake garnish, and Madagascar vanilla gelato.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#08221b] border-t border-[#007C5A]/30 flex justify-center">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-[1.5px] bg-[#007C5A]"></div>
              <span className="text-[#FCCC00] tracking-[0.25em] text-xs uppercase font-bold">What We Offer</span>
              <div className="w-10 h-[1.5px] bg-[#007C5A]"></div>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white">
              Catering & <span className="text-gold-gradient">Dining Services</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0a251e] border border-[#007C5A]/40 hover:border-[#FCCC00]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#007C5A]/30 flex items-center justify-center text-[#FCCC00] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h4 className="text-xl font-playfair text-white mb-3">Gala & Weddings</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Full-service culinary staffing, curated multi-course wine pairings, and seamless event flow for up to 300 guests.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0a251e] border border-[#007C5A]/40 hover:border-[#FCCC00]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#007C5A]/30 flex items-center justify-center text-[#FCCC00] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h4 className="text-xl font-playfair text-white mb-3">In-Home Private Chef</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Exclusive in-residence tasting experiences where Chef Alanzo prepares and serves Michelin-standard cuisine in your kitchen.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0a251e] border border-[#007C5A]/40 hover:border-[#FCCC00]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#007C5A]/30 flex items-center justify-center text-[#FCCC00] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-xl font-playfair text-white mb-3">Corporate Hospitality</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Elevated boardroom lunches, executive retreats, and client appreciation dinners crafted with precision and discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#061813] relative overflow-hidden flex justify-center border-t border-[#007C5A]/30">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15" 
          style={{ backgroundImage: `url(${cateringEventImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#061813] via-[#061813]/90 to-[#061813]/70"></div>

        <div className="w-full max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl border border-[#007C5A]/50 shadow-2xl overflow-hidden bg-[#071e18]/90 backdrop-blur-md">
          
          {/* Contact Information (Left) */}
          <div className="lg:col-span-2 p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#0a271f] to-[#061813] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#007C5A]/40">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-[#007C5A]"></div>
                <span className="text-[#FCCC00] tracking-[0.25em] text-xs uppercase font-bold">Inquiries</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-white mb-6">
                Reserve Your <br/>
                <span className="text-gold-gradient">Celebration</span>
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
                Let us curate a personalized dining journey for your guests. Share your date, guest count, and vision with Chef Alanzo.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#007C5A]/30">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-[#007C5A]/25 border border-[#007C5A] flex items-center justify-center text-[#FCCC00] flex-shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-[0.7rem] uppercase text-slate-400 font-semibold tracking-wider">Direct Line</div>
                  <div className="text-sm font-medium text-white">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-[#007C5A]/25 border border-[#007C5A] flex items-center justify-center text-[#FCCC00] flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <div className="text-[0.7rem] uppercase text-slate-400 font-semibold tracking-wider">Email Concierge</div>
                  <div className="text-sm font-medium text-white">alanzo@chefalanzo.com</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reservation Form (Right) */}
          <div className="lg:col-span-3 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your catering inquiry has been received.'); }} className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">First Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Eleanor"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#061813]/80 border border-[#007C5A]/50 focus:outline-none focus:border-[#FCCC00] focus:ring-1 focus:ring-[#FCCC00] transition-colors text-white placeholder-slate-500" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Last Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Vance"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#061813]/80 border border-[#007C5A]/50 focus:outline-none focus:border-[#FCCC00] focus:ring-1 focus:ring-[#FCCC00] transition-colors text-white placeholder-slate-500" 
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="eleanor@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#061813]/80 border border-[#007C5A]/50 focus:outline-none focus:border-[#FCCC00] focus:ring-1 focus:ring-[#FCCC00] transition-colors text-white placeholder-slate-500" 
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">Event Details & Dietary Wishes</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Please specify estimated guest count, occasion, date, and preferred menu direction..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#061813]/80 border border-[#007C5A]/50 focus:outline-none focus:border-[#FCCC00] focus:ring-1 focus:ring-[#FCCC00] transition-colors text-white resize-none placeholder-slate-500" 
                />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="w-full btn-gold !py-4 !text-sm">
                  Send Booking Request
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#04120e] border-t border-[#007C5A]/30 text-center text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-dancing text-[#FCCC00]">Alanzo</span>
            <span className="text-xs tracking-widest uppercase text-slate-500">| Gourmet Catering</span>
          </div>
          <div className="flex space-x-6 text-xs tracking-widest uppercase font-semibold">
            <a href="#home" className="hover:text-[#FCCC00] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#FCCC00] transition-colors">About</a>
            <a href="#menu" className="hover:text-[#FCCC00] transition-colors">Menu</a>
            <a href="#contact" className="hover:text-[#FCCC00] transition-colors">Contact</a>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Alanzo Catering. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
