import React from 'react';
import { SkeletonBox, SkeletonText, SkeletonBadge, SkeletonButton } from '@/components/Skeleton';

export default function AIPortalLoading() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-slate-100 pt-12 pb-20 font-sans" aria-label="Loading AI Portal Dashboard">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        
        {/* Navigation Breadcrumb / Node Status */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SkeletonBox className="h-8 w-40 rounded-lg bg-white/5 border border-white/10" variant="dark" />
          <div className="flex items-center gap-2">
            <SkeletonBox className="h-7 w-36 rounded-full bg-emerald-500/10 border border-emerald-500/20" variant="dark" />
            <SkeletonBox className="h-4 w-32 rounded bg-white/5" variant="dark" />
          </div>
        </div>

        {/* Maintenance / Preview Banner Skeleton */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <SkeletonBox className="h-11 w-11 rounded-xl bg-amber-500/20 border border-amber-500/30" variant="dark" />
              <div className="space-y-2">
                <SkeletonBox className="h-4 w-44 rounded bg-amber-500/20" variant="dark" />
                <SkeletonBox className="h-6 w-80 sm:w-96 rounded bg-white/15" variant="dark" />
                <SkeletonBox className="h-3.5 w-72 rounded bg-white/10" variant="dark" />
              </div>
            </div>
            <SkeletonBox className="h-10 w-44 rounded-xl bg-[#E86526]/50" variant="orange" />
          </div>
        </div>

        {/* MAIN DASHBOARD SKELETON (Mac-style window with 3 KPI cards & live graph) */}
        <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-5 sm:p-8 shadow-2xl space-y-6">
          {/* Dashboard Window Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-amber-500/60" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
              <SkeletonBox className="h-6 w-48 rounded-md bg-slate-800 ml-3" variant="dark" />
            </div>
            <SkeletonBox className="h-6 w-28 rounded-full bg-emerald-500/20" variant="dark" />
          </div>

          {/* 3 KPI Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((card) => (
              <div key={card} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <SkeletonBox className="h-4 w-24 rounded bg-slate-800" variant="dark" />
                  <SkeletonBox className="h-7 w-7 rounded-lg bg-slate-800" variant="dark" />
                </div>
                <SkeletonBox className="h-8 w-28 rounded-lg bg-slate-700" variant="dark" />
                <SkeletonBox className="h-3.5 w-36 rounded bg-slate-800" variant="dark" />
              </div>
            ))}
          </div>

          {/* Live Wave Graph Canvas Skeleton */}
          <div className="rounded-2xl border border-slate-800 bg-[#080D1A] p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <SkeletonBox className="h-5 w-48 rounded bg-slate-800" variant="dark" />
                  <SkeletonBox className="h-4 w-20 rounded bg-orange-500/20" variant="dark" />
                </div>
                <SkeletonBox className="h-3.5 w-64 rounded bg-slate-800/60" variant="dark" />
              </div>
              <div className="flex gap-1.5">
                {['24H', '7D', '30D', 'Live'].map((tab) => (
                  <SkeletonBox key={tab} className="h-8 w-12 rounded-lg bg-slate-800" variant="dark" />
                ))}
              </div>
            </div>

            {/* Simulated Shimmer Waveform */}
            <div className="relative h-48 w-full rounded-xl bg-slate-900/60 overflow-hidden flex items-end p-4">
              <SkeletonBox className="h-full w-full rounded-xl bg-gradient-to-t from-orange-500/20 to-transparent" variant="dark" />
            </div>

            {/* Telemetry Stream Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
              <SkeletonBox className="h-4 w-48 rounded bg-slate-800" variant="dark" />
              <SkeletonBox className="h-4 w-36 rounded bg-slate-800" variant="dark" />
            </div>
          </div>
        </div>

        {/* 4 Feature Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <SkeletonBox className="h-10 w-10 rounded-xl bg-slate-800" variant="dark" />
              <SkeletonBox className="h-5 w-32 rounded bg-slate-700" variant="dark" />
              <SkeletonBox className="h-3.5 w-full rounded bg-slate-800" variant="dark" />
              <SkeletonBox className="h-3.5 w-4/5 rounded bg-slate-800" variant="dark" />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

