/**
 * Force Animations System
 * Ensures all animations work even when Windows animation effects are disabled
 * by using inline styles and Web Animations API
 */

export function initForceAnimations() {
  if (typeof window === 'undefined') return;

  console.log('🎬 Initializing force animations system');

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAnimations);
  } else {
    setupAnimations();
  }
}

function setupAnimations() {
  // Setup intersection observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          
          // Get animation delay if exists
          const delay = parseInt(el.style.animationDelay || '0');
          
          setTimeout(() => {
            forceAnimate(el);
          }, delay);
          
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.fade-up, [data-reveal], .slide-up-in, .hero-animate, main'
  );

  animatedElements.forEach((el) => observer.observe(el));

  // Setup continuous animations
  setupMarquee();
  setupPulse();
  setupBounce();

  // Re-observe on route changes (for SPA)
  const routeObserver = new MutationObserver(() => {
    setTimeout(() => {
      const newElements = document.querySelectorAll(
        '.fade-up, [data-reveal], .slide-up-in, .hero-animate'
      );
      newElements.forEach((el) => {
        if (!(el as HTMLElement).style.opacity) {
          observer.observe(el);
        }
      });
    }, 100);
  });

  routeObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function forceAnimate(el: HTMLElement) {
  // Skip if already animated
  if (el.getAttribute('data-force-animated') === 'true') return;

  const revealType = el.getAttribute('data-reveal');
  let keyframes: Keyframe[] = [];

  // Determine animation type
  if (revealType === 'up') {
    keyframes = [
      { opacity: '0', transform: 'translateY(40px)' },
      { opacity: '1', transform: 'translateY(0)' },
    ];
  } else if (revealType === 'down') {
    keyframes = [
      { opacity: '0', transform: 'translateY(-40px)' },
      { opacity: '1', transform: 'translateY(0)' },
    ];
  } else if (revealType === 'left') {
    keyframes = [
      { opacity: '0', transform: 'translateX(50px)' },
      { opacity: '1', transform: 'translateX(0)' },
    ];
  } else if (revealType === 'right') {
    keyframes = [
      { opacity: '0', transform: 'translateX(-50px)' },
      { opacity: '1', transform: 'translateX(0)' },
    ];
  } else if (revealType === 'scale') {
    keyframes = [
      { opacity: '0', transform: 'scale(0.92)' },
      { opacity: '1', transform: 'scale(1)' },
    ];
  } else if (revealType === 'fade') {
    keyframes = [
      { opacity: '0' },
      { opacity: '1' },
    ];
  } else if (el.tagName === 'MAIN') {
    // Page entrance
    keyframes = [
      { opacity: '0', transform: 'translateY(10px)' },
      { opacity: '1', transform: 'translateY(0)' },
    ];
  } else {
    // Default fade-up
    keyframes = [
      { opacity: '0', transform: 'translateY(18px)' },
      { opacity: '1', transform: 'translateY(0)' },
    ];
  }

  // Use Web Animations API
  const animation = el.animate(keyframes, {
    duration: el.tagName === 'MAIN' ? 450 : 700,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    fill: 'forwards',
  });

  animation.onfinish = () => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.setAttribute('data-force-animated', 'true');
  };
}

function setupMarquee() {
  const marqueeElements = document.querySelectorAll(
    '.animate-marquee-left, .animate-marquee-right'
  );

  marqueeElements.forEach((el) => {
    const element = el as HTMLElement;
    const isLeft = element.classList.contains('animate-marquee-left');

    // Force animation with inline style
    element.style.animation = isLeft
      ? 'marquee-left 100s linear infinite'
      : 'marquee-right 100s linear infinite';
  });
}

function setupPulse() {
  const pulseElements = document.querySelectorAll('.animate-pulse');

  pulseElements.forEach((el) => {
    const element = el as HTMLElement;
    
    // Use Web Animations API
    element.animate(
      [
        { opacity: '1' },
        { opacity: '0.5' },
        { opacity: '1' },
      ],
      {
        duration: 2000,
        iterations: Infinity,
        easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
      }
    );
  });
}

function setupBounce() {
  const bounceElements = document.querySelectorAll('.animate-bounce');

  bounceElements.forEach((el) => {
    const element = el as HTMLElement;
    
    // Use Web Animations API
    element.animate(
      [
        { transform: 'translateY(0) translateY(0)' },
        { transform: 'translateY(-25%) translateY(0)' },
        { transform: 'translateY(0) translateY(0)' },
      ],
      {
        duration: 1000,
        iterations: Infinity,
        easing: 'cubic-bezier(0.8, 0, 1, 1)',
      }
    );
  });
}
