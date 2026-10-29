import React from 'react';
import { SkeletonBadge, SkeletonBox, SkeletonButton, SkeletonText } from '@/components/Skeleton';

export default function DatasheetDetailLoading() {
  return (
    <main className="min-h-screen bg-neutral-100 px-3 py-4 font-sans sm:px-6 sm:py-6" aria-label="Loading product datasheet" aria-busy="true">
      <div className="mx-auto mb-4 flex w-full max-w-[210mm] flex-wrap items-center justify-between gap-3 border-y border-neutral-200 bg-white px-4 py-3 sm:px-6">
        <SkeletonBox className="h-6 w-36 rounded" />
        <div className="flex gap-2">
          <SkeletonButton className="h-10 w-32" />
          <SkeletonButton className="h-10 w-32" />
        </div>
      </div>

      <article className="mx-auto w-full max-w-[210mm] border border-neutral-200 bg-white px-5 py-6 shadow-sm sm:px-9 sm:py-8">
        <header className="flex flex-wrap items-start justify-between gap-5 border-b-2 border-neutral-300 pb-5">
          <div className="space-y-3">
            <SkeletonBox className="h-10 w-36 rounded" />
            <SkeletonBox className="h-3 w-44 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-2">
            {[1, 2, 3].map((row) => <React.Fragment key={row}><SkeletonBox className="h-3.5 w-20 rounded" /><SkeletonBox className="h-3.5 w-24 rounded" /></React.Fragment>)}
          </div>
        </header>

        <section className="space-y-3 border-b border-neutral-200 py-5">
          <SkeletonBadge className="h-4 w-48 rounded" />
          <SkeletonBox className="h-8 w-4/5 rounded sm:h-9" />
          <SkeletonText lines={2} className="max-w-3xl" />
        </section>

        <section className="grid grid-cols-[112px_1fr] gap-4 border-b border-neutral-200 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
          <SkeletonBox className="min-h-[130px] w-full rounded sm:min-h-[160px]" />
          <div className="space-y-4 self-center">
            <SkeletonBox className="h-6 w-40 rounded" />
            {[1, 2, 3].map((row) => <div key={row} className="flex gap-4"><SkeletonBox className="h-4 w-24 rounded" /><SkeletonBox className="h-4 w-32 rounded" /></div>)}
          </div>
        </section>

        <div className="space-y-6 py-5">
          {[1, 2, 3, 4].map((table) => (
            <section key={table} className="space-y-3">
              <SkeletonBox className="h-6 w-64 max-w-full rounded" />
              <div className="space-y-2 border border-neutral-200 p-3">
                {[1, 2, 3, 4].map((row) => <div key={row} className="grid grid-cols-2 gap-4"><SkeletonBox className="h-4 w-3/4 rounded" /><SkeletonBox className="h-4 w-2/3 rounded" /></div>)}
              </div>
            </section>
          ))}
        </div>

        <footer className="space-y-3 border-t-2 border-neutral-300 pt-4">
          <SkeletonText lines={2} />
          <SkeletonBox className="h-4 w-full rounded" />
        </footer>
      </article>
    </main>
  );
}
