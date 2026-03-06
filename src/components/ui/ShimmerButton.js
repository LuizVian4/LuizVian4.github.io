import React from 'react';
import { cn } from '../../lib/utils';

export function ShimmerButton({
  shimmerColor = '#ffffff',
  shimmerSize = '0.05em',
  shimmerDuration = '3s',
  borderRadius = '100px',
  background = 'rgba(0, 0, 0, 1)',
  className,
  children,
  ...props
}) {
  return (
    <button
      style={{
        '--spread': '90deg',
        '--shimmer-color': shimmerColor,
        '--radius': borderRadius,
        '--speed': shimmerDuration,
        '--cut': shimmerSize,
        '--bg': background,
      }}
      className={cn(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white',
        'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
        'shimmer-button',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          '-z-30 absolute inset-0 overflow-visible blur-[2px]',
          'shimmer-spark-container'
        )}
      >
        <div className="shimmer-slide absolute inset-0 aspect-square h-full">
          <div className="shimmer-spin-around absolute -inset-full w-auto rotate-0" />
        </div>
      </div>
      {children}
      <div
        className={cn(
          'absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium',
          'shadow-[inset_0_-8px_10px_#ffffff1f]',
          'transform-gpu transition-all duration-300 ease-in-out',
          'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',
          'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]'
        )}
      />
      <div
        className="absolute inset-[var(--cut)] -z-20"
        style={{
          borderRadius: 'var(--radius)',
          background: 'var(--bg)',
        }}
      />
    </button>
  );
}
