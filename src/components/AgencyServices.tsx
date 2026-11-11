import React from 'react';
import { Newspaper, Utensils, Video, Sparkles, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData.ts';

export const AgencyServices: React.FC = () => {
  const icons = [
    <Newspaper className="w-5 h-5 text-red-600" />,
    <Utensils className="w-5 h-5 text-amber-600" />,
    <Video className="w-5 h-5 text-blue-600" />,
    <Sparkles className="w-5 h-5 text-purple-600" />,
  ];

  return (
    <section id="agency" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-red-600 mb-2">
            <Building2 className="w-4 h-4" />
            <span>AI CHEONAN NEWS AGENCY & PRODUCTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
            {AGENCY_INFO.name}가 하는 일
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {AGENCY_INFO.description}
          </p>
        </div>

        {/* 4 Core Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {AGENCY_INFO.services.map((svc, idx) => (
            <div
              key={svc.number}
              className="group p-6 sm:p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header row with editorial number and icon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center">
                      {icons[idx]}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {svc.subtitle}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold text-red-600">
                    {svc.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {svc.title}
                </h3>

                {/* Service Detailed Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              {/* Tags and Inquire trigger */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  {svc.tags.map((tag, tIdx) => (
                    <span key={tag}>
                      {tag}
                      {tIdx < svc.tags.length - 1 && <span className="ml-2 text-slate-300" aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>

                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-red-600 transition-colors"
                >
                  <span>제휴 문의</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Agency Trust Banner Strip */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-amber-300 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>천안 중심 로컬 미디어 & AI 창작 솔루션</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold">
              천안 맛집 취재, 시정·현안 소식 보도, AI 웹툰 제휴가 필요하신가요?
            </h4>
            <p className="text-xs text-slate-300">
              AI천안뉴스 기획사가 기획부터 고품질 영상 제작, 유튜브 @PlayShortsKorea 채널 송출까지 원스톱으로 함께합니다.
            </p>
          </div>

          <a
            href="#inquiry"
            className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            취재 & 기획 문의하기
          </a>
        </div>

      </div>
    </section>
  );
};
