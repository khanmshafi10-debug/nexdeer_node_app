/**
 * Global Reveal Initialization
 * Ensures all [data-reveal] and animation classes work properly
 */

export function initReveals() {
  if (typeof window === 'undefined') return;

  console.log('🎬 Initializing reveal animations');

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupReveals);
  } else {
    setupReveals();
  }
}

function setupReveals() {
  // Setup IntersectionObserver for all animated elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all [data-reveal] elements
  const revealElements = document.querySelectorAll('[data-reveal]');
  revealElements.forEach((el) => observer.observe(el));

  // Re-observe on route changes
  const routeObserver = new MutationObserver(() => {
    setTimeout(() => {
      const newElements = document.querySelectorAll('[data-reveal]:not(.revealed)');
      newElements.forEach((el) => observer.observe(el));
    }, 100);
  });

  routeObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log(`✅ Observing ${revealElements.length} reveal elements`);
}
