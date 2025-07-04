import Link from "next/link";
import Button from "./components/Button";
import { Notebook, Search } from "lucide-react";
import Sparkle from "./components/Sparkle";

export default function Home() {
  return (
    <div className="relative flex h-dvh flex-col items-center justify-center gap-8 overflow-hidden *:text-center">
      <Sparkle position="bl" />
      <p>Welcome to STEI-K &apos;24</p>
      <h1>
        <span className="text-gradient font-sans">Digital</span>
        <br />
        <span className="text-gradient pr-2 font-serif italic">Garden</span>
      </h1>
      <p>View our notes and find NIMs of students from IF and STI here!</p>
      <div className="flex items-center gap-6 max-md:flex-col max-md:justify-center md:justify-between">
        <Link href={"/NIM-Finder"}>
          <Button>
            <span className="absolute left-1/2 -translate-x-1/2">
              Check out our NIM Finder
            </span>
            <Search className="ml-auto rotate-90" size={20} />
          </Button>
        </Link>
        <Link href={"/Gallery"}>
          <Button>
            <span className="absolute left-1/2 -translate-x-1/2">
              Check out our Notes
            </span>
            <Notebook className="ml-auto" size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
