'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll('.reveal-init, .reveal-slide-left, .reveal-slide-right, .reveal-scale')
        .forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Deixa visível permanentemente
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeTargets = () => {
      const elements = document.querySelectorAll(
        '.reveal-init:not(.is-revealed), .reveal-slide-left:not(.is-revealed), .reveal-slide-right:not(.is-revealed), .reveal-scale:not(.is-revealed)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeTargets();

    // Observa novos elementos que possam ser inseridos dinamicamente
    const mutationObserver = new MutationObserver(() => {
      observeTargets();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
