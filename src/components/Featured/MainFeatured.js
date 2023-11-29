"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import mock from "@/mock/mainPage.json";
import { Trending } from "./Trending";
import { MainFeaturedContent } from "./MainFeaturedContent";

const mockFeatured = mock.Featured;
const mockTrendingNow = mock.TrendingNow;

export const MainFeatured = () => {
  const videoInitialiserTimeout = useRef(null);
  const [mainFeatured, setMainFeatured] = useState(mockFeatured);
  const [trendingNow, setTrendingNow] = useState(mockTrendingNow);
  const [showVideo, setShowVideo] = useState(false);

  const DynamicReactPlayer = dynamic(() => import("react-player"), {
    ssr: false,
  });

  useEffect(() => {
    const mainFeaturedId = sessionStorage.getItem("mainFeaturedId");
    if (mainFeaturedId) {
      const mainFeaturedIndex = mockTrendingNow.findIndex(
        (trendingNow) => trendingNow.Id === mainFeaturedId
      );
      setMainFeatured(mockTrendingNow[mainFeaturedIndex]);
      const sortedTrendingNow = mockTrendingNow.slice(mainFeaturedIndex, 50);
      setTrendingNow(sortedTrendingNow);
    } else {
      setMainFeatured(mockFeatured);
      const sortedTrendingNow = mockTrendingNow.slice(0, 50).sort((a, b) => {
        return new Date(b.Date) - new Date(a.Date);
      });
      setTrendingNow(sortedTrendingNow);
    }
  }, [mainFeatured, setMainFeatured, setTrendingNow]);

  useEffect(() => {
    if (mainFeatured.VideoUrl) {
      videoInitialiserTimeout.current = setTimeout(() => {
        setShowVideo(true);
      }, 2000);
    }

    return () => {
      setShowVideo(false);
      clearTimeout(videoInitialiserTimeout.current);
    };
  }, [mainFeatured]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${
        showVideo
          ? ""
          : `bg-no-repeat bg-cover bg-[url('/assets/${mainFeatured.CoverImage}')]`
      } `}
    >
      {showVideo ? (
        // TODO: add aspect ratio for smaller devices
        <div className="relative w-full h-full pt-[56.25%]">
          <DynamicReactPlayer
            url="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            controls={false}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
            className="absolute top-0 left-0"
          />
        </div>
      ) : (
        <MainFeaturedContent
          category={mainFeatured.Category}
          titleImage={mainFeatured.TitleImage}
          releaseYear={mainFeatured.ReleaseYear}
          mpaRating={mainFeatured.MpaRating}
          duration={mainFeatured.Duration}
          description={mainFeatured.Description}
        />
      )}
      <Trending carouselItems={trendingNow} setMainFeatured={setMainFeatured} />
    </div>
  );
};
