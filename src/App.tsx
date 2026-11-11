/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AgencyServices } from './components/AgencyServices.tsx';
import { VideoSection } from './components/VideoSection.tsx';
import { SeriesSection } from './components/SeriesSection.tsx';
import { AboutCreator } from './components/AboutCreator.tsx';
import { FanBoard } from './components/FanBoard.tsx';
import { InquirySection } from './components/InquirySection.tsx';
import { Footer } from './components/Footer.tsx';
import { VideoModal } from './components/VideoModal.tsx';
import { SubscribeModal } from './components/SubscribeModal.tsx';
import { VideoItem, ContentSeries } from './types.ts';
import { VIDEOS } from './data/mockData.ts';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  const handlePlayFeaturedVideo = () => {
    setSelectedVideo(VIDEOS[0]);
  };

  const handleSelectSeries = (series: ContentSeries) => {
    // Map series to a matching video or open first video in that category
    let targetVid: VideoItem | undefined;
    if (series.id === 'series-food') {
      targetVid = VIDEOS.find((v) => v.category === 'food');
    } else if (series.id === 'series-webtoon') {
      targetVid = VIDEOS.find((v) => v.category === 'webtoon');
    } else if (series.id === 'series-news') {
      targetVid = VIDEOS.find((v) => v.category === 'news');
    } else if (series.id === 'series-culture') {
      targetVid = VIDEOS.find((v) => v.category === 'culture');
    } else {
      targetVid = VIDEOS[0];
    }

    if (targetVid) {
      setSelectedVideo(targetVid);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 selection:bg-red-100 selection:text-red-900">
      {/* Strict 3-zone Header */}
      <Navbar onSubscribeClick={() => setIsSubscribeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 16:9 focal carrier */}
        <Hero
          onPlayFeaturedVideo={handlePlayFeaturedVideo}
          onSubscribeClick={() => setIsSubscribeModalOpen(true)}
        />

        {/* 2. AI천안뉴스 기획사가 하는 일 (Core Agency Services) */}
        <AgencyServices />

        {/* 3. Featured & Latest Video Showcase */}
        <VideoSection onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* 4. Signature Content Series Corner */}
        <SeriesSection onSelectSeries={handleSelectSeries} />

        {/* 5. Creator Story & Regular Upload Timetable */}
        <AboutCreator />

        {/* 6. Interactive Fan Cheering Guestbook */}
        <FanBoard />

        {/* 7. Business Partnership & Inquiry */}
        <InquirySection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Video Preview Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onSubscribeClick={() => {
          setSelectedVideo(null);
          setIsSubscribeModalOpen(true);
        }}
      />

      {/* Subscription Celebration Modal */}
      <SubscribeModal
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
      />
    </div>
  );
}
