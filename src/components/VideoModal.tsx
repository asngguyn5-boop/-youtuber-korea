import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ThumbsUp, Share2, Check, MessageSquare, Send } from 'lucide-react';
import { VideoItem } from '../types.ts';
import { CHANNEL_INFO } from '../data/mockData.ts';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onSubscribeClick: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onSubscribeClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18); // percent
  const [likes, setLikes] = useState(video?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [commentsList, setCommentsList] = useState<string[]>([
    '상균 삼촌 오늘 영상도 너무 재미있어요 ㅋㅋㅋ',
    '다음 주에 나오는 챌린지도 기대 중입니다!',
    '썸네일부터 꿀잼 기운 느껴지네요 ㅎㅎ',
  ]);

  useEffect(() => {
    if (video) {
      setLikes(video.likes);
      setIsLiked(false);
      setProgress(12);
      setIsPlaying(true);
    }
  }, [video]);

  // Simulate progress when playing
  useEffect(() => {
    if (!isPlaying || !video) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 99 ? 0 : prev + 0.4));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, video]);

  if (!video) return null;

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setCommentsList([commentInput.trim(), ...commentsList]);
    setCommentInput('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-slate-700/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span>상균아놀자 플레이어 미리보기</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Canvas (Simulated) */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group select-none">
          <img
            src={video.image}
            alt={video.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-90' : 'opacity-60'}`}
          />

          {/* Center Play/Pause button */}
          <button
            onClick={togglePlay}
            className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-white" />
            ) : (
              <Play className="w-8 h-8 fill-white translate-x-0.5" />
            )}
          </button>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 z-20">
            
            {/* Scrubber timeline */}
            <div 
              className="relative w-full h-1.5 bg-white/30 rounded-full cursor-pointer hover:h-2 transition-all"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.max(0, Math.min(100, clickPos * 100)));
              }}
            >
              <div 
                className="h-full bg-red-600 rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md transform translate-x-1.5 scale-0 group-hover:scale-100 transition-transform" />
              </div>
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="hover:text-red-400 transition-colors">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsMuted(!isMuted)} className="hover:text-red-400 transition-colors">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-slate-300">
                  {Math.floor((progress / 100) * 18)}:{(Math.floor((progress * 3.6) % 60)).toString().padStart(2, '0')} / {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <span>1080p 60fps HD</span>
              </div>
            </div>

          </div>
        </div>

        {/* Video Information & Comments Area (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Title & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs text-red-600 font-semibold mb-1">
                <span>{video.categoryLabel}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 font-normal">조회수 {video.views}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500 font-normal">{video.date}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {video.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={toggleLike}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  isLiked
                    ? 'bg-red-50 text-red-600 border border-red-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-600' : ''}`} />
                <span className="font-mono tabular-nums">{likes.toLocaleString()}</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? '복사완료!' : '공유하기'}</span>
              </button>
            </div>
          </div>

          {/* Creator Channel Bar */}
          <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                상균
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-slate-900">{CHANNEL_INFO.name}</p>
                  <span className="text-xs text-red-600 font-mono font-medium">{CHANNEL_INFO.handle}</span>
                </div>
                <p className="text-xs text-slate-500">구독자 {CHANNEL_INFO.subscriberCount}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={video.youtubeUrl || CHANNEL_INFO.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>YouTube에서 보기</span>
              </a>

              <button
                onClick={onSubscribeClick}
                className="px-3.5 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                구독하기
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 bg-slate-50/70 rounded-xl text-xs text-slate-700 leading-relaxed">
            <p className="whitespace-pre-wrap">{video.description}</p>
            <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap gap-2 text-slate-500 font-mono text-xs">
              <span>#상균아놀자tv</span>
              <span>#PlayShortsKorea</span>
              <span>#천안맛집</span>
              <span>#AI웹툰</span>
              <span>#민원왕백수</span>
            </div>
          </div>

          {/* Quick Comment list */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>실시간 댓글 ({commentsList.length})</span>
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="영상에 댓글 남기기..."
                className="flex-1 px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={!commentInput.trim()}
                className="px-3.5 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 disabled:opacity-40"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="space-y-2 pt-1">
              {commentsList.map((cmt, i) => (
                <div key={i} className="text-xs p-2.5 bg-slate-50 rounded-lg text-slate-700">
                  <span className="font-bold text-slate-900 mr-2">시청자 {i + 1}</span>
                  <span>{cmt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
