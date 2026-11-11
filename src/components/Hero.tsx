import React from 'react';
import { Play, Youtube, ArrowRight, Sparkles, MapPin, Smile } from 'lucide-react';
import { CHANNEL_INFO, THUMB_WEBTOON, THUMB_MANDU, VIDEOS } from '../data/mockData.ts';

interface HeroProps {
  onPlayFeaturedVideo: () => void;
  onSubscribeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayFeaturedVideo, onSubscribeClick }) => {
  const featuredVideo = VIDEOS[0];

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle warm ambient background glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Proposition, Copy, CTAs, Proof */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Broadcast kicker (Unboxed text) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-red-600 tracking-wider">
              <span>{CHANNEL_INFO.name}</span>
              <span aria-hidden="true">·</span>
              <a 
                href={CHANNEL_INFO.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono underline underline-offset-2 hover:text-red-700 transition-colors"
              >
                {CHANNEL_INFO.handle}
              </a>
              <span aria-hidden="true">·</span>
              <span className="text-amber-600 font-bold flex items-center gap-1">
                <Smile className="w-3.5 h-3.5" />
                {CHANNEL_INFO.motto}
              </span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] text-balance">
              천안의 숨은 맛집과 소식, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
                AI 창작 웹툰까지 한곳에!
              </span>
            </h1>

            {/* Subhead Body prose */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              어릴 적 추억의 중앙시장 쪽문만두부터 성환의 달인 오므라이스, 그리고 15년 직장생활 끝에 백수가 된 남자의 현실 공감 스토리 <strong className="font-semibold text-slate-900">[AI웹툰 민원왕 백수]</strong>까지! 
              사람 냄새 가득한 이야기를 <strong className="font-semibold text-slate-900">{CHANNEL_INFO.name}</strong>에서 만나보세요.
            </p>

            {/* Single primary action + clean secondary text link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onPlayFeaturedVideo}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-md shadow-red-600/20 whitespace-nowrap shrink-0"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>대표 영상 바로보기</span>
              </button>

              <a
                href={CHANNEL_INFO.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors whitespace-nowrap shrink-0"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>유튜브 공식 채널</span>
              </a>
            </div>

            {/* Unboxed Metadata & Proof Strip */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <p className="text-xs text-slate-500 font-medium">유튜브 구독자</p>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  {CHANNEL_INFO.subscriberCount}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">누적 조회수</p>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  {CHANNEL_INFO.totalViews}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">업로드 영상</p>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  {CHANNEL_INFO.videoCount}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">시청자 만족도</p>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  {CHANNEL_INFO.satisfactionRate}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Anchor (Using the actual real channel thumbnail) */}
          <div className="lg:col-span-6">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-video">
              
              <img
                src={THUMB_WEBTOON}
                alt="상균아놀자tv 최신 영상: AI제작 웹툰 1화 백수가 된 남자 민원왕 백수"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Quick Play Trigger Overlay Button */}
              <button
                onClick={onPlayFeaturedVideo}
                className="absolute inset-0 flex items-center justify-center group-hover:bg-black/15 transition-colors"
                aria-label="대표 추천 영상 재생하기"
              >
                <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-600 active:scale-95 transition-transform duration-200">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                </span>
              </button>

              {/* Bottom Scrim Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-left pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                  <span>추천 최신 영상</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredVideo.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredVideo.duration}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold line-clamp-1 drop-shadow-sm">
                  {featuredVideo.title}
                </h3>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
