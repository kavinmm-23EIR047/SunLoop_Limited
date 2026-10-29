import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function DatasheetsLoading() {
  return (
    <main className="min-h-screen bg-white font-sans" aria-label="Loading Technical Datasheets">
      {/* HEADER SKELETON */}
      <section className="border-b-4 border-brand-primary bg-brand-bg-subtle py-8 md:py-10">
        <div className="container max-w-6xl mx-auto px-4 space-y-3">
          <SkeletonBadge className="w-28 h-6" variant="orange" />
          <SkeletonBox className="h-9 md:h-11 w-64 rounded-xl" variant="warm" />
          <SkeletonBox className="h-4 w-4/5 max-w-2xl rounded" variant="warm" />
        </div>
      </section>

      {/* FILTER CONTROLS & SEARCH SKELETON */}
      <section className="container max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Search input & series tabs */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <SkeletonBox className="h-11 w-full sm:w-80 rounded-xl" variant="warm" />
          <div className="flex gap-2 overflow-x-hidden">
            <SkeletonBox className="h-9 w-20 rounded-lg" variant="orange" />
            <SkeletonBox className="h-9 w-28 rounded-lg" variant="warm" />
            <SkeletonBox className="h-9 w-28 rounded-lg" variant="warm" />
            <SkeletonBox className="h-9 w-28 rounded-lg" variant="warm" />
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex gap-2 overflow-x-hidden pb-2 border-b border-black/5">
          {['All Products', 'Residential Battery', 'Commercial Battery', 'Container ESS', 'Solar Power', 'EV Charger'].map((tab) => (
            <SkeletonBox key={tab} className="h-8 w-32 rounded-full shrink-0" variant="warm" />
          ))}
        </div>

        {/* DATASHEETS GRID SKELETON */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-black/10 bg-[#FAFAF5] p-6 space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <SkeletonBox className="h-10 w-10 rounded-xl bg-orange-100" variant="orange" />
                  <SkeletonBadge className="w-16 h-5" variant="warm" />
                </div>
                <SkeletonBox className="h-5 w-44 rounded" variant="warm" />
                <SkeletonBox className="h-3.5 w-32 rounded" variant="warm" />
                <SkeletonText lines={2} variant="warm" />
              </div>

              <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                <SkeletonBox className="h-4 w-20 rounded" variant="warm" />
                <SkeletonButton className="w-28 h-9" variant="orange" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

