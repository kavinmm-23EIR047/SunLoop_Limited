'use client';

import { useEffect, useRef, useState } from 'react';

export function CountUp({
  end,
  suffix = '',
  duration = 1400,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;

    let frame = 0;
    let startedAt = 0;

    const animate = () => {
      const tick = (now: number) => {
        if (!startedAt) startedAt = now;
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setValue(Math.round(end * easedProgress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      animate();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      animate();
    }, { threshold: 0.35 });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, end]);

  return (
    <span ref={numberRef}>
      {value}{suffix}
    </span>
  );
}
