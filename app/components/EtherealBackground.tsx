import { useRef, useId, useEffect, CSSProperties } from 'react';
import { animate, useMotionValue, type AnimationPlaybackControls } from 'motion/react';

// Blob silhouette mask — same source the original 21st.dev component uses
const BLOB_MASK = "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')";

function mapRange(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
  if (fromLow === fromHigh) return toLow;
  return toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);
}

interface BlobProps {
  color: string;
  style?: CSSProperties;
  scale?: number;  // 1–100, controls displacement intensity
  speed?: number;  // 1–100, controls hue rotation speed
  seed?: number;
}

function EtherealBlob({ color, style, scale = 45, speed = 22, seed = 0 }: BlobProps) {
  const rawId = useId();
  const id = `eb_${rawId.replace(/[^a-zA-Z0-9]/g, '_')}`;

  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueMotion = useMotionValue(180);
  const animCtrl = useRef<AnimationPlaybackControls | null>(null);

  // Map scale/speed to filter values, matching the original component's ranges
  const dispScale  = mapRange(scale, 1, 100, 20, 100);
  const duration   = mapRange(speed, 1, 100, 1000, 50) / 25;
  const freqX      = mapRange(scale, 0, 100, 0.001, 0.0005);
  const freqY      = mapRange(scale, 0, 100, 0.004, 0.002);

  useEffect(() => {
    animCtrl.current?.stop();
    hueMotion.set(0);
    animCtrl.current = animate(hueMotion, 360, {
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
      onUpdate: (v) => feColorMatrixRef.current?.setAttribute('values', String(v)),
    });
    return () => animCtrl.current?.stop();
  }, [scale, speed]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ position: 'absolute', overflow: 'hidden', ...style }}>
      {/* inset by dispScale so the displaced edges don't get clipped */}
      <div
        style={{
          position: 'absolute',
          inset: -dispScale,
          filter: `url(#${id}) blur(4px)`,
        }}
      >
        {/* Filter lives inside each blob so multiple instances don't clash */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id={id}>
              {/* 1. Generate organic noise */}
              <feTurbulence
                result="undulation"
                numOctaves="2"
                baseFrequency={`${freqX},${freqY}`}
                seed={seed}
                type="turbulence"
              />
              {/* 2. Rotate hue over time → drives the displacement */}
              <feColorMatrix
                ref={feColorMatrixRef}
                in="undulation"
                result="rotated"
                type="hueRotate"
                values="180"
              />
              {/* 3. Amplify channels to create strong displacement vectors */}
              <feColorMatrix
                in="rotated"
                result="circulation"
                type="matrix"
                values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
              />
              {/* 4 + 5. Double displacement for a deeper organic warp */}
              <feDisplacementMap
                in="SourceGraphic"
                in2="circulation"
                scale={dispScale}
                result="dist"
              />
              <feDisplacementMap
                in="dist"
                in2="undulation"
                scale={dispScale}
                result="output"
              />
            </filter>
          </defs>
        </svg>

        {/* The coloured blob shape, cut out by the mask */}
        <div
          style={{
            backgroundColor: color,
            maskImage: BLOB_MASK,
            WebkitMaskImage: BLOB_MASK,
            maskSize: 'cover',
            WebkitMaskSize: 'cover',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
}

/** Fixed full-page background. All page content sits at z-10+. */
export default function EtherealBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Pink — top-left */}
      <EtherealBlob
        color="rgba(244, 114, 182, 0.45)"
        scale={45}
        speed={22}
        seed={2}
        style={{ width: '70vw', height: '70vw', top: '-18vw', left: '-18vw' }}
      />

      {/* Blue — bottom-right */}
      <EtherealBlob
        color="rgba(59, 130, 246, 0.40)"
        scale={40}
        speed={18}
        seed={5}
        style={{ width: '65vw', height: '65vw', bottom: '-18vw', right: '-18vw' }}
      />

      {/* Purple — centre */}
      <EtherealBlob
        color="rgba(168, 85, 247, 0.28)"
        scale={35}
        speed={28}
        seed={9}
        style={{ width: '55vw', height: '55vw', top: '15vh', right: '0vw' }}
      />
    </div>
  );
}
