import { useEffect, useId, useRef, memo } from 'react';

/**
 * Full-page animated background.
 * Three blurred colour blobs (pink / blue / purple — site palette) are
 * distorted by an SVG feTurbulence + feDisplacementMap filter whose
 * baseFrequency is advanced each frame, creating a slow organic morph.
 * The whole layer is fixed at z-0; all page content sits above it.
 *
 * The turbulence attribute is mutated directly via ref — no React state,
 * no re-renders, no layout thrash.
 */
const EtherealBackground = memo(function EtherealBackground() {
  const raw = useId();
  // IDs used in SVG/CSS must not contain colons
  const uid = raw.replace(/[^a-zA-Z0-9]/g, '_');
  const filterId = `eb_${uid}`;

  const turbRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    let t = 0;
    let raf: number;

    const tick = () => {
      t += 0.00030;
      if (turbRef.current) {
        const bx = (0.0065 + Math.sin(t * 0.7)  * 0.0022).toFixed(5);
        const by = (0.0048 + Math.cos(t * 0.55) * 0.0018).toFixed(5);
        turbRef.current.setAttribute('baseFrequency', `${bx} ${by}`);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* ── Filter definition (zero size, not painted) ─────────────────── */}
      <svg
        className="absolute"
        style={{ width: 0, height: 0, overflow: 'hidden' }}
        focusable="false"
      >
        <defs>
          <filter
            id={filterId}
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.0065 0.0048"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ── Blob layer — displacement is applied to the composite ──────── */}
      <div
        className="absolute inset-0"
        style={{ filter: `url(#${filterId})` }}
      >
        {/* Pink — top-left */}
        <div
          className="absolute"
          style={{
            width: 720,
            height: 720,
            top: -260,
            left: -260,
            borderRadius: '42% 58% 65% 35% / 45% 52% 48% 55%',
            background: 'rgba(244, 114, 182, 0.22)',
            filter: 'blur(90px)',
          }}
        />

        {/* Blue — bottom-right */}
        <div
          className="absolute"
          style={{
            width: 720,
            height: 720,
            bottom: -260,
            right: -260,
            borderRadius: '58% 42% 35% 65% / 55% 30% 70% 45%',
            background: 'rgba(59, 130, 246, 0.20)',
            filter: 'blur(90px)',
          }}
        />

        {/* Purple — centre */}
        <div
          className="absolute"
          style={{
            width: 620,
            height: 620,
            top: '22%',
            right: '8%',
            borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%',
            background: 'rgba(168, 85, 247, 0.14)',
            filter: 'blur(110px)',
          }}
        />
      </div>
    </div>
  );
});

export default EtherealBackground;
