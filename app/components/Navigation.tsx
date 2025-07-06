"use client";
import logoSTEIK24 from "@/public/logo-sementara-steik24.png";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      name: "Notes",
      url: "/Notes",
    },
    {
      name: "Gallery",
      url: "/Gallery",
    },
  ];
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <nav className="fixed left-1/2 z-50 flex w-max -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(37,99,235,0.2)] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)] px-6 py-2 backdrop-blur-md max-md:bottom-6 max-md:p-3 md:top-14 md:w-2xl md:justify-between lg:w-3xl">
        <div className="flex items-center gap-2 max-md:hidden">
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
        <button className="hidden max-md:block" onClick={toggleMenu}>
          {showMenu ? <X /> : <AlignJustify />}
        </button>
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
      <div
        className={`absolute top-0 flex h-full w-full items-center justify-center bg-black/10 backdrop-blur-md transition-all md:hidden ${showMenu ? "z-40 opacity-100" : "pointer-events-none -z-40 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-4 *:font-medium sm:gap-6">
          {urls.map((e, i) => (
            <Link
              onClick={toggleMenu}
              href={e.url}
              key={i}
              className={`${e.url == currentPath ? "text-gradient" : ""}`}
            >
              <h2>{e.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
