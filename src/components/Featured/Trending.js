"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useCallback, useEffect, useRef, useState } from "react";

const CarouselItem = ({ item, setMainFeatured }) => {
  const handleClick = useCallback(() => {
    setMainFeatured(item);
    sessionStorage.setItem("mainFeaturedId", item.Id);
  }, [item, setMainFeatured]);

  return (
    <div
      onClick={handleClick}
      className={`bg-[url('/assets/${item.CoverImage}')] w-full h-[27vh] bg-no-repeat bg-contain bg-center cursor-pointer`}
    ></div>
  );
};

export const Trending = ({ carouselItems, setMainFeatured }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        sliderRef.current.slickNext();
      } else if (e.deltaY > 0) {
        sliderRef.current.slickPrev();
      }
    };

    document
      .getElementById("sliderContainer")
      .addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      document
        .getElementById("sliderContainer")
        .removeEventListener("wheel", handleWheel);
    };
  }, [sliderRef]);

  return (
    <div className="flex flex-col absolute bottom-0 w-full h-1/3 pl-36">
      <div className="font-medium text-3xl text-white mb-4 ml-5">
        Trending Now
      </div>
      <div id="sliderContainer" className="flex-1">
        <Slider
          dots={false}
          infinite={false}
          speed={800}
          slidesToShow={8.5}
          slidesToScroll={1}
          arrows={false}
          ref={sliderRef}
          draggable={true}
        >
          {carouselItems ? (
            carouselItems.map((item) => (
              <CarouselItem
                key={item.Id}
                item={item}
                setMainFeatured={setMainFeatured}
              />
            ))
          ) : (
            <></> // TODO: add loading icon
          )}
        </Slider>
      </div>
    </div>
  );
};
