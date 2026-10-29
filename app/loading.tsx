import React from 'react';
import { SkeletonBadge, SkeletonBox, SkeletonButton, SkeletonText } from '@/components/Skeleton';

function LoadingSectionHeading() {
  return (
    <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center" aria-hidden="true">
      <SkeletonBadge className="mx-auto h-6 w-28" />
      <SkeletonBox className="mx-auto h-9 w-4/5 rounded-xl sm:h-11" />
      <SkeletonBox className="mx-auto h-4 w-3/5 rounded" />
    </div>
  );
}

export default function HomeLoading() {
  return (
    <main className="min-w-0 overflow-clip bg-white font-sans" aria-label="Loading homepage" aria-busy="true">
      <section className="relative min-h-[560px] overflow-hidden bg-neutral-50 md:min-h-[680px]">
        <SkeletonBox className="absolute inset-0 h-full w-full rounded-none" />
        <div className="container relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-10 md:min-h-[680px] md:px-8">
          <div className="w-full max-w-2xl space-y-6">
            <div className="flex flex-wrap gap-2">
              <SkeletonBadge className="h-8 w-44" />
              <SkeletonBadge className="h-8 w-48" />
            </div>
            <div className="space-y-3">
              <SkeletonBox className="h-11 w-11/12 rounded-xl sm:h-14" />
              <SkeletonBox className="h-11 w-3/4 rounded-xl sm:h-14" />
            </div>
            <SkeletonText lines={2} className="max-w-xl" />
            <div className="flex flex-wrap gap-3 pt-2">
              <SkeletonButton className="h-12 w-40" />
              <SkeletonButton className="h-12 w-44" />
            </div>
            <div className="flex items-center gap-2 pt-2">
              {[1, 2, 3, 4].map((dot) => <SkeletonBox key={dot} className="h-2.5 w-2.5 rounded-full" />)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white px-4 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="-mt-12 grid grid-cols-3 divide-x divide-neutral-200 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:-mt-14 sm:rounded-3xl sm:p-7">
            {[1, 2, 3].map((stat) => (
              <div key={stat} className="space-y-2 px-2 sm:px-6">
                <SkeletonBox className="mx-auto h-7 w-16 rounded sm:mx-0 sm:h-9" />
                <SkeletonBox className="mx-auto h-3 w-20 rounded sm:mx-0 sm:w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 px-4 py-10 sm:py-14">
        <LoadingSectionHeading />
        <div className="container mx-auto max-w-6xl space-y-10">
          {[0, 1, 2].map((row) => (
            <div key={row} className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
              <SkeletonBox className={`aspect-[16/10] w-full rounded-2xl ${row % 2 ? 'md:order-2' : ''}`} />
              <div className={`space-y-4 ${row % 2 ? 'md:order-1' : ''}`}>
                <SkeletonBadge className="h-6 w-28" />
                <SkeletonBox className="h-8 w-4/5 rounded" />
                <SkeletonText lines={3} />
                <div className="grid grid-cols-2 gap-3">
                  <SkeletonBox className="h-16 rounded-xl" />
                  <SkeletonBox className="h-16 rounded-xl" />
                </div>
                <SkeletonButton className="h-11 w-40" />
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto mt-10 max-w-6xl rounded-2xl border border-neutral-200 p-5 sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <SkeletonBadge className="h-6 w-40" />
              <SkeletonBox className="h-9 w-3/4 rounded" />
              <SkeletonText lines={4} />
            </div>
            <SkeletonBox className="aspect-[16/10] w-full rounded-xl" />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white px-4 py-10 sm:py-14">
        <LoadingSectionHeading />
        <div className="mx-auto max-w-2xl space-y-4">
          {[1, 2, 3, 4].map((stage) => (
            <article key={stage} className="flex min-h-[280px] flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:min-h-[320px] sm:p-9">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <SkeletonBox className="h-10 w-16 rounded" />
                  <SkeletonBox className="h-12 w-12 rounded-xl" />
                </div>
                <SkeletonBadge className="mb-3 h-5 w-28 rounded" />
                <SkeletonBox className="mb-3 h-7 w-4/5 rounded" />
                <SkeletonText lines={2} />
              </div>
              <SkeletonBox className="mt-6 h-12 w-full rounded border-t border-neutral-200 pt-4" />
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 px-4 py-10 sm:py-14">
        <LoadingSectionHeading />
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {[1, 2, 3].map((card) => (
            <div key={card} className={`space-y-4 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7 ${card === 3 ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center justify-between">
                <SkeletonBadge className="h-6 w-32" />
                <SkeletonBox className="h-11 w-11 rounded-xl" />
              </div>
              <SkeletonBox className="h-7 w-2/3 rounded" />
              <SkeletonText lines={2} />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((pill) => <SkeletonBadge key={pill} className="h-6 w-28 rounded-md" />)}
              </div>
              <SkeletonBox className={`w-full rounded-xl ${card === 3 ? 'aspect-[21/8]' : 'aspect-[16/10]'}`} />
              <SkeletonButton className="h-11 w-44" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="container mx-auto max-w-7xl rounded-3xl border border-neutral-200 p-5 sm:p-8 md:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-4 lg:col-span-7">
              <SkeletonBadge className="h-6 w-36" />
              <SkeletonBox className="h-10 w-4/5 rounded-xl" />
              <SkeletonText lines={2} className="max-w-xl" />
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3].map((pill) => <SkeletonBadge key={pill} className="h-7 w-36" />)}
              </div>
              <SkeletonButton className="h-12 w-56" />
            </div>
            <SkeletonBox className="aspect-[16/10] w-full rounded-2xl lg:col-span-5" />
          </div>
        </div>
      </section>
    </main>
  );
}
