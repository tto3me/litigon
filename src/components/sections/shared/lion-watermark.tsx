import lionMark from "@/assets/litigon/litigon-lion.png";

interface LionWatermarkProps {
  className?: string;
}

const LionWatermark = ({ className = "" }: LionWatermarkProps) => (
  <img
    src={lionMark}
    alt=""
    aria-hidden="true"
    className={`pointer-events-none absolute -right-10 top-24 hidden w-[420px] select-none object-contain opacity-[0.06] lg:block ${className}`}
  />
);

export default LionWatermark;