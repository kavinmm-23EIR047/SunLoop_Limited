import React from 'react';
import { SkeletonBadge, SkeletonBox, SkeletonText } from '@/components/Skeleton';

export default function TermsLoading() {
  return (
    <main className="min-h-screen bg-neutral-50 py-10 font-sans sm:py-14" aria-label="Loading terms and conditions" aria-busy="true">
      <div className="container mx-auto max-w-4xl space-y-6 px-4 sm:px-6">
        <SkeletonBox className="h-9 w-32 rounded-lg" />
        <article className="space-y-7 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
          <header className="space-y-3 border-b border-neutral-200 pb-6">
            <SkeletonBadge className="h-6 w-36" />
            <SkeletonBox className="h-10 w-4/5 rounded-xl sm:h-12" />
            <SkeletonBox className="h-4 w-64 max-w-full rounded" />
          </header>
          {[1, 2, 3, 4, 5, 6].map((section) => (
            <section key={section} className="space-y-3">
              <SkeletonBox className="h-6 w-2/3 rounded" />
              <SkeletonText lines={section === 3 ? 4 : 2} />
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
