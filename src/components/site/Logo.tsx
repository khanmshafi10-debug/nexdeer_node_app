import React from "react";

/**
 * Nexdeer animated gold-shimmer SVG logo.
 * - Fully inline SVG: zero network requests, zero extra bundle weight
 * - SMIL keyframe animation for the shimmer sweep (GPU-composited, no JS)
 * - Exact replication: bold lowercase "nexdeer" with arrow-D, "SMC-PRIVATE LIMITED" subtext
 */
export function Logo({
  className = "h-8 w-auto",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 220 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Nexdeer SMC-Private Limited"
      {...props}
    >
      <defs>
        {/* ── Animated gold shimmer gradient ── */}
        <linearGradient id="nx-gold" x1="0%" y1="0%" x2="100%" y2="0%"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7d5a00" />
          <stop offset="15%"  stopColor="#c8870a" />
          <stop offset="30%"  stopColor="#f5c842" />
          <stop offset="45%"  stopColor="#fffbe0" />
          <stop offset="55%"  stopColor="#f0c030" />
          <stop offset="70%"  stopColor="#c8870a" />
          <stop offset="85%"  stopColor="#e8a820" />
          <stop offset="100%" stopColor="#7d5a00" />
          {/* Sweep the gradient left→right repeatedly */}
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            from="-220 0"
            to="220 0"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </linearGradient>

        {/* ── Glow filter for subtle depth ── */}
        <filter id="nx-glow" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ════════════ MAIN WORDMARK ════════════ */}
      {/*
        We render the wordmark as a single text element split around the
        special "arrow-d". The font is Plus Jakarta Sans 800 (already loaded
        globally). Fallback: any bold sans-serif.

        The special "d" in "nexdeer":
          - Standard "d" shape
          - Right-pointing arrow (▶) cut into / overlaid on the counter
        We render it as two glyphs: the "d" character + a small ▶ overlay.
      */}

      {/* "nex" */}
      <text
        x="8"
        y="38"
        fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="36"
        letterSpacing="-1"
        fill="url(#nx-gold)"
        filter="url(#nx-glow)"
      >
        nex
      </text>

      {/* Special "d" — rendered as bold "d" with arrow overlay */}
      {/* "d" character */}
      <text
        x="81"
        y="38"
        fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="36"
        fill="url(#nx-gold)"
        filter="url(#nx-glow)"
      >
        d
      </text>

      {/* Arrow overlay on the "d" counter — right-pointing solid triangle */}
      {/* Positioned to sit in the circular hollow of the letter d */}
      <polygon
        points="87,21  97,27  87,33"
        fill="url(#nx-gold)"
        filter="url(#nx-glow)"
      />
      {/* Dark mask behind arrow so it pops from the "d" fill */}
      <polygon
        points="88,23  95,27  88,31"
        fill="#0b1433"
        opacity="0.5"
      />
      {/* Re-draw arrow on top cleanly */}
      <polygon
        points="89,23.5  95,27  89,30.5"
        fill="url(#nx-gold)"
      />

      {/* "eer" */}
      <text
        x="103"
        y="38"
        fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="36"
        letterSpacing="-1"
        fill="url(#nx-gold)"
        filter="url(#nx-glow)"
      >
        eer
      </text>

      {/* ════════════ SUBTITLE ════════════ */}
      <text
        x="10"
        y="52"
        fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Arial', sans-serif"
        fontWeight="600"
        fontSize="8"
        letterSpacing="3"
        fill="url(#nx-gold)"
        opacity="0.88"
      >
        SMC-PRIVATE LIMITED
      </text>
    </svg>
  );
}
