import Link from "next/link";
import Button from "./components/Button";
import { Notebook, Search } from "lucide-react";
import Sparkle from "./components/Sparkle";
import Image from "next/image";
import logoSTEIK24 from "@/public/logo-sementara-steik24.png";

export default function Home() {
  return (
    <div className="relative flex h-dvh flex-col items-center justify-center gap-8 overflow-hidden *:text-center">
      <Sparkle position="bl" />
      <div className="flex items-center gap-2 rounded-full border border-[#7C98DC]/30 bg-gradient-to-r from-[#244296] to-[#1e3a8a] px-4 shadow-inner shadow-[#7C98DC] transition-colors hover:bg-gradient-to-tl">
        <Image
          src={logoSTEIK24}
          alt="Logo Sementara STEI-K '24"
          className="size-10 p-1"
        />
        <p>Welcome to STEI-K &apos;24</p>
      </div>
      <h1>
        <span className="text-gradient font-sans">Digital</span>
        <br />
        <span className="text-gradient pr-2 font-serif italic">Garden</span>
      </h1>
      <p className="px-4">
        View our notes and find NIMs of students from IF and STI here!
      </p>
      <div className="flex items-center gap-6 max-md:flex-col max-md:justify-center md:justify-between">
        <Link href={"/nim-finder"}>
          <Button>
            <span className="absolute left-1/2 -translate-x-1/2">
              Check out our NIM Finder
            </span>
            <Search className="ml-auto rotate-90" size={20} />
          </Button>
        </Link>
        <Link href={"https://digital-garden-steik24-notes.vercel.app/"}>
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
