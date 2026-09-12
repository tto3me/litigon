import { useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import litigonLion from "@/assets/litigon/litigon-lion.png";

// Position of the lion mark inside the litigon-logo.png wordmark
// (measured from the image, as fractions of its width/height).
const LION_CENTER_X = 0.7015;
const LION_CENTER_Y = 0.5;
const LION_HEIGHT_FRAC = 0.7616;

// Base render size of the flying lion before scaling.
const BASE = 96;

// Fraction of the journey (by scroll) spent travelling from the
// navbar logo to the hero word "Impact"; the rest goes to the
// "An integrated ecosystem" heading.
const MID_PROGRESS = 0.45;

// Viewport height fraction where the ecosystem heading rests when docked.
// Lower = stop earlier, while the heading is just arriving.
const DOCK_VIEWPORT_Y = 0.15;

// Gap between the lion and the word "Impact" / the ecosystem heading.
const GAP = 40;
const ECO_GAP = 10;

// How high the lion leaps above the straight path on each leg of the journey.
const ARC_HEIGHT = 130;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);

type Point = { x: number; y: number; size: number };

const ScrollLion = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(0);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let raf = 0;

    const update = () => {
      const logo = document.getElementById("litigon-navbar-logo");
      const impact = document.getElementById("litigon-word-impact");
      const ecosystem = document.getElementById("litigon-ecosystem-heading");
      if (!logo || !impact || !ecosystem) return;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const logoRect = logo.getBoundingClientRect();
      const impactRect = impact.getBoundingClientRect();
      const ecoRect = ecosystem.getBoundingClientRect();

      // Stop 0 — the lion inside the navbar wordmark (navbar is fixed,
      // so in document space it rides along with the scroll).
      const logoSize = LION_HEIGHT_FRAC * logoRect.height;
      const p0: Point = {
        x: logoRect.left + LION_CENTER_X * logoRect.width + scrollY,
        y: logoRect.top + LION_CENTER_Y * logoRect.height + scrollY,
        size: logoSize,
      };

      // Stop 1 — just right of the word "Impact" in the hero headline.
      const p1: Point = {
        x: impactRect.right + GAP + scrollY,
        y: impactRect.top + impactRect.height / 2 + scrollY,
        size: impactRect.height * 0.85,
      };

      // Stop 2 — right before the "An integrated ecosystem" heading.
      const ecoSize = ecoRect.height * 0.65;
      const p2: Point = {
        x: ecoRect.left - ECO_GAP - ecoSize + scrollY,
        y: ecoRect.top + ecoRect.height / 2 + scrollY,
        size: ecoSize,
      };

      // Scroll position where the heading rests mid-viewport = journey end.
      const ecoDocTop = ecoRect.top + scrollY;
      const end = Math.max(1, ecoDocTop - vh * DOCK_VIEWPORT_Y);
      const progress = clamp01(scrollY / end);

      let from: Point;
      let to: Point;
      let t: number;
      if (progress < MID_PROGRESS) {
        from = p0;
        to = p1;
        t = ease(progress / MID_PROGRESS);
      } else {
        from = p1;
        to = p2;
        t = ease((progress - MID_PROGRESS) / (1 - MID_PROGRESS));
      }

      // Work in document space, then bring back to viewport space.
      // The lion leaps in an arc: it rises above the straight path
      // mid-leg and lands exactly on each stop. The arc is capped so
      // the lion never rises into the top bar — near the logo (where
      // the path starts inside the bar) the cap is zero, so the start
      // position stays exactly on the logo.
      const straightX = lerp(from.x, to.x, t);
      const straightY = lerp(from.y, to.y, t);
      const size = lerp(from.size, to.size, t);

      const minCenterY = logoRect.bottom + 8 + size / 2;
      const maxArc = Math.max(0, straightY - scrollY - minCenterY);
      const arc = Math.min(Math.sin(Math.PI * t) * ARC_HEIGHT, maxArc);

      const docX = straightX;
      const docY = straightY - arc;

      x.set(docX - scrollY - BASE / 2);
      y.set(docY - scrollY - BASE / 2);

      scale.set(size / BASE);

      // Invisible at rest; fades in as soon as the journey starts.
      opacity.set(clamp01(scrollY / 60));
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    schedule();
    const timeoutId = setTimeout(() => {
      schedule();
      setReady(true);
    }, 200);
    if (document.fonts?.ready) {
      document.fonts.ready.then(schedule).catch(() => undefined);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [isDesktop, x, y, scale, opacity]);

  if (!isDesktop || !ready) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40"
      style={{ x, y, scale, opacity, width: BASE, height: BASE }}
    >
      <img src={litigonLion} alt="" className="h-full w-full object-contain" />
    </motion.div>
  );
};

export default ScrollLion;
