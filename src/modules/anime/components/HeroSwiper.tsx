import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { PlayIcon, BookmarkSimpleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import type { Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../css/heroSwiper.css";

import type { AnimeType } from "../types/anime.types";
import CustomBtn from "@/components/custom/CustomBtn";
import IconButton from "@/components/custom/IconButton";

interface HeroSwiperProps {
  animes: AnimeType[];
}

const SLIDE_DURATION = 10000;
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const poster: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HeroSwiper({ animes }: HeroSwiperProps) {
  const [active, setActive] = useState(0);

  if (!animes?.length) return null;

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      autoplay={{
        delay: SLIDE_DURATION,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => {
        setActive(swiper.realIndex);
      }}
      className="hero-swiper h-full rounded-2xl"
    >
      {animes.map((anime, index) => {
        // const animeTitle = anime.titless[0].type === "English" || anime.title;

        return (
          <SwiperSlide
            key={`${anime.mal_id}-${index}`}
            className="h-full w-full  md:min-h-[87vh]"
          >
            <motion.div
              key={`${anime.mal_id}-${active}`}
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10 flex flex-col lg:flex-row items-center gap-10 p-3 md:p-10  w-full"
            >
              <motion.div
                variants={poster}
                className="w-full lg:w-[25%] shrink-0 rounded-2xl overflow-hidden shadow-2xl"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  src={anime.images.jpg.large_image_url}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="max-w-3xl">
                <motion.span
                  variants={item}
                  className="inline-block mb-4 px-3 py-1 text-xs uppercase tracking-widest bg-white/10 rounded-full backdrop-blur"
                >
                  {anime.rating?.replace(/_/g, " ") || "Anime"}
                </motion.span>

                <motion.h1
                  variants={item}
                  className="text-4xl md:text-6xl font-black mb-5 leading-tight"
                >
                  {anime.title}
                </motion.h1>

                <motion.p
                  variants={item}
                  className="text-white/70 text-sm md:text-base mb-8 line-clamp-4"
                >
                  {anime.synopsis || "No synopsis available."}
                </motion.p>

                <motion.div
                  variants={item}
                  className="flex flex-col md:flex-row gap-4 mb-4 w-full p-2"
                >
                  <span className="flex items-center gap-3">
                    <CustomBtn
                      startIcon={PlayIcon}
                      text="Watch Trailer"
                      size="lg"
                    />

                    <IconButton
                      icon={BookmarkSimpleIcon}
                      tooltip="Add to list"
                      variant="secondary"
                    />
                  </span>
                  <CustomBtn text="View More" size="lg" variant={`outline`} />
                </motion.div>

                <motion.div
                  variants={item}
                  className="flex flex-col md:flex-row gap-8 text-sm"
                >
                  {anime.score && (
                    <div>
                      <span className="text-white/40">Rating </span>
                      <span className="font-bold">{anime.score}</span>
                    </div>
                  )}

                  {anime.year && (
                    <div>
                      <span className="text-white/40">Year </span>
                      <span className="font-bold">{anime.year}</span>
                    </div>
                  )}

                  {anime.status && (
                    <div>
                      <span className="text-white/40">Status </span>
                      <span className="font-bold">
                        {anime.airing ? "Airing" : anime.status}
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
            {/* </div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
