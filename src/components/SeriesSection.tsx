import React from 'react';
import { Layers, ArrowRight, PlayCircle } from 'lucide-react';
import { CONTENT_SERIES } from '../data/mockData.ts';
import { ContentSeries } from '../types.ts';

interface SeriesSectionProps {
  onSelectSeries: (series: ContentSeries) => void;
}

export const SeriesSection: React.FC<SeriesSectionProps> = ({ onSelectSeries }) => {
  return (
    <section id="series" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-red-600 mb-2">
            SIGNATURE CONTENT SERIES
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
            상균아놀자tv 대표 콘텐츠 시리즈
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            천안 숨은 맛집부터 화제의 AI 웹툰 '민원왕 백수', 지역 소식과 힐링 이야기까지 정주행해보세요.
          </p>
        </div>

        {/* Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CONTENT_SERIES.map((series) => (
            <div
              key={series.id}
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200"
            >
              <div>
                {/* Header row with editorial numbering & badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-sm font-mono font-bold text-red-600">
                    {series.number}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{series.badge}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{series.episodesCount}편 방영</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {series.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {series.description}
                </p>

                {/* Highlight box */}
                <div className="mt-4 p-3.5 bg-white group-hover:bg-amber-50/50 rounded-xl border border-slate-200/70 transition-colors">
                  <p className="text-xs text-slate-500 font-medium">대표 인기 에피소드</p>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {series.highlight}
                  </p>
                </div>
              </div>

              {/* Footer row: unboxed tags & action button */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  {series.tags.map((tag, idx) => (
                    <span key={tag}>
                      {tag}
                      {idx < series.tags.length - 1 && <span className="ml-2 text-slate-300" aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectSeries(series)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors group/btn"
                >
                  <span>시리즈 몰아보기</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
