import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function SmartMicrogridLoading() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden" aria-label="Loading Smart Microgrid Solutions">
      {/* HERO SKELETON */}
      <section className="bg-brand-ink text-white relative py-16 md:py-24 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SkeletonBadge className="w-48 h-7 bg-white/15" variant="orange" />
              <div className="space-y-2">
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-11/12 rounded-xl bg-white/15" variant="dark" />
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-3/4 rounded-xl bg-white/15" variant="dark" />
              </div>
              <SkeletonBox className="h-4 w-5/6 rounded bg-white/10" variant="dark" />
              <SkeletonBox className="h-8 w-64 rounded-full bg-white/10" variant="dark" />
              <div className="pt-2 flex gap-3">
                <SkeletonButton className="w-44 h-11" variant="orange" />
                <SkeletonBox className="w-44 h-11 rounded-xl bg-white/10 border border-white/20" variant="dark" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <SkeletonBox className="aspect-[16/10] w-full rounded-2xl bg-white/5 border border-white/10" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* 6 MICROGRID COMPONENTS SKELETON */}
      <section className="py-16 bg-[#FAFAF5]">
        <div className="container max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SkeletonBadge className="w-36 h-6 mx-auto" variant="orange" />
            <SkeletonBox className="h-8 md:h-10 w-4/5 mx-auto rounded-xl" variant="warm" />
            <SkeletonBox className="h-4 w-3/5 mx-auto rounded" variant="warm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-white p-6 space-y-4 shadow-xs">
                <SkeletonBox className="aspect-[16/10] w-full rounded-xl" variant="warm" />
                <div className="flex items-center gap-3">
                  <SkeletonBox className="h-8 w-8 rounded-lg" variant="warm" />
                  <SkeletonBox className="h-5 w-40 rounded" variant="warm" />
                </div>
                <SkeletonText lines={3} variant="warm" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

