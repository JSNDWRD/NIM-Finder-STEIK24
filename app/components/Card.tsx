import { MapPin, School } from "lucide-react";
import { IDataAngkatan } from "../NIM-Finder/page";

export default function Card({ data }: { data: IDataAngkatan }) {
  const tahun = data["NIM Jurusan"].toString().substring(3, 5);
  const prodi = data["NIM Jurusan"].toString().substring(0, 3);
  const lokasi = () => {
    if (data.Kampus) {
      return data.Kampus;
    } else {
      if (prodi == "135") {
        return data.Jurusan.substring(3) || "-";
      } else {
        return data.Jurusan.substring(4);
      }
    }
  };
  const colorMap: Record<string, string> = {
    "24": "text-[#3CB9C8] bg-[#A5F3FC]",
    "23": "text-[#6A9BD9] bg-[#BFDBFE]",
    "22": "text-[#27AACA] bg-[#68E2FF]",
    "21": "text-[#2D53AD] bg-[#4E73CB]",
  };
  return (
    <div className="flex min-h-40 min-w-full flex-col justify-between gap-4 rounded-md border border-[#BFDBFE] bg-gradient-to-br from-[#244296] to-[#354F9A] px-4 py-2 text-start drop-shadow-md lg:w-3xl">
      <div>
        <p className="space-x-1.5 text-lg font-bold">
          <span>{data["Nama Lengkap"]} </span>
          <span className={`${colorMap[tahun]} rounded-full px-2`}>
            20{tahun}
          </span>
        </p>
        <p>
          <span className="text-[#7C98DC]">NIM:</span> {data["NIM Jurusan"]}
          {data["NIM TPB"] && " / " + data["NIM TPB"]}
        </p>
        {(tahun == "22" || tahun == "21") && (
          <p>
            <span className="text-[#7C98DC]">Nama Panggilan:</span>{" "}
            {data["Nama Panggilan"] ? data["Nama Panggilan"] : "-"}
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
          Kampus {lokasi()}
        </p>
      </div>
    </div>
  );
}
