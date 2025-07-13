import { SparkleIcon } from "lucide-react";

export default function Sparkle({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br" | "tc" | "bc";
}) {
  let classes = "";
  if (position == "tl") {
    classes += "-top-72 -left-32";
  } else if (position == "tr") {
    classes += "-top-72 -right-32";
  } else if (position == "bl") {
    classes += "-bottom-72 -left-32";
  } else if (position == "tc") {
    classes += "-top-96 left-1/2 -translate-x-1/2";
  } else if (position == "bc") {
    classes += "-bottom-96 left-1/2 -translate-x-1/2";
  } else {
    // "br"
    classes += "-bottom-72 -right-32";
  }
  return (
    <SparkleIcon
      color="rgba(165,243,252,0.2)"
      strokeWidth={1.5}
      aria-hidden={"true"}
      className={`pointer-events-none fixed z-0 animate-float ${classes} size-[540px] md:size-[768px] lg:size-[1024px]`}
    />
  );
}

// Add the following to your globals.css or a relevant CSS file:
// @keyframes float {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-32px); }
// }
// .animate-float {
//   animation: float 4s ease-in-out infinite;
// }
