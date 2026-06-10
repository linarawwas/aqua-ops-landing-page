"use client";

import { useEffect } from "react";

/**
 * Adds the `in` class to every `.reveal` element when it scrolls into view,
 * driving the CSS entrance transitions. Also reveals anything already in view
 * on mount, and force-reveals everything after a short failsafe timeout.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;

    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((e) => {
        if (e.classList.contains("in")) return;
        const r = e.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) e.classList.add("in");
      });
    };

    revealInView();
    const raf = requestAnimationFrame(revealInView);

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((e) => {
        if (!e.classList.contains("in")) io.observe(e);
      });
    } else {
      els.forEach((e) => e.classList.add("in"));
    }

    window.addEventListener("scroll", revealInView, { passive: true });
    const failsafe = setTimeout(
      () => els.forEach((e) => e.classList.add("in")),
      2500
    );

    return () => {
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      window.removeEventListener("scroll", revealInView);
      clearTimeout(failsafe);
    };
  }, []);

  return null;
}
