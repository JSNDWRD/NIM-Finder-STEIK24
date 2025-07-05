"use client";
import { useCallback, useMemo, useState } from "react";
import Sparkle from "../components/Sparkle";
import { Search } from "lucide-react";
import data24 from "@/public/data-angkatan-steik/24.json";
import data23 from "@/public/data-angkatan-steik/23.json";
import data22 from "@/public/data-angkatan-steik/22.json";
import data21 from "@/public/data-angkatan-steik/21.json";
import Card from "../components/Card";
import Dialog from "../components/Dialog";

export interface IDataAngkatan {
  No?: number; // Only 23-24
  "NIM TPB"?: number; // Only 23-24
  "NIM Jurusan": number;
  "Nama Lengkap": string;
  "Nama Panggilan"?: string; // Only 21-22
  Jurusan: string;
  Kampus?: string; // Only 23-24, 21-22 digabung di key 'Jurusan'
  [key: string]: string | number | undefined;
}

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const searchValue = [
    "Nama Lengkap",
    "Nama Panggilan",
    "NIM TPB",
    "NIM Jurusan",
    "Kampus",
    "Jurusan",
  ];
  const dataAngkatan: IDataAngkatan[] = useMemo(
    () =>
      [...data24, ...data23, ...data22, ...data21].sort(
        (a, b) => a["NIM Jurusan"] - b["NIM Jurusan"],
      ),
    [],
  );
  const [curr, setCurr] = useState<IDataAngkatan | null>(null);
  const openDialog = useCallback((item: IDataAngkatan | null) => {
    setCurr(item);
  }, []);
  const closeDialog = useCallback(() => {
    setCurr(null);
  }, []);
  return (
    <div className="relative flex h-dvh flex-col gap-4 overflow-hidden text-center">
      <Sparkle position="tr" />
      <p className="mt-36">Our very own</p>
      <h1 className="text-gradient">
        <span>NIM</span>
        <span className="pr-4 pl-2 font-serif italic">Finder</span>
      </h1>
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-[#A5F3FC] to-[#7C98DC] px-4">
        <Search className="rotate-90" />
        <input
          className="p-2 font-medium focus:outline-none"
          type="text"
          placeholder="Cari NIM / Nama / ..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div
        id="daftarDataAngkatan"
        className="mb-4 w-fit max-w-4xl grow space-y-4 self-center overflow-y-auto px-2 inset-shadow-sm"
      >
        {inputValue.trim().length > 4 ? (
          dataAngkatan
            .filter((e) =>
              searchValue.some((f) =>
                e[f]
                  ?.toString()
                  .toLowerCase()
                  .includes(inputValue.toLowerCase()),
              ),
            )
            .map((e, i) => <Card data={e} key={i} dialogData={openDialog} />)
        ) : (
          <p>Type longer keyword</p>
        )}
        <Dialog data={curr} closeDialog={closeDialog} />
      </div>
    </div>
  );
}
