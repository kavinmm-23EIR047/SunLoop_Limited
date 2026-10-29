import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function ContactLoading() {
  return (
    <main className="min-h-screen bg-[#FAFAF5] pb-20 font-sans" aria-label="Loading Contact page">
      {/* HEADER SKELETON */}
      <section className="bg-white border-b border-black/5 py-14 md:py-16">
        <div className="container max-w-6xl mx-auto px-4 space-y-4">
          <SkeletonBadge className="w-32 h-6" variant="orange" />
          <SkeletonBox className="h-10 sm:h-12 w-4/5 max-w-xl rounded-xl" variant="warm" />
          <SkeletonBox className="h-4 w-3/5 max-w-lg rounded" variant="warm" />
        </div>
      </section>

      {/* 2-COLUMN FORM & DETAILS SKELETON */}
      <section className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Card (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-black/10 bg-white p-6 sm:p-8 shadow-xs space-y-5">
            <div className="space-y-1">
              <SkeletonBox className="h-7 w-48 rounded" variant="warm" />
              <SkeletonBox className="h-4 w-64 rounded" variant="warm" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <SkeletonBox className="h-4 w-20 rounded" variant="warm" />
                <SkeletonBox className="h-11 w-full rounded-xl" variant="warm" />
              </div>
              <div className="space-y-2">
                <SkeletonBox className="h-4 w-24 rounded" variant="warm" />
                <SkeletonBox className="h-11 w-full rounded-xl" variant="warm" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <SkeletonBox className="h-4 w-28 rounded" variant="warm" />
                <SkeletonBox className="h-11 w-full rounded-xl" variant="warm" />
              </div>
              <div className="space-y-2">
                <SkeletonBox className="h-4 w-24 rounded" variant="warm" />
                <SkeletonBox className="h-11 w-full rounded-xl" variant="warm" />
              </div>
            </div>

            <div className="space-y-2">
              <SkeletonBox className="h-4 w-32 rounded" variant="warm" />
              <SkeletonBox className="h-11 w-full rounded-xl" variant="warm" />
            </div>

            <div className="space-y-2">
              <SkeletonBox className="h-4 w-24 rounded" variant="warm" />
              <SkeletonBox className="h-28 w-full rounded-xl" variant="warm" />
            </div>

            <SkeletonButton className="w-full h-12" variant="orange" />
          </div>

          {/* Right Column: Office & Hub Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Coimbatore Office */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <SkeletonBox className="h-10 w-10 rounded-xl" variant="warm" />
                <SkeletonBox className="h-6 w-36 rounded" variant="warm" />
              </div>
              <SkeletonText lines={2} variant="warm" />
              <SkeletonBox className="h-4 w-44 rounded" variant="orange" />
            </div>

            {/* Manufacturing Hub */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <SkeletonBox className="h-10 w-10 rounded-xl" variant="warm" />
                <SkeletonBox className="h-6 w-44 rounded" variant="warm" />
              </div>
              <SkeletonText lines={2} variant="warm" />
              <SkeletonBox className="h-4 w-40 rounded" variant="orange" />
            </div>

            {/* WhatsApp Direct Card */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <SkeletonBox className="h-10 w-10 rounded-xl bg-emerald-200" variant="shimmer" />
                <SkeletonBox className="h-6 w-40 rounded bg-emerald-200" variant="shimmer" />
              </div>
              <SkeletonBox className="h-4 w-52 rounded bg-emerald-200" variant="shimmer" />
              <SkeletonBox className="h-10 w-full rounded-xl bg-emerald-600/30" variant="shimmer" />
            </div>
          </div>

        </div>

        {/* FAQ ACCORDION SKELETON */}
        <div className="mt-16 max-w-4xl mx-auto space-y-4">
          <SkeletonBox className="h-8 w-56 mx-auto rounded mb-6" variant="warm" />
          {[1, 2, 3, 4].map((faq) => (
            <div key={faq} className="rounded-xl border border-black/10 bg-white p-4 flex items-center justify-between">
              <SkeletonBox className="h-5 w-4/5 rounded" variant="warm" />
              <SkeletonBox className="h-5 w-5 rounded-full" variant="warm" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

