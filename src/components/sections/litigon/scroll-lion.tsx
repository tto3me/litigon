import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import litigonLion from "@/assets/litigon/litigon-lion.png";

// Position of the lion mark inside the litigon-logo.png wordmark
// (measured from the image, as fractions of its width/height).
const LION_CENTER_X = 0.7015;
const LION_CENTER_Y = 0.5;
const LION_HEIGHT_FRAC = 0.7616;

// Base render size of the flying lion before scaling.
const BASE = 96;

// Fraction of the journey spent moving from the navbar logo into a
// dedicated left-side flight lane; the rest approaches the ecosystem.
const MID_PROGRESS = 0.45;

// Viewport height fraction where the ecosystem heading rests when docked.
// Lower = stop earlier, while the heading is just arriving.
const DOCK_VIEWPORT_Y = 0.15;

// Keep the moving mark in the page gutter so it never competes with hero copy.
const LEFT_LANE_CENTER_X = 12;
const LEFT_LANE_MAX_SIZE = 52;
const ECO_GAP = 10;
const TEXT_CLEARANCE = 18;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);
const cubic = (a: number, controlA: number, controlB: number, b: number, t: number) => {
  const inverse = 1 - t;
  return inverse ** 3 * a
    + 3 * inverse ** 2 * t * controlA
    + 3 * inverse * t ** 2 * controlB
    + t ** 3 * b;
};
type Point = { x: number; y: number; size: number };
type FlightPath = {
  p0: Point;
  p1: Point;
  p2: Point;
  impactClearY: number;
  ecosystemClearY: number;
  end: number;
};

// Entrance transforms on the headings must not tug the flight path around.
const layoutTop = (element: HTMLElement) => {
  let top = 0;
  let current: HTMLElement | null = element;
  while (current) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return top;
};

const ScrollLion = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion();
  const targetProgress = useMotionValue(0);
  // Smooth wheel steps with one damped progress value, so position and size
  // always stay together on the path, including when scrolling backwards.
  const smoothProgress = useSpring(targetProgress, {
    stiffness: 420,
    damping: 42,
    mass: 0.6,
    restDelta: 0.0001,
    restSpeed: 0.0001,
  });

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
    if (!isDesktop || reducedMotion) return;

    let raf = 0;
    let disposed = false;
    let initialized = false;
    let needsMeasure = true;
    let latestScrollY = window.scrollY;
    let path: FlightPath | null = null;

    const measure = () => {
      const logo = document.getElementById("litigon-navbar-logo");
      const impact = document.getElementById("litigon-word-impact");
      const ecosystem = document.getElementById("litigon-ecosystem-heading");
      if (!logo || !impact || !ecosystem) return;

      const vh = window.innerHeight;
      const logoRect = logo.getBoundingClientRect();
      const impactRect = impact.getBoundingClientRect();
      const ecoRect = ecosystem.getBoundingClientRect();

      const logoSize = LION_HEIGHT_FRAC * logoRect.height;
      const p0: Point = {
        x: logoRect.left + LION_CENTER_X * logoRect.width,
        y: logoRect.top + LION_CENTER_Y * logoRect.height,
        size: logoSize,
      };
      const impactSize = impactRect.height * 0.85;
      const p1: Point = {
        // Let part of the decorative mark skim the viewport edge. This keeps
        // its full footprint outside the hero's left-aligned copy column.
        x: LEFT_LANE_CENTER_X,
        y: layoutTop(impact) + impactRect.height / 2,
        size: Math.min(impactSize, LEFT_LANE_MAX_SIZE),
      };
      const ecoSize = ecoRect.height * 0.65;
      const p2: Point = {
        x: ecoRect.left - ECO_GAP - ecoSize,
        y: layoutTop(ecosystem) + ecoRect.height / 2,
        size: ecoSize,
      };

      const ecoDocTop = layoutTop(ecosystem);
      const end = Math.max(1, ecoDocTop - vh * DOCK_VIEWPORT_Y);
      p1.y = Math.max(p1.y, end * MID_PROGRESS + logoRect.bottom + 40 + p1.size / 2);
      const impactClearY = layoutTop(impact)
        - TEXT_CLEARANCE
        - Math.max(p0.size, p1.size) / 2;
      const ecosystemClearY = ecoDocTop
        - TEXT_CLEARANCE
        - Math.max(p1.size, p2.size) / 2;
      path = { p0, p1, p2, impactClearY, ecosystemClearY, end };
      needsMeasure = false;
    };

    const render = (value: number) => {
      if (!path) return;
      const progress = clamp01(value);
      const firstLeg = progress < MID_PROGRESS;
      const span = firstLeg ? MID_PROGRESS : 1 - MID_PROGRESS;
      const t = (progress - (firstLeg ? 0 : MID_PROGRESS)) / span;
      const from = firstLeg ? path.p0 : path.p1;
      const to = firstLeg ? path.p1 : path.p2;
      const eased = ease(t);
      const size = lerp(from.size, to.size, eased);

      if (firstLeg) {
        // Move outward from the navbar logo, then descend through the clear
        // gutter at the left edge instead of crossing above the hero copy.
        const approach = ease(clamp01(t / 0.78));
        const descent = ease(clamp01((t - 0.72) / 0.28));
        x.set(lerp(from.x, to.x, approach) - BASE / 2);
        y.set(
          lerp(
            cubic(from.y, path.impactClearY, path.impactClearY, path.impactClearY, approach),
            to.y,
            descent,
          ) - latestScrollY - BASE / 2,
        );
      } else {
        // Approach the ecosystem heading from its clear upper-left corner,
        // then descend into the existing docked position without crossing
        // the heading text.
        const approach = ease(clamp01(t / 0.78));
        const descent = ease(clamp01((t - 0.72) / 0.28));
        x.set(lerp(from.x, to.x, approach) - BASE / 2);
        y.set(
          lerp(
            cubic(
              from.y,
              path.ecosystemClearY,
              path.ecosystemClearY,
              path.ecosystemClearY,
              approach,
            ),
            to.y,
            descent,
          ) - latestScrollY - BASE / 2,
        );
      }
      scale.set(size / BASE);
      opacity.set(clamp01(latestScrollY / 60));
    };

    const update = () => {
      latestScrollY = window.scrollY;
      if (needsMeasure || !path) measure();
      if (!path) return;
      const progress = clamp01(latestScrollY / path.end);
      if (!initialized) {
        targetProgress.set(progress);
        smoothProgress.jump(progress);
        initialized = true;
        setReady(true);
      } else {
        targetProgress.set(progress);
      }
      render(smoothProgress.get());
    };

    const schedule = () => {
      if (disposed || raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    const unsubscribe = smoothProgress.on("change", render);
    schedule();
    const remeasure = () => {
      needsMeasure = true;
      schedule();
    };
    const timeoutId = setTimeout(remeasure, 200);
    if (document.fonts?.ready) {
      document.fonts.ready.then(remeasure).catch(() => undefined);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    return () => {
      disposed = true;
      unsubscribe();
      cancelAnimationFrame(raf);
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
    };
  }, [isDesktop, reducedMotion, targetProgress, smoothProgress, x, y, scale, opacity]);

  if (!isDesktop || !ready || reducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      data-scroll-lion
      className="pointer-events-none fixed left-0 top-0 z-40 motion-reduce:hidden"
      style={{ x, y, scale, opacity, width: BASE, height: BASE }}
    >
      <img src={litigonLion} alt="" className="h-full w-full object-contain" />
    </motion.div>
  );
};

export default ScrollLion;
