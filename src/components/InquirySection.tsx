import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { InquiryFormData } from '../types.ts';

export const InquirySection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '브랜디드 콘텐츠',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate submission
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      category: '브랜디드 콘텐츠',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="inquiry" className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-red-600 mb-2">
            BUSINESS & PARTNERSHIP
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-balance">
            비즈니스 제휴 및 맛집·취재 제안
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            천안 및 전국 숨은 맛집 발굴, AI 창작 웹툰 협업, 지자체 행사 및 문화예술 전시 취재 등 소중한 제안을 환영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Trust Points & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  협업 프로세스 안내
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  상균아놀자tv는 진정성 있는 로컬 스토리텔링과 독창적인 AI 웹툰 콘텐츠로 시청자와 브랜드 모두에게 정겨운 감동을 전달합니다.
                </p>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold font-mono shrink-0">1</span>
                  <div>
                    <p className="font-bold text-slate-900">제안서 접수 & 일정 협의</p>
                    <p className="text-slate-500 mt-0.5">영업일 기준 24~48시간 이내 빠른 검토 및 회신</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold font-mono shrink-0">2</span>
                  <div>
                    <p className="font-bold text-slate-900">현장 답사 & 콘티 기획</p>
                    <p className="text-slate-500 mt-0.5">식당 스토리, 명인 인터뷰, AI 웹툰 시나리오 구성</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold font-mono shrink-0">3</span>
                  <div>
                    <p className="font-bold text-slate-900">영상 제작 및 유튜브 송출</p>
                    <p className="text-slate-500 mt-0.5">유튜브 본편 및 PlayShorts 숏폼 영상 동시 발행</p>
                  </div>
                </div>
              </div>

              {/* Direct email info */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span className="font-mono text-slate-900 font-medium">contact@sangkyunplay.tv</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Building className="w-4 h-4 text-slate-400" />
                  <span>상균아놀자tv 제작팀 (충남 천안시)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  제휴 문의가 성공적으로 접수되었습니다!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  남겨주신 이메일(<strong className="text-slate-800">{formData.email}</strong>)로 담당 크리에이터 팀이 제안 내용을 면밀히 검토한 후 빠르게 회신드리겠습니다.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                  >
                    새로운 문의 작성하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      담당자 성함 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="홍길동 팀장"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      소속 기관 / 회사명
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="(주)패밀리엔터"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      회신 이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="partner@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      연락처
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    제휴 구분
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
                  >
                    <option value="천안 및 로컬 맛집 취재">천안 및 로컬 숨은 맛집 취재 요청</option>
                    <option value="[AI 창작 웹툰] 기획·제휴">[AI 창작 웹툰] 스토리텔링 및 캐릭터 제휴</option>
                    <option value="지역 행사 / 전시 취재">지자체 축제 / 문화예술 전시 취재</option>
                    <option value="브랜디드 콘텐츠 (PPL)">브랜디드 콘텐츠 및 영상 협찬</option>
                    <option value="기타 제휴 문의">기타 비즈니스 제휴 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    제안 상세 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="제휴 목적, 제품/행사 개요, 희망 일정 및 예산 등을 자유롭게 작성해주세요."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>제휴 제안서 전송하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
