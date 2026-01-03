'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, Sun, Moon, Mic, Newspaper, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col w-full text-white">
      {/* Top Bar */}
      {/* Increased min-height to provide spacing (gap) around the larger logo. 
          Changed from min-h-[100px] to min-h-[140px] approx to fit h-28 (112px) logo with space.
      */}
      <div className="bg-header-bg py-8 md:py-10 px-4 md:px-8 flex items-center justify-between relative shadow-md z-20 min-h-[120px] md:min-h-[150px]">
        
        {/* Left: Menu & Logo (Mobile) / Menu (Desktop) */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="sr-only">Menu</span>
          </button>
          <span className="hidden sm:inline-block font-bold text-xs tracking-widest uppercase text-gray-400">Menu</span>
        </div>

        {/* Center: Logo 
            Added hover:scale-110 and transition for animation.
        */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link 
              href="/" 
              className="block relative w-64 h-24 md:w-80 md:h-28 hover:scale-110 transition-transform duration-300 ease-out"
            > 
              <Image 
                src="https://sytrdyuwrzmjuobkwpsb.supabase.co/storage/v1/object/public/idv/crfav.png" 
                alt="CodeRandom Logo" 
                fill
                className="object-contain"
                priority
              />
            </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white">
            <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Bottom Bar (Navigation) */}
      <nav className="bg-[#121212] flex items-stretch justify-center text-sm md:text-base font-bold tracking-wide uppercase">
        <Link 
          href="/podcasts" 
          className="group flex-1 py-4 flex items-center justify-center border-b-4 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 transition-colors relative overflow-hidden"
        >
          <span className="transition-all duration-300 group-hover:translate-y-8 group-hover:opacity-0">Podcasts</span>
          <Mic className="w-6 h-6 absolute transition-all duration-300 -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </Link>
        <Link 
          href="/noticias" 
          className="group flex-1 py-4 flex items-center justify-center border-b-4 border-brand-green text-brand-green hover:bg-brand-green/10 transition-colors relative overflow-hidden"
        >
          <span className="transition-all duration-300 group-hover:translate-y-8 group-hover:opacity-0">Notícias</span>
          <Newspaper className="w-6 h-6 absolute transition-all duration-300 -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </Link>
        <Link 
          href="/loja" 
          className="group flex-1 py-4 flex items-center justify-center border-b-4 border-brand-orange text-brand-orange hover:bg-brand-orange/10 transition-colors relative overflow-hidden"
        >
          <span className="transition-all duration-300 group-hover:translate-y-8 group-hover:opacity-0">Loja</span>
          <ShoppingBag className="w-6 h-6 absolute transition-all duration-300 -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </Link>
      </nav>
    </header>
  );
}
