import React, { useState } from 'react';
import { Play, Eye, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { VideoItem } from '../types.ts';
import { VIDEOS } from '../data/mockData.ts';

interface VideoSectionProps {
  onSelectVideo: (video: VideoItem) => void;
}

type CategoryFilter = 'all' | 'food' | 'webtoon' | 'news' | 'culture' | 'shorts';

export const VideoSection: React.FC<VideoSectionProps> = ({ onSelectVideo }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredVideos = activeFilter === 'all' 
    ? VIDEOS 
    : VIDEOS.filter((v) => v.category === activeFilter);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: '전체 영상' },
    { key: 'food', label: '천안·전국 맛집' },
    { key: 'webtoon', label: 'AI 창작 웹툰' },
    { key: 'news', label: '천안 소식 & 이슈' },
    { key: 'culture', label: '문화 & 예술' },
    { key: 'shorts', label: 'PlayShorts (숏폼)' },
  ];

  return (
    <section id="videos" className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-wider text-red-600 mb-2">
              REAL CONTENTS & VIDEOS
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
              상균아놀자tv 최신 & 인기 영상
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              천안 로컬 맛집부터 화제의 AI 웹툰, 지역의 생생한 소식까지 직접 만나보세요.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control button group) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />

                {/* Duration Label */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[11px] font-mono text-white tracking-wide">
                  {video.duration}
                </div>

                {/* Shorts Badge if applicable */}
                {video.isShorts && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-600 text-[10px] font-bold text-white tracking-wider">
                    SHORTS
                  </div>
                )}

                {/* Play Hover Button */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Time Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                    <span className="font-semibold text-red-600">{video.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{video.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>

                  {/* Brief description */}
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Bottom Unboxed Stats */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-slate-400" />
                    <span className="font-mono tabular-nums">조회수 {video.views}</span>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500">
                    <ThumbsUp className="w-3 h-3 text-slate-400" />
                    <span className="font-mono tabular-nums">좋아요 {video.likes}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty filter fallback */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-sm text-slate-500">해당 카테고리의 영상이 아직 등록되지 않았습니다.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-3 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              전체 영상 보기
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
