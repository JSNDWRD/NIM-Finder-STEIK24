"use client";
import logoSTEIK24 from "@/public/logo-sementara-steik24.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const currentPath = usePathname();
  const urls = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "NIM Finder",
      url: "/NIM-Finder",
    },
    {
      name: "Gallery",
      url: "/Gallery",
    },
  ];
  return (
    <nav className="fixed top-14 left-1/2 z-50 flex w-max -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)] px-6 py-2 backdrop-blur-md md:w-2xl md:justify-between lg:w-3xl">
      <div className="flex items-center gap-2">
        <Image
          src={logoSTEIK24}
          alt="Logo Sementara STEI-K '24"
          className="size-10"
        />
        <span className="text-gradient text-lg font-bold">
          <span className="font-sans">Digital</span>{" "}
          <span className="pr-1 font-serif italic">Garden</span>
        </span>
      </div>
      <div className="hidden items-center gap-4 *:font-medium sm:gap-6 md:flex">
        {urls.map((e, i) => (
          <Link
            href={e.url}
            key={i}
            className={`${e.url == currentPath ? "text-gradient" : ""}`}
          >
            {e.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
