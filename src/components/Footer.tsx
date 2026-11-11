import React from 'react';
import { Play, Youtube, Instagram, Mail, Heart } from 'lucide-react';
import { CHANNEL_INFO } from '../data/mockData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-sm">
                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
              </span>
              <span className="text-white font-extrabold text-base tracking-tight">
                상균아놀자<span className="text-red-500">TV</span>
              </span>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              AI 기술과 로컬 미디어가 함께하는 <strong className="text-slate-200">AI천안뉴스 기획사</strong> 및 <strong className="text-slate-200">상균아놀자tv</strong> 공식 웹사이트입니다. 천안의 생생한 소식과 맛있는 이야기로 행복을 전합니다.
            </p>

            <div className="flex items-center gap-4 pt-1">
              <a 
                href={CHANNEL_INFO.youtubeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="유튜브 @PlayShortsKorea 바로가기"
              >
                <Youtube className="w-4 h-4 fill-current" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="인스타그램 바로가기"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@sangkyunplay.tv" 
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="제휴 이메일 보내기"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-white font-bold text-sm tracking-wide">바로가기</p>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">채널 소개</a></li>
              <li><a href="#agency" className="hover:text-white transition-colors">AI천안뉴스 기획사 하는일</a></li>
              <li><a href="#videos" className="hover:text-white transition-colors">인기 & 최신 영상</a></li>
              <li><a href="#series" className="hover:text-white transition-colors">콘텐츠 시리즈</a></li>
              <li><a href="#fanboard" className="hover:text-white transition-colors">팬 응원 게시판</a></li>
              <li><a href="#inquiry" className="hover:text-white transition-colors">비즈니스 제휴 문의</a></li>
            </ul>
          </div>

          {/* Business Info */}
          <div className="md:col-span-4 space-y-2.5">
            <p className="text-white font-bold text-sm tracking-wide">기획사 및 비즈니스 정보</p>
            <p className="text-slate-400 leading-relaxed">
              기획사: <strong className="text-slate-200">AI천안뉴스 기획사</strong> <br />
              채널명: 상균아놀자tv (<span className="text-red-400 font-mono font-medium">{CHANNEL_INFO.handle}</span>) <br />
              대표: 김상균 (Sangkyun Kim) <br />
              취재 및 제휴 문의: <span className="text-slate-300 font-mono">contact@sangkyunplay.tv</span> <br />
              소재지: 충청남도 천안시
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} 상균아놀자TV (Sangkyun Play TV). All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Sangkyun TV Fans</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
