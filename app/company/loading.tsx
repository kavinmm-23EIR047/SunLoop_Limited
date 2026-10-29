import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge } from '@/components/Skeleton';

export default function CompanyLoading() {
  return (
    <main className="font-sans bg-[#FAFAF3] pb-20" aria-label="Loading Company information">
      {/* HERO SECTION SKELETON */}
      <section className="pb-16 pt-16 md:pt-20 border-b border-black/5">
        <div className="container max-w-5xl mx-auto px-4 space-y-4">
          <SkeletonBadge className="w-36 h-6" variant="orange" />
          <div className="space-y-2">
            <SkeletonBox className="h-10 sm:h-12 md:h-14 w-11/12 rounded-xl" variant="warm" />
            <SkeletonBox className="h-10 sm:h-12 md:h-14 w-3/4 rounded-xl" variant="warm" />
          </div>
          <SkeletonText lines={3} className="max-w-4xl pt-2" variant="warm" />
          <SkeletonText lines={2} className="max-w-4xl" variant="warm" />
        </div>
      </section>

      {/* VISION & MISSION SPLIT SKELETON */}
      <section className="container max-w-5xl mx-auto px-4 py-16 md:py-20 space-y-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Vision Dark Card */}
          <div className="p-8 rounded-3xl bg-brand-ink text-white space-y-4 shadow-sm">
            <SkeletonBadge className="w-20 h-5 bg-white/20" variant="orange" />
            <SkeletonBox className="h-6 w-11/12 rounded bg-white/20" variant="dark" />
            <SkeletonBox className="h-6 w-4/5 rounded bg-white/20" variant="dark" />
            <SkeletonBox className="h-6 w-3/4 rounded bg-white/20" variant="dark" />
          </div>

          {/* Mission White Card */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 space-y-4 shadow-xs">
            <SkeletonBadge className="w-20 h-5" variant="warm" />
            <SkeletonBox className="h-6 w-11/12 rounded" variant="warm" />
            <SkeletonBox className="h-6 w-4/5 rounded" variant="warm" />
            <SkeletonBox className="h-6 w-3/4 rounded" variant="warm" />
          </div>
        </div>

        {/* 6 VALUES GRID SKELETON */}
        <div className="space-y-8">
          <div className="space-y-2">
            <SkeletonBadge className="w-40 h-6" variant="orange" />
            <SkeletonBox className="h-8 w-64 rounded" variant="warm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((val) => (
              <div key={val} className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-xs">
                <SkeletonBox className="h-10 w-10 rounded-xl" variant="warm" />
                <SkeletonBox className="h-6 w-32 rounded" variant="warm" />
                <SkeletonText lines={2} variant="warm" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

