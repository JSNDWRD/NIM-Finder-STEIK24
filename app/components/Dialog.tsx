import { IDataAngkatan } from "../NIM-Finder/page";
import { MapPin, School, X } from "lucide-react";
import data24 from "@/public/data-angkatan-steik/24.json";
import data23 from "@/public/data-angkatan-steik/23.json";
import data22 from "@/public/data-angkatan-steik/22.json";
import data21 from "@/public/data-angkatan-steik/21.json";
import React from "react";

const colorMap: Record<string, string> = {
  "24": "text-[#3CB9C8] bg-[#A5F3FC]",
  "23": "text-[#6A9BD9] bg-[#BFDBFE]",
  "22": "text-[#27AACA] bg-[#68E2FF]",
  "21": "text-[#2D53AD] bg-[#4E73CB]",
};

export default function Dialog({
  data,
  closeDialog,
  setCurr,
}: {
  data: IDataAngkatan | null;
  closeDialog: () => void;
  setCurr: (e: IDataAngkatan | null) => void;
}) {
  const dataAngkatan: Record<string, IDataAngkatan[]> = {
    "24": data24,
    "23": data23,
    "22": data22,
    "21": data21,
  };
  const tahun = data?.["NIM Jurusan"].toString().substring(3, 5);
  const prodi = data?.["NIM Jurusan"].toString().substring(0, 3);
  const akhiran = data?.["NIM Jurusan"].toString().substring(5);
  const lokasi =
    data?.Kampus ??
    data?.Jurusan.split(" ")[data?.Jurusan.split(" ").length - 1] ??
    "";

  /* Return array of object berisikan data generasi suatu NIM */
  const generasi = ["21", "22", "23", "24"].map((e) => {
    const cari = `${prodi}${e}${akhiran}`;
    const check = dataAngkatan[e].some(
      (e) => e["NIM Jurusan"].toString() == cari,
    );
    return {
      NIM: cari,
      tahun: e,
      exist: check,
    };
  });

  const switchGen = (e: IDataAngkatan | null) => {
    setCurr(e);
  };

  return (
    <div
      className={`absolute top-0 left-1/2 flex h-dvh w-dvw -translate-x-1/2 items-center justify-center p-2 backdrop-blur-md transition-opacity ${data ? "z-[100] opacity-100" : "pointer-events-none -z-50 opacity-0"}`}
    >
      <div className="flex min-h-40 w-full max-w-3xl flex-col gap-4 rounded-md border border-[#BFDBFE] bg-gradient-to-br from-[#244296] to-[#354F9A] px-6 py-4 text-start drop-shadow-md transition-colors hover:from-[#354F9A] hover:to-[#244296]">
        <div>
          <div className="flex items-center justify-between">
            <p className="space-x-1.5 text-lg font-bold">
              <span>{data?.["Nama Lengkap"]} </span>
              {tahun && (
                <span
                  className={`${colorMap[tahun]} rounded-full border border-white/35 px-2`}
                >
                  20{tahun}
                </span>
              )}
            </p>
            <button onClick={closeDialog} className="cursor-pointer">
              <X />
            </button>
          </div>
          <p>
            <span className="text-[#7C98DC]">NIM:</span> {data?.["NIM Jurusan"]}
            {data?.["NIM TPB"] && " / " + data?.["NIM TPB"]}
          </p>
          {(tahun == "22" || tahun == "21") && (
            <p>
              <span className="text-[#7C98DC]">Nama Panggilan:</span>{" "}
              {data?.["Nama Panggilan"] ? data?.["Nama Panggilan"] : "-"}
            </p>
          )}
        </div>
        <div className="space-y-2 text-[#7C98DC] *:flex *:items-center *:gap-2">
          <p>
            <School />
            {prodi == "135"
              ? "Teknik Informatika"
              : "Sistem dan Teknologi Informasi"}
          </p>
          <p>
            <MapPin />
            Kampus {lokasi}
          </p>
        </div>
        <ol className="mx-auto my-12 flex w-full items-center sm:w-md lg:w-xl">
          {generasi.map((e) => {
            if (e.exist) {
              return (
                <li key={e.NIM} className="flex grow items-center">
                  <hr className="grow border" />
                  <button
                    onClick={() => {
                      const gen =
                        dataAngkatan[e.tahun].find(
                          (f) => f["NIM Jurusan"].toString() == e.NIM,
                        ) || null;
                      switchGen(gen);
                    }}
                    className="relative flex shrink-0 cursor-pointer flex-col items-center"
                  >
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap sm:text-base">
                      {e.NIM}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center gap-4 rounded-full bg-[#BFDBFE] ${e.NIM == data?.["NIM Jurusan"].toString() ? "border border-white/35 drop-shadow-md drop-shadow-[#BFDBFE]" : ""}`}
                    ></span>
                    <span
                      className={`absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full px-2 text-xs font-bold whitespace-nowrap sm:text-base ${colorMap[e.tahun]} ${e.NIM == data?.["NIM Jurusan"].toString() ? "border border-white/35 drop-shadow-sm drop-shadow-[#BFDBFE]" : ""}`}
                    >
                      20{e.tahun}
                    </span>
                  </button>
                  <hr className="grow border" />
                </li>
              );
            } else {
              return (
                <li key={e.tahun} className="flex grow items-center">
                  <hr className="grow border" />
                  <button className="relative flex shrink-0 cursor-pointer flex-col items-center">
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">
                      X
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center gap-4 rounded-full bg-[#BFDBFE] ${e.NIM == data?.["NIM Jurusan"].toString() ? "border border-white/35 drop-shadow-md drop-shadow-[#BFDBFE]" : ""}`}
                    ></span>
                    <span
                      className={`absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full px-2 font-bold whitespace-nowrap ${colorMap[e.tahun]} ${e.NIM == data?.["NIM Jurusan"].toString() ? "border border-white/35 drop-shadow-sm drop-shadow-[#BFDBFE]" : ""}`}
                    >
                      20{e.tahun}
                    </span>
                  </button>
                  <hr className="grow border" />
                </li>
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
}
