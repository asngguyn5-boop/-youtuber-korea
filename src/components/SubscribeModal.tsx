import React, { useState } from 'react';
import { X, Bell, Check, Youtube, Sparkles } from 'lucide-react';
import { CHANNEL_INFO } from '../data/mockData.ts';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [bellActive, setBellActive] = useState(true);
  const [subscribed, setSubscribed] = useState(true);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-center border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
          <Youtube className="w-9 h-9 fill-red-600" />
        </div>

        <h3 className="text-xl font-black text-slate-900 tracking-tight">
          상균아놀자TV 구독 완료!
        </h3>

        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          상균이의 15.8만 놀이 친구가 되신 것을 진심으로 환영합니다! 
          매주 화·금요일 오후 6시, 가장 먼저 웃음을 배달해 드립니다.
        </p>

        {/* Bell Notification Toggle */}
        <div className="my-6 p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${bellActive ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-500'}`}>
              <Bell className="w-4 h-4 fill-current" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-900">전체 알림 설정</p>
              <p className="text-[11px] text-slate-500">새 영상 등록 시 즉시 알림</p>
            </div>
          </div>

          <button
            onClick={() => setBellActive(!bellActive)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              bellActive
                ? 'bg-amber-500 text-white'
                : 'bg-slate-200 text-slate-600'
            }`}
          >
            {bellActive ? '알림 켜짐' : '알림 끔'}
          </button>
        </div>

        <div className="space-y-2.5">
          <a
            href={CHANNEL_INFO.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Youtube className="w-4 h-4 fill-white" />
            <span>YouTube {CHANNEL_INFO.handle} 바로가기</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 text-xs font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
          >
            홈페이지 계속 둘러보기
          </button>
        </div>

      </div>
    </div>
  );
};
