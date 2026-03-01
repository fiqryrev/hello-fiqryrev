'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  id: number;
  top: string;
  duration: string;
}

interface ParticleEffectProps {
  className?: string;
  maxParticles?: number;
  interval?: number;
}

export function ParticleEffect({
  className,
  maxParticles = 50,
  interval = 200,
}: ParticleEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextIdRef = useRef(0);

  const removeParticle = useCallback((id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prev) => {
        if (prev.length >= maxParticles) return prev;
        const id = nextIdRef.current++;
        return [
          ...prev,
          {
            id,
            top: `${Math.random() * 100}%`,
            duration: `${Math.random() * 3 + 2}s`,
          },
        ];
      });
    }, interval);

    return () => clearInterval(timer);
  }, [maxParticles, interval]);

  return (
    <div className={cn('particle-container', className)}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{ top: p.top, animationDuration: p.duration }}
          onAnimationEnd={() => removeParticle(p.id)}
        />
      ))}
    </div>
  );
}
