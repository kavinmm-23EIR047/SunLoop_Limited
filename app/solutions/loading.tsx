import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function SolutionsLoading() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 font-sans" aria-label="Loading solutions">
      {/* HERO SECTION SKELETON */}
      <section className="bg-white border-b border-black/5 py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-4 space-y-4">
          <SkeletonBadge className="w-48 h-6" variant="orange" />
          <div className="space-y-2">
            <SkeletonBox className="h-10 sm:h-12 md:h-14 w-4/5 rounded-xl" variant="warm" />
            <SkeletonBox className="h-10 sm:h-12 md:h-14 w-3/5 rounded-xl" variant="warm" />
          </div>
          <SkeletonText lines={2} className="max-w-2xl" variant="warm" />
        </div>
      </section>

      {/* SOLUTIONS CARDS GRID SKELETON */}
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <div
                key={card}
                className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <SkeletonBox className="aspect-[16/10] w-full" variant="warm" />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <SkeletonBadge className="w-20 h-5" variant="orange" />
                      <SkeletonBox className="h-8 w-8 rounded-lg" variant="warm" />
                    </div>
                    <SkeletonBox className="h-6 w-3/4 rounded" variant="warm" />
                    <SkeletonText lines={3} variant="warm" />
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <SkeletonBox className="h-10 w-full rounded-xl bg-orange-50 border border-orange-200" variant="orange" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

