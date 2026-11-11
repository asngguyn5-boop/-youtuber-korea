import React from 'react';
import { Calendar, Clock, Award, Heart, CheckCircle2, Smile, MapPin, Youtube } from 'lucide-react';
import { CHANNEL_INFO, THUMB_MANDU, THUMB_WEBTOON } from '../data/mockData.ts';

export const AboutCreator: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-red-600 mb-2">
            CREATOR STORY & SCHEDULE
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
            크리에이터 상균이를 소개합니다!
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            "웃으면 복이 와요^^" 천안의 숨은 맛과 사람 사는 정겨운 이야기를 전합니다.
          </p>
        </div>

        {/* 2-Column Split: Letter from Creator + Regular Broadcast Timetable */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Creator Profile & Story Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              
              {/* Creator Channel Badge */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-red-200 bg-gradient-to-br from-red-600 to-rose-700 flex flex-col items-center justify-center text-white shadow-md text-center p-3">
                <span className="text-2xl font-black tracking-tight">상균</span>
                <span className="text-[11px] font-bold text-red-100 mt-1">상균아놀자tv</span>
                <span className="text-[9px] text-amber-200 mt-0.5">웃으면복이와요^^</span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-1">
                  <span>유튜브 크리에이터</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <MapPin className="w-3 h-3 text-red-500" />
                    충남 천안시
                  </span>
                  <span aria-hidden="true">·</span>
                  <a
                    href={CHANNEL_INFO.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 font-mono font-bold hover:underline"
                  >
                    {CHANNEL_INFO.handle}
                  </a>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {CHANNEL_INFO.creatorName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  "천안의 맛과 소식, AI 창작 웹툰으로 시청자분들께 큰 웃음을 선물합니다."
                </p>
              </div>
            </div>

            {/* Letter content */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-5">
              <p>
                반갑습니다! <strong className="text-slate-900 font-semibold">상균아놀자tv</strong> 공식 채널(<a href={CHANNEL_INFO.youtubeUrl} target="_blank" rel="noreferrer" className="text-red-600 font-mono font-semibold underline underline-offset-2">{CHANNEL_INFO.handle}</a>)을 찾아주신 모든 분들을 진심으로 환영합니다.
              </p>
              <p>
                어릴 적 어머니 손잡고 가던 천안 중앙시장의 쪽문만두처럼, 세월이 흘러도 변치 않는 따뜻한 고향의 맛과 우리 동네의 정겨운 숨은 맛집을 발굴해 알리고 있습니다.
              </p>
              <p>
                최근에는 15년 직장생활 끝에 백수가 되어 시민들의 민원을 해결해 나가는 통쾌한 공감 스토리인 <strong>[AI제작 웹툰 민원왕 백수]</strong> 시리즈를 선보이며 시청자 여러분과 소통의 폭을 넓혀가고 있습니다.
              </p>
              <p>
                '웃으면 복이 와요'라는 채널 모토처럼, 제 영상을 보시는 모든 분들의 하루에 작은 미소와 따뜻한 위로가 깃들기를 소망합니다!
              </p>
            </div>

            {/* 3 Core Channel Principles */}
            <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Smile className="w-3.5 h-3.5 text-amber-500" />
                  01. 웃으면 복이 와요
                </p>
                <p className="text-xs text-slate-500 mt-1">이웃들과 나누는 정겨운 미소</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  02. 천안 로컬 사랑
                </p>
                <p className="text-xs text-slate-500 mt-1">지역 명소 & 숨은 찐 맛집 발굴</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  03. 창작 AI 웹툰
                </p>
                <p className="text-xs text-slate-500 mt-1">현실 공감 민원왕 백수 연재</p>
              </div>
            </div>

          </div>

          {/* Right Column: Weekly Schedule & Milestones */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Upload Timetable Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-600" />
                  <h3 className="text-base font-bold text-slate-900">콘텐츠 업로드 안내</h3>
                </div>
                <span className="text-[11px] text-red-600 font-mono font-semibold">@PlayShortsKorea</span>
              </div>

              <div className="space-y-3.5">
                {CHANNEL_INFO.schedule.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-red-600">{item.day}</span>
                      <span className="font-mono font-medium text-slate-700 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900">상균아놀자tv 채널 발자취</h3>
              </div>

              <div className="relative border-l border-slate-200 ml-2 space-y-4 text-xs">
                <div className="relative pl-5">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-red-600 ring-4 ring-white" />
                  <p className="font-mono text-slate-500">최신</p>
                  <p className="font-bold text-slate-900">[Ai제작 웹툰] '민원왕 백수' 정규 시리즈 연재 시작</p>
                </div>
                <div className="relative pl-5">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-400 ring-4 ring-white" />
                  <p className="font-mono text-slate-500">최근</p>
                  <p className="font-semibold text-slate-800">천안 중앙시장 쪽문만두 & 성환 상야식당 맛집 화제</p>
                </div>
                <div className="relative pl-5">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                  <p className="font-mono text-slate-500">지역취재</p>
                  <p className="font-semibold text-slate-800">독립기념관 서곡 30만평 환원 촉구 천안시청 기자회견 취재</p>
                </div>
                <div className="relative pl-5">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-white" />
                  <p className="font-mono text-slate-500">조회수 2천</p>
                  <p className="font-semibold text-slate-800">대전 심관사 심관스님 성명 & 사주풀이 영상 인기</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
