import { IDataAngkatan } from "../NIM-Finder/page";
import { MapPin, School, X } from "lucide-react";
import data24 from "@/public/data-angkatan-steik/24.json";
import data23 from "@/public/data-angkatan-steik/23.json";
import data22 from "@/public/data-angkatan-steik/22.json";
import data21 from "@/public/data-angkatan-steik/21.json";

export default function Dialog({
  data,
  closeDialog,
}: {
  data: IDataAngkatan | null;
  closeDialog: () => void;
}) {
  const dataAngkatan: IDataAngkatan[] = [
    ...data24,
    ...data23,
    ...data22,
    ...data21,
  ].sort((a, b) => a["NIM Jurusan"] - b["NIM Jurusan"]);
  const tahun = data?.["NIM Jurusan"].toString().substring(3, 5);
  const prodi = data?.["NIM Jurusan"].toString().substring(0, 3);
  const lokasi =
    data?.Kampus ??
    (prodi === "135" ? data?.Jurusan.slice(3) : data?.Jurusan.slice(4)) ??
    "";
  const colorMap: Record<string, string> = {
    "24": "text-[#3CB9C8] bg-[#A5F3FC]",
    "23": "text-[#6A9BD9] bg-[#BFDBFE]",
    "22": "text-[#27AACA] bg-[#68E2FF]",
    "21": "text-[#2D53AD] bg-[#4E73CB]",
  };
  return (
    <div
      className={`absolute top-0 left-1/2 flex h-dvh w-dvw -translate-x-1/2 items-center justify-center p-2 backdrop-blur-md transition-opacity ${data ? "z-[100] opacity-100" : "pointer-events-none -z-50 opacity-0"}`}
    >
      <div className="flex min-h-40 w-full max-w-3xl flex-col gap-4 rounded-md border border-[#BFDBFE] bg-gradient-to-br from-[#244296] to-[#354F9A] px-4 py-2 text-start drop-shadow-md transition-colors hover:from-[#354F9A] hover:to-[#244296]">
        <div>
          <div className="flex items-center justify-between">
            <p className="space-x-1.5 text-lg font-bold">
              <span>{data?.["Nama Lengkap"]} </span>
              {tahun && (
                <span className={`${colorMap[tahun]} rounded-full px-2`}>
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
      </div>
    </div>
  );
}
