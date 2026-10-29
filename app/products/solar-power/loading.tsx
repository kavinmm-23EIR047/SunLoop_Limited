import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function SolarPowerLoading() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 font-sans overflow-x-hidden" aria-label="Loading Solar Power solutions">
      {/* HERO BANNER SKELETON */}
      <section className="relative w-full pt-28 pb-16 sm:pt-32 sm:pb-20 bg-brand-ink text-white">
        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SkeletonBadge className="w-56 h-7 bg-white/15" variant="orange" />
              <div className="space-y-2">
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-4/5 rounded-xl bg-white/15" variant="dark" />
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-1/2 rounded-xl bg-white/15" variant="dark" />
              </div>
              <SkeletonBox className="h-4 w-11/12 rounded bg-white/10" variant="dark" />
              <SkeletonBox className="h-4 w-3/4 rounded bg-white/10" variant="dark" />

              <div className="pt-3 flex flex-wrap gap-3">
                <SkeletonButton className="w-44 h-11" variant="orange" />
                <SkeletonBox className="w-40 h-11 rounded-xl bg-white/10 border border-white/20" variant="dark" />
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <SkeletonBox className="h-80 w-full max-w-md rounded-2xl bg-white/5 border border-white/10" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* CAPACITY MATRIX SKELETON */}
      <section className="py-12 bg-[#FAFAF5] border-b border-black/5">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          <div>
            <SkeletonBox className="h-7 w-64 rounded mb-4" variant="warm" />
            <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-xs space-y-3">
              <div className="grid grid-cols-2 pb-3 border-b border-black/5 font-bold">
                <SkeletonBox className="h-4 w-28 rounded" variant="warm" />
                <SkeletonBox className="h-4 w-36 rounded" variant="warm" />
              </div>
              {[1, 2, 3].map((row) => (
                <div key={row} className="grid grid-cols-2 py-2 border-b border-black/5 last:border-0">
                  <SkeletonBox className="h-4 w-32 rounded" variant="warm" />
                  <SkeletonBox className="h-4 w-40 rounded" variant="warm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <SkeletonBox className="h-7 w-48 rounded mb-4" variant="warm" />
            <div className="grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((card) => (
                <div key={card} className="rounded-2xl border border-black/10 bg-white p-5 space-y-3 shadow-xs">
                  <SkeletonBox className="h-5 w-44 rounded" variant="warm" />
                  <SkeletonBox className="h-3 w-full rounded" variant="warm" />
                  <SkeletonBox className="h-3 w-4/5 rounded" variant="warm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION SKELETON */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4 space-y-16">
          <SkeletonBox className="h-8 w-72 rounded" variant="warm" />

          {[1, 2].map((prod, idx) => (
            <div key={prod} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className={`space-y-4 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <SkeletonBadge className="w-24 h-6" variant="orange" />
                <SkeletonBox className="h-7 w-3/4 rounded" variant="warm" />
                <SkeletonText lines={3} variant="warm" />
                <div className="space-y-2 pt-2">
                  <SkeletonBox className="h-4 w-11/12 rounded" variant="warm" />
                  <SkeletonBox className="h-4 w-4/5 rounded" variant="warm" />
                  <SkeletonBox className="h-4 w-5/6 rounded" variant="warm" />
                </div>
                <SkeletonButton className="w-40 h-10 mt-2" variant="orange" />
              </div>

              <div className={`rounded-2xl border border-slate-200 bg-[#FAFAF5] p-6 h-72 flex items-center justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <SkeletonBox className="h-56 w-5/6 rounded-xl" variant="warm" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

