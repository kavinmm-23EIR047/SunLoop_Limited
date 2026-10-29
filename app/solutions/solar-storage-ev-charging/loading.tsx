import React from 'react';
import { SkeletonBox, SkeletonText } from '@/components/Skeleton';

function SolutionCardSkeleton({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="grid items-center gap-6 border-b border-neutral-200 pb-12 last:border-0 last:pb-0 md:grid-cols-[1.02fr_0.98fr] md:gap-8 lg:gap-10">
      <div className={`order-1 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex flex-wrap gap-2">
          <SkeletonBox className="h-6 w-40 rounded-md" />
          <SkeletonBox className="h-6 w-52 rounded-md" />
        </div>
        <SkeletonBox className="mt-4 h-8 w-11/12 rounded-md sm:h-9" />
        <SkeletonText lines={2} className="mt-3" />
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {[0, 1].map((item) => (
            <div key={item} className="rounded-xl border border-neutral-200 bg-white px-3 py-3">
              <SkeletonBox className="h-3 w-2/3 rounded" />
              <SkeletonBox className="mt-2 h-3.5 w-5/6 rounded" />
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <SkeletonBox className="h-4 w-4 shrink-0 rounded-full" />
          <SkeletonBox className="h-3.5 w-11/12 rounded" />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <SkeletonBox className="h-10 w-44 rounded-xl" />
          <SkeletonBox className="h-4 w-36 rounded" />
        </div>
      </div>
      <div className={`order-2 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm">
          <SkeletonBox className="absolute inset-0 h-full w-full rounded-none" />
          <SkeletonBox className="absolute left-4 top-4 h-7 w-28 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function SolarStorageEVLoading() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAF5] pb-16 font-sans" aria-label="Loading Solar, Storage and EV Solutions">
      <section className="relative h-[68vh] min-h-[28rem] max-h-[42rem] w-full overflow-hidden bg-neutral-100">
        <SkeletonBox className="absolute inset-0 h-full w-full rounded-none" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 py-8 sm:px-6 md:px-8 lg:px-10">
          <div className="w-full max-w-3xl space-y-5">
            <SkeletonBox className="h-10 w-40 rounded-lg" />
            <div className="space-y-2">
              <SkeletonBox className="h-11 w-11/12 max-w-2xl rounded-lg sm:h-14" />
              <SkeletonBox className="h-11 w-3/4 max-w-xl rounded-lg sm:h-14" />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-14 md:py-20">
        <div className="container mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <SkeletonBox className="mx-auto h-4 w-44 rounded" />
            <SkeletonBox className="mx-auto h-8 w-10/12 rounded-md sm:h-9" />
            <SkeletonText lines={2} className="mx-auto max-w-xl" />
          </div>

          <div className="space-y-12 md:space-y-14">
            <SolutionCardSkeleton />
            <SolutionCardSkeleton reverse />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <SkeletonBox className="mx-auto h-6 w-48 rounded-full" />
            <SkeletonBox className="mx-auto h-8 w-9/12 rounded-md sm:h-9" />
            <SkeletonText lines={2} className="mx-auto max-w-xl" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[0, 1, 2].map((item) => <SkeletonBox key={item} className="h-9 w-36 rounded-full" />)}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                <SkeletonBox className="aspect-[4/3] w-full rounded-xl" />
                <SkeletonBox className="mt-4 h-5 w-4/5 rounded" />
                <SkeletonText lines={2} className="mt-3" />
                <SkeletonBox className="mt-4 h-9 w-32 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
