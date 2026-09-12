import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import litigonLion from "@/assets/litigon/litigon-lion.png";

// Position of the lion mark inside the litigon-logo.png wordmark
// (measured from the image, as fractions of its width/height).
const LION_CENTER_X = 0.7015;
const LION_CENTER_Y = 0.5;
const LION_HEIGHT_FRAC = 0.7616;

// Base render size of the flying lion before scaling.
const BASE = 96;
const START_SCALE = 3;

const ScrollLion = ({ heroRef }: { heroRef?: React.RefObject<HTMLElement | null> }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [from, setFrom] = useState({ x: 0, y: 0 });
  const [to, setTo] = useState({ x: 0, y: 0 });
  const [endScale, setEndScale] = useState(0.2);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    if (!isDesktop) return;

    const measure = () => {
      const logo = document.getElementById("litigon-navbar-logo");
      const hero = heroRef?.current;
      if (!logo || !hero) return;

      const logoRect = logo.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();

      setFrom({
        x: heroRect.left + heroRect.width / 2 - BASE / 2,
        y: heroRect.top + heroRect.height / 2 + 60 - BASE / 2,
      });
      setTo({
        x: logoRect.left + LION_CENTER_X * logoRect.width - BASE / 2,
        y: logoRect.top + LION_CENTER_Y * logoRect.height - BASE / 2,
      });
      setEndScale((LION_HEIGHT_FRAC * logoRect.height) / BASE);
    };

    const timeoutId = setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measure);
    };
  }, [heroRef, isDesktop]);

  const x = useTransform(scrollYProgress, [0, 1], [from.x, to.x]);
  const y = useTransform(scrollYProgress, [0, 1], [from.y, to.y]);
  const scale = useTransform(scrollYProgress, [0, 1], [START_SCALE, endScale]);

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ x, y, scale, width: BASE, height: BASE }}
    >
      <img src={litigonLion} alt="" className="h-full w-full object-contain" />
    </motion.div>
  );
};

export default ScrollLion;
