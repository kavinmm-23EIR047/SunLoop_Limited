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
  const accentStart = title.lastIndexOf(' ') + 1;
  const titlePrefix = title.slice(0, accentStart);
  const titleAccent = title.slice(accentStart);

  return (
    <section className="relative h-[68vh] min-h-[28rem] max-h-[42rem] w-full overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        onError={fallbackImage ? (event) => { event.currentTarget.src = fallbackImage; } : undefined}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto flex h-full w-full items-center px-4 py-8 text-left sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-7xl">
          <Reveal className="max-w-3xl space-y-4 text-left">
            <span className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-sm">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {eyebrow}
            </span>

            <h1 className="solution-hero-title max-w-3xl text-left text-4xl leading-[1.08] tracking-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl">
              {titlePrefix}<span className="text-[#FF874A]">{titleAccent}</span>
            </h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
