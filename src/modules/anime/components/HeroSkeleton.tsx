export default function HeroSwiperSkeleton() {
  return (
    <div className="hero-swiper h-full animate-pulse w-full min-h-[87vh] flex flex-col lg:flex-row items-center gap-10 p-3 md:p-10">
      {/* Poster Skeleton */}
      <div className="w-full lg:w-[25%] shrink-0 aspect-[2/3] lg:h-[500px] bg-muted rounded-2xl shadow-2xl" />

      {/* Content Skeleton */}
      <div className="max-w-3xl w-full flex flex-col gap-4">
        {/* Rating Badge */}
        <div className="h-6 w-24 bg-muted rounded-full mb-2" />

        {/* Title */}
        <div className="space-y-3 mb-3">
          <div className="h-10 md:h-14 bg-muted rounded-full w-[85%] md:w-[70%]" />
          <div className="h-10 md:h-14 bg-muted rounded-full w-[50%] md:w-[40%] md:hidden" />
        </div>

        {/* Synopsis (Line Clamped Paragraph) */}
        <div className="space-y-2 mb-6 w-full">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-[95%]" />
          <div className="h-4 bg-muted rounded w-[90%]" />
          <div className="h-4 bg-muted rounded w-[60%]" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 w-full p-2">
          <div className="flex items-center gap-3">
            {/* Watch Trailer Button */}
            <div className="h-12 w-40 bg-muted rounded-full" />
            {/* Watchlist Icon Button */}
            <div className="h-12 w-12 bg-muted rounded-full" />
          </div>
          {/* View More Button */}
          <div className="h-12 w-36 bg-muted rounded-full" />
        </div>

        {/* Meta Info (Score, Year, Status) */}
        <div className="flex gap-8 mt-2">
          <div className="space-y-2">
            <div className="h-3 w-12 bg-muted rounded" />
            <div className="h-4 w-8 bg-muted rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-10 bg-muted rounded" />
            <div className="h-4 w-12 bg-muted rounded" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-14 bg-muted rounded" />
            <div className="h-4 w-16 bg-muted rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
