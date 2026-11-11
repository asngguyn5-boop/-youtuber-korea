import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Send, Check } from 'lucide-react';
import { FanComment } from '../types.ts';
import { INITIAL_FAN_COMMENTS } from '../data/mockData.ts';

const STAMPS = [
  { stamp: '💖', label: '응원해요' },
  { stamp: '🌟', label: '최고예요' },
  { stamp: '🚀', label: '힘내세요' },
  { stamp: '🎈', label: '사랑해요' },
];

export const FanBoard: React.FC = () => {
  const [comments, setComments] = useState<FanComment[]>(() => {
    try {
      const saved = localStorage.getItem('sangkyun_real_fan_comments_v2');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_FAN_COMMENTS;
  });

  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [selectedStamp, setSelectedStamp] = useState(STAMPS[0]);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sangkyun_real_fan_comments_v2', JSON.stringify(comments));
    } catch {
      // ignore
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newComment: FanComment = {
      id: `fan-${Date.now()}`,
      author: author.trim(),
      message: message.trim(),
      stamp: selectedStamp.stamp,
      stampLabel: selectedStamp.label,
      date: '방금 전',
      likes: 1,
      isUserAdded: true,
    };

    setComments([newComment, ...comments]);
    setAuthor('');
    setMessage('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleLike = (id: string) => {
    setLikedMap((prev) => {
      const isLiked = !!prev[id];
      const nextLiked = !isLiked;
      
      setComments((cur) =>
        cur.map((c) =>
          c.id === id ? { ...c, likes: c.likes + (nextLiked ? 1 : -1) } : c
        )
      );

      return { ...prev, [id]: nextLiked };
    });
  };

  return (
    <section id="fanboard" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-wider text-red-600 mb-2">
              FAN CHEERING GUESTBOOK
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
              상균이에게 전하는 팬 응원 한마디
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              상균아놀자TV를 아껴주시는 팬 여러분의 따뜻한 응원과 소중한 의견을 남겨주세요!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <MessageSquare className="w-4 h-4 text-slate-400" />
            <span>총 <strong className="text-slate-900 font-bold font-mono tabular-nums">{comments.length}개</strong>의 따뜻한 메시지</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              응원 메시지 남기기
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              상균이에게 힘이 되는 따뜻한 한마디를 적어보세요.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  닉네임
                </label>
                <input
                  type="text"
                  required
                  maxLength={20}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="예: 민우맘, 열혈구독자"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                />
              </div>

              {/* Stamp selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  응원 스탬프 선택
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {STAMPS.map((s) => {
                    const isSelected = selectedStamp.stamp === s.stamp;
                    return (
                      <button
                        type="button"
                        key={s.stamp}
                        onClick={() => setSelectedStamp(s)}
                        className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-xl border transition-all text-left ${
                          isSelected
                            ? 'bg-red-50 border-red-300 text-red-900 font-bold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60'
                        }`}
                      >
                        <span className="text-base">{s.stamp}</span>
                        <span>{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  응원 메시지
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={200}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="상균이 삼촌 영상 너무 재미있게 보고 있어요! 늘 파이팅입니다~"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors resize-none"
                />
                <div className="flex justify-end text-[11px] text-slate-400 mt-1">
                  <span>{message.length} / 200자</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={!author.trim() || !message.trim()}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>응원 등록하기</span>
              </button>

              {isSubmitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>소중한 응원 메시지가 등록되었습니다! 감사합니다.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Comments Feed */}
          <div className="lg:col-span-7 space-y-4 max-h-[580px] overflow-y-auto pr-1">
            {comments.map((comment) => {
              const isLiked = !!likedMap[comment.id];
              return (
                <div
                  key={comment.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    comment.isUserAdded
                      ? 'bg-amber-50/40 border-amber-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{comment.stamp}</span>
                      <span className="text-sm font-bold text-slate-900">
                        {comment.author}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        · {comment.date}
                      </span>
                    </div>

                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        isLiked
                          ? 'bg-red-50 text-red-600'
                          : 'text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-600' : ''}`} />
                      <span className="font-mono tabular-nums">{comment.likes}</span>
                    </button>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap pl-7">
                    {comment.message}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
