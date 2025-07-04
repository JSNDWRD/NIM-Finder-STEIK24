import Link from "next/link";
import Sparkle from "./components/Sparkle";

export default function NotFound() {
  return (
    <div className="relative flex h-dvh flex-col items-center justify-center overflow-hidden">
      <Sparkle position="br" />
      <p className="text-gradient text-center text-7xl font-bold lg:text-9xl">
        404
      </p>
      <p className="text-gradient text-center">Page could not be found.</p>
    </div>
  );
}
