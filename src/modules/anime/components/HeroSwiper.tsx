import { useState, useEffect, useCallback } from "react";
import { PlayIcon, BookmarkSimpleIcon } from "@phosphor-icons/react";
import type { AnimeType } from "../types/anime.types";
import CustomBtn from "@/components/custom/CustomBtn";
import IconButton from "@/components/custom/IconButton";

interface HeroSwiperProps {
  animes: AnimeType[];
}

const SLIDE_DURATION = 5000;

export default function HeroSwiper({ animes }: HeroSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  // const [myList, setMyList] = useState<Set<number>>(new Set());

  const slides = animes;

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 1000);
    },
    [isAnimating, activeIndex],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          const next = (activeIndex + 1) % slides.length;
          goToSlide(next);
          return 0;
        }
        return p + 100 / (SLIDE_DURATION / 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [activeIndex, slides.length, goToSlide]);

  if (!slides.length) return null;

  const active = slides[activeIndex];

  // const toggleList = (id: number) => {
  //   setMyList((prev) => {
  //     const next = new Set(prev);
  //     next.has(id) ? next.delete(id) : next.add(id);
  //     return next;
  //   });
  // };

  return (
    <section className="relative w-full min-h-150 overflow-hidden select-none rounded-xl">
      <div className="absolute inset-0 -z-50">
        <img
          src={active.images.jpg.large_image_url}
          className="w-full h-full object-cover scale-110 blur-xl opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
      </div>
      {/* Slide indicators — left */}

      <p>{animes.length}</p>

      {/* <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 px-2 py-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-lg">
        {slides.map((_, i) => {
          const isActive = i === activeIndex;

          const RADIUS = 8;
          const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

          return (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 focus:outline-none"
            >
              <span
                className={`absolute w-2.5 h-2.5 rounded-full transition-all duration-300
            ${isActive ? "bg-violet-500 scale-125 shadow-[0_0_12px_rgba(139,92,246,0.8)]" : "bg-white/40 hover:bg-white/70"}
          `}
              />

              {isActive && (
                <svg className="absolute w-6 h-6" viewBox="0 0 20 20">
                  <circle
                    cx="10"
                    cy="10"
                    r={RADIUS}
                    fill="none"
                    stroke="rgba(139,92,246,0.9)"
                    strokeWidth="2"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={CIRCUMFERENCE * (1 - progress / 100)}
                    strokeLinecap="round"
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "center",
                      transition: "stroke-dashoffset 0.1s linear",
                      filter: "drop-shadow(0 0 6px rgba(139,92,246,0.6))",
                    }}
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div> */}

      {/* Main content */}
      <div className="z-10 flex items-center gap-10 p-10 transition-opacity duration-400">
        {/* Poster card */}
        <div className="shrink-0 h-full  rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={active.images.jpg.large_image_url}
            alt={active.title}
            className="w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 max-w-xl">
          {/* Genre pill */}
          <div className="mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
              {active.rating?.replace(/_/g, " ") || "Anime"}
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight mb-4">
            {active.title}
          </h1>

          <p className="text-sm leading-relaxed mb-6 line-clamp-3">
            {active.synopsis || "No synopsis available."}
          </p>

          <div className="flex items-center gap-3 mb-8">
            <CustomBtn startIcon={PlayIcon} text="Watch Trailer" size={`lg`} />

            <IconButton
              icon={BookmarkSimpleIcon}
              tooltip="Add to list"
              variant={`outline`}
            />
          </div>

          {/* Meta row */}
          <div className="flex items-center gap-8 text-sm">
            {active.score != null && (
              <div>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Rating </span>
                <span className="font-bold text-white">{active.score}</span>
              </div>
            )}
            {active.year && (
              <div>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Year </span>
                <span className="font-bold text-white">{active.year}</span>
              </div>
            )}
            {active.status && (
              <div>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Status </span>
                <span
                  className="font-bold"
                  style={{
                    color: active.airing ? "#4ade80" : "rgba(255,255,255,0.8)",
                  }}
                >
                  {active.airing ? "Airing" : active.status}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0a0f)",
        }}
      />
    </section>
  );
}
