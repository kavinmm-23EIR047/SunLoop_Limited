import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function ProductsLoading() {
  return (
    <main className="min-h-screen bg-white pb-12 font-sans" aria-label="Loading products">
      {/* HERO BANNER SKELETON */}
      <section className="bg-brand-ink text-white relative overflow-hidden py-16 md:py-20 border-b border-white/10">
        <div className="container relative z-10 px-4 max-w-6xl mx-auto space-y-4">
          <SkeletonBadge className="w-48 h-7 bg-white/15" variant="orange" />
          <div className="space-y-2">
            <SkeletonBox className="h-10 sm:h-12 md:h-14 w-4/5 rounded-xl bg-white/15" variant="dark" />
            <SkeletonBox className="h-10 sm:h-12 md:h-14 w-1/2 rounded-xl bg-white/15" variant="dark" />
          </div>
          <SkeletonBox className="h-4 w-2/3 rounded bg-white/10" variant="dark" />
        </div>
      </section>

      {/* FILTER BAR SKELETON */}
      <div className="border-b border-slate-200 bg-white/95 py-3">
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SkeletonBox className="h-8 w-24 rounded-md" variant="warm" />
            <SkeletonBox className="h-4 w-32 rounded hidden sm:block" variant="warm" />
          </div>
          <div className="flex gap-2 overflow-x-hidden">
            <SkeletonBox className="h-8 w-20 rounded-md" variant="orange" />
            <SkeletonBox className="h-8 w-28 rounded-md" variant="warm" />
            <SkeletonBox className="h-8 w-28 rounded-md" variant="warm" />
            <SkeletonBox className="h-8 w-28 rounded-md" variant="warm" />
          </div>
        </div>
      </div>

      {/* PRODUCT LIST SKELETON */}
      <div className="container max-w-6xl mx-auto px-4 mt-12 space-y-16">
        {[1, 2, 3].map((item, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <div key={item} className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Product Image Card */}
              <div
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAF5] p-6 min-h-[380px] ${
                  imageLeft ? 'order-1' : 'order-1 lg:order-2'
                }`}
              >
                <div className="flex items-center justify-between">
                  <SkeletonBox className="h-6 w-24 rounded-md" variant="orange" />
                  <SkeletonBox className="h-6 w-20 rounded-md" variant="warm" />
                </div>
                <div className="my-auto py-8">
                  <SkeletonBox className="h-48 w-3/4 mx-auto rounded-xl" variant="warm" />
                </div>
                <div className="space-y-2">
                  <SkeletonBox className="h-10 w-10 rounded-lg" variant="warm" />
                  <SkeletonBox className="h-6 w-44 rounded" variant="warm" />
                  <SkeletonBox className="h-4 w-60 rounded" variant="warm" />
                </div>
              </div>

              {/* Product Details & Specs */}
              <div className={`space-y-5 ${imageLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
                <SkeletonBadge className="w-28 h-6" variant="orange" />
                <SkeletonBox className="h-8 sm:h-9 w-4/5 rounded-lg" variant="warm" />
                <SkeletonBox className="h-4 w-1/2 rounded" variant="orange" />
                <SkeletonText lines={3} variant="warm" />

                <div className="space-y-2.5 pt-2">
                  {[1, 2, 3, 4].map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <SkeletonBox className="h-4 w-4 rounded-full" variant="orange" />
                      <SkeletonBox className="h-4 w-11/12 rounded" variant="warm" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-3">
                  <SkeletonButton className="w-36 h-11" variant="orange" />
                  <SkeletonBox className="w-36 h-11 rounded-xl border border-slate-200" variant="warm" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

