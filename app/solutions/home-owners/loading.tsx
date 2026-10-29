import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function HomeOwnersLoading() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden" aria-label="Loading Homeowner Solutions">
      {/* SOLUTION HERO SKELETON */}
      <section className="bg-brand-ink text-white relative py-16 md:py-24 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SkeletonBadge className="w-40 h-7 bg-white/15" variant="orange" />
              <div className="space-y-2">
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-11/12 rounded-xl bg-white/15" variant="dark" />
                <SkeletonBox className="h-10 sm:h-12 md:h-14 w-3/4 rounded-xl bg-white/15" variant="dark" />
              </div>
              <SkeletonBox className="h-4 w-5/6 rounded bg-white/10" variant="dark" />
              <SkeletonBox className="h-8 w-64 rounded-full bg-white/10" variant="dark" />
              <div className="pt-2 flex gap-3">
                <SkeletonButton className="w-44 h-11" variant="orange" />
                <SkeletonBox className="w-40 h-11 rounded-xl bg-white/10 border border-white/20" variant="dark" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <SkeletonBox className="aspect-[16/10] w-full rounded-2xl bg-white/5 border border-white/10" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 FEATURE CARDS SKELETON */}
      <section className="py-16 bg-white border-b border-black/5">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-md mx-auto mb-12 space-y-2">
            <SkeletonBox className="h-8 w-72 mx-auto rounded-lg" variant="warm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((feature) => (
              <div key={feature} className="text-center space-y-4 p-4 rounded-2xl">
                <SkeletonBox className="h-16 w-16 mx-auto rounded-2xl" variant="warm" />
                <SkeletonBox className="h-6 w-32 mx-auto rounded" variant="warm" />
                <SkeletonBox className="h-3.5 w-full rounded" variant="warm" />
                <SkeletonBox className="h-3.5 w-4/5 mx-auto rounded" variant="warm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE / SIZING TIERS */}
      <section className="py-16 bg-[#FAFAF5]">
        <div className="container max-w-6xl mx-auto px-4 space-y-8">
          <div className="space-y-2">
            <SkeletonBadge className="w-32 h-6" variant="orange" />
            <SkeletonBox className="h-8 w-64 rounded" variant="warm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((pkg) => (
              <div key={pkg} className="rounded-2xl border border-black/10 bg-white p-6 space-y-4 shadow-xs">
                <SkeletonBox className="h-6 w-36 rounded" variant="warm" />
                <SkeletonBox className="h-8 w-28 rounded-lg" variant="orange" />
                <SkeletonText lines={3} variant="warm" />
                <div className="pt-3 border-t border-black/5 space-y-2">
                  <SkeletonBox className="h-4 w-full rounded" variant="warm" />
                  <SkeletonBox className="h-4 w-4/5 rounded" variant="warm" />
                  <SkeletonBox className="h-4 w-5/6 rounded" variant="warm" />
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

