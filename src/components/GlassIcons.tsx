'use client';

import React, { useState, useRef, useEffect } from 'react';
import type { GlassIconsItem, GlassIconsProps } from '@/types/components';

export type { GlassIconsItem, GlassIconsProps };

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
};

const GlassIcons: React.FC<GlassIconsProps> = ({
  items,
  className,
  compact = false,
  isDarkMode = true,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [tooltipPositions, setTooltipPositions] = useState<Record<number, string>>({});
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const containerClasses = compact
    ? `grid grid-cols-5 gap-3 justify-items-center sm:flex sm:flex-wrap sm:gap-6 py-4 overflow-visible ${className || ''}`
    : `grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible ${className || ''}`;

  const iconSize = compact
    ? 'w-[2.8em] h-[2.8em] sm:w-[3.2em] sm:h-[3.2em]'
    : 'w-[2.8em] h-[2.8em] md:w-[3em] md:h-[3em]';

  const calculateTooltipPosition = (index: number): string => {
    if (typeof window === 'undefined') return 'center';
    if (window.innerWidth >= 640) return 'center'; // Desktop - always center

    const iconElement = iconRefs.current[index];
    if (!iconElement) return 'center';

    const rect = iconElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const iconCenter = rect.left + rect.width / 2;

    // More precise detection: check if tooltip would overflow
    const tooltipEstimatedWidth = 120; // Approximate tooltip width
    const tooltipLeft = iconCenter - tooltipEstimatedWidth / 2;
    const tooltipRight = iconCenter + tooltipEstimatedWidth / 2;

    // If tooltip would overflow left edge, align left
    if (tooltipLeft < 10) {
      return 'left';
    }
    // If tooltip would overflow right edge, align right
    if (tooltipRight > viewportWidth - 10) {
      return 'right';
    }
    // Otherwise center it
    return 'center';
  };

  const handleIconClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const position = calculateTooltipPosition(index);
    setTooltipPositions((prev) => ({ ...prev, [index]: position }));
  };

  useEffect(() => {
    const handleResize = () => {
      const newPositions: Record<number, string> = {};
      items.forEach((_, index) => {
        newPositions[index] = calculateTooltipPosition(index);
      });
      setTooltipPositions(newPositions);
    };

    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [items]);

  return (
    <div className={containerClasses}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const tooltipPosition = tooltipPositions[index] || 'center';

        return (
          <div
            key={index}
            className="relative group"
            ref={(el) => {
              iconRefs.current[index] = el;
            }}
          >
            <button
              type="button"
              aria-label={item.label}
              onClick={() => handleIconClick(index)}
              className={`relative bg-transparent outline-none border-none cursor-pointer sm:cursor-default sm:pointer-events-none ${iconSize} [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] ${
                item.customClass || ''
              }`}
            >
              <span
                className={`absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] box-border [will-change:transform] sm:group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)] ${isActive ? '[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,-1em)]' : ''}`}
                style={{
                  ...getBackgroundStyle(item.color),
                  boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)',
                }}
              ></span>

              <span
                className={`absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] [-moz-backdrop-filter:blur(0.75em)] box-border [will-change:transform] transform sm:group-hover:[transform:translate3d(0,0,2em)] ${isActive ? '[transform:translate3d(0,0,3em)]' : ''}`}
                style={{
                  boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset',
                }}
              >
                <span
                  className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center"
                  aria-hidden="true"
                  style={{
                    filter: isDarkMode ? 'none' : 'brightness(0) saturate(100%)',
                  }}
                >
                  {item.icon}
                </span>
              </span>
            </button>

            {/* Mobile tooltip - smart positioning */}
            <span
              className={`sm:hidden absolute top-full whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] z-[9999] pointer-events-none ${
                tooltipPosition === 'left'
                  ? 'left-0 flex justify-start'
                  : tooltipPosition === 'right'
                    ? 'right-0 flex justify-end'
                    : 'left-0 right-0 flex justify-center'
              } ${isActive ? 'opacity-100 [transform:translateY(20%)]' : 'translate-y-0'}`}
            >
              <span className="inline-block px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white">
                {item.label}
              </span>
            </span>

            {/* Desktop tooltip - always centered */}
            <span
              className={`hidden sm:flex absolute top-full left-0 right-0 justify-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)] z-[9999] pointer-events-none ${
                isActive ? 'opacity-100 [transform:translateY(20%)]' : ''
              }`}
            >
              <span className="inline-block px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white">
                {item.label}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default GlassIcons;
