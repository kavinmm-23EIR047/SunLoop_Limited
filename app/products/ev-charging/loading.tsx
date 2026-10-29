import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function EVChargingLoading() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 font-sans overflow-x-hidden" aria-label="Loading EV Charging Systems">
      {/* HERO BANNER SKELETON */}
      <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 bg-brand-ink text-white">
        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SkeletonBadge className="w-56 h-7 bg-white/15" variant="orange" />
              <div className="space-y-2">
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-4/5 rounded-xl bg-white/15" variant="dark" />
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-3/5 rounded-xl bg-white/15" variant="dark" />
              </div>
              <SkeletonBox className="h-4 w-11/12 rounded bg-white/10" variant="dark" />
              <div className="flex gap-2 pt-1">
                <SkeletonBox className="h-6 w-36 rounded bg-white/15" variant="dark" />
                <SkeletonBox className="h-6 w-36 rounded bg-white/15" variant="dark" />
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <SkeletonButton className="w-48 h-11" variant="orange" />
                <SkeletonBox className="w-44 h-11 rounded-xl bg-white/10 border border-white/20" variant="dark" />
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <SkeletonBox className="h-80 w-full max-w-md rounded-2xl bg-white/5 border border-white/10" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATION TABLE SKELETON */}
      <section className="py-12 bg-white border-b border-black/5">
        <div className="container max-w-6xl mx-auto px-4 space-y-6">
          <div className="flex items-center justify-between">
            <SkeletonBox className="h-7 w-64 rounded" variant="warm" />
            <div className="flex gap-2">
              <SkeletonBox className="h-8 w-24 rounded-lg" variant="orange" />
              <SkeletonBox className="h-8 w-24 rounded-lg" variant="warm" />
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-xs">
            <div className="bg-[#1A1A1A] p-4 grid grid-cols-12 text-white">
              <SkeletonBox className="col-span-1 h-4 w-8 rounded bg-white/20" variant="dark" />
              <SkeletonBox className="col-span-4 h-4 w-36 rounded bg-white/20" variant="dark" />
              <SkeletonBox className="col-span-7 h-4 w-52 rounded bg-white/20" variant="dark" />
            </div>
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="grid grid-cols-12 p-3.5 border-b border-black/5 last:border-0 items-center">
                <SkeletonBox className="col-span-1 h-3.5 w-6 rounded" variant="warm" />
                <SkeletonBox className="col-span-4 h-3.5 w-40 rounded" variant="warm" />
                <SkeletonBox className="col-span-7 h-3.5 w-60 rounded" variant="warm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARGER MODELS GRID SKELETON */}
      <section className="py-14 bg-[#FAFAF5]">
        <div className="container max-w-6xl mx-auto px-4 space-y-8">
          <SkeletonBox className="h-8 w-56 rounded" variant="warm" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((charger) => (
              <div key={charger} className="rounded-2xl border border-black/10 bg-white p-6 space-y-4 shadow-xs">
                <SkeletonBox className="h-44 w-full rounded-xl" variant="warm" />
                <div className="flex items-center justify-between">
                  <SkeletonBadge className="w-20 h-5" variant="orange" />
                  <SkeletonBox className="h-5 w-16 rounded" variant="warm" />
                </div>
                <SkeletonBox className="h-6 w-4/5 rounded" variant="warm" />
                <SkeletonText lines={2} variant="warm" />
                <div className="pt-2 border-t border-black/5 space-y-2">
                  <SkeletonBox className="h-3.5 w-full rounded" variant="warm" />
                  <SkeletonBox className="h-3.5 w-4/5 rounded" variant="warm" />
                </div>
                <SkeletonButton className="w-full h-10 mt-2" variant="orange" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

