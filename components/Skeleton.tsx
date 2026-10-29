import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'warm' | 'shimmer' | 'dark' | 'orange';
}

export function SkeletonBox({
  className = '',
  variant: _variant = 'warm',
}: SkeletonProps) {
  return (
    <div
      className={`skeleton-neutral !bg-neutral-200 rounded-lg ${className}`}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({
  lines = 2,
  className = '',
  variant = 'warm',
}: {
  lines?: number;
  className?: string;
  variant?: 'warm' | 'shimmer' | 'dark';
}) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox
          key={i}
          variant={variant}
          className={`h-3.5 ${
            i === lines - 1 && lines > 1 ? 'w-3/5' : 'w-full'
          } rounded`}
        />
      ))}
    </div>
  );
}

export function SkeletonBadge({
  className = 'w-24 h-6',
  variant = 'orange',
}: SkeletonProps) {
  return (
    <SkeletonBox
      variant={variant}
      className={`rounded-full ${className}`}
    />
  );
}

export function SkeletonButton({
  className = 'w-36 h-11',
  variant = 'orange',
}: SkeletonProps) {
  return (
    <SkeletonBox
      variant={variant}
      className={`rounded-xl shadow-xs ${className}`}
    />
  );
}

export function SkeletonCard({
  children,
  className = '',
  variant: _variant = 'warm',
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: 'warm' | 'dark';
}) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

