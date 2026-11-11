import React from 'react';
import { Play, Bell, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onSubscribeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSubscribeClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (One line, display font) */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg px-1 py-0.5"
          aria-label="상균아놀자TV 홈으로 이동"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Play className="w-4 h-4 fill-white translate-x-0.5" />
          </span>
          <span className="tracking-tight text-slate-900 font-extrabold text-lg">
            상균아놀자<span className="text-red-600">TV</span>
          </span>
        </a>

        {/* Zone 2: 5 Nav Links (Concise single-line text links) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            채널소개
          </a>
          <a href="#agency" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            기획사하는일
          </a>
          <a href="#videos" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            인기영상
          </a>
          <a href="#series" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            시리즈코너
          </a>
          <a href="#inquiry" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            제휴문의
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onSubscribeClick}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 whitespace-nowrap shrink-0"
          >
            <Bell className="w-3.5 h-3.5 fill-white/20" />
            <span>YouTube 구독하기</span>
          </button>
        </div>
      </div>
    </header>
  );
};
