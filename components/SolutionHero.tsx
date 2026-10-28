'use client';

import { LucideIcon } from 'lucide-react';
import { Reveal } from './UI';

export function SolutionHero({
  image,
  fallbackImage,
  imageAlt,
  eyebrow,
  title,
  icon: Icon,
}: {
  image: string;
  fallbackImage?: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  metric?: string;
}) {
  return (
    <section className="relative h-[58vh] min-h-[26rem] max-h-[40rem] w-full overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        onError={fallbackImage ? (event) => { event.currentTarget.src = fallbackImage; } : undefined}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full w-full items-center px-4 py-8 text-left sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-7xl">
          <Reveal className="max-w-3xl space-y-4 text-left">
            <span className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-sm">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {eyebrow}
            </span>

            <h1 className="max-w-3xl text-left text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
