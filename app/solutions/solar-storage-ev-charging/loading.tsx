import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function SolarStorageEVLoading() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-16 font-sans overflow-hidden" aria-label="Loading Solar, Storage and EV Solutions">
      <section className="bg-brand-ink text-white relative py-16 md:py-24 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SkeletonBadge className="w-44 h-7 bg-white/15" variant="orange" />
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

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-5xl space-y-16 px-4">
          {[1, 2, 3].map((item, idx) => (
            <div key={item} className="grid items-center gap-8 border-b border-black/[0.07] pb-16 last:border-0 md:grid-cols-2 md:gap-12">
              <div className={`space-y-4 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <SkeletonBadge className="w-16 h-6" variant="orange" />
                <SkeletonBox className="h-7 w-4/5 rounded" variant="warm" />
                <SkeletonText lines={3} variant="warm" />
                <SkeletonButton className="w-40 h-10 mt-2" variant="orange" />
              </div>

              <div className={`rounded-2xl border border-slate-200 bg-white p-4 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <SkeletonBox className="aspect-[16/10] w-full rounded-xl" variant="warm" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

