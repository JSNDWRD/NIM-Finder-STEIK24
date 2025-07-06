import { MapPin, School } from "lucide-react";
import { IDataAngkatan } from "../nim-finder/page";

const colorMap: Record<string, string> = {
  "24": "text-[#3CB9C8] bg-[#A5F3FC]",
  "23": "text-[#6A9BD9] bg-[#BFDBFE]",
  "22": "text-[#27AACA] bg-[#68E2FF]",
  "21": "text-[#2D53AD] bg-[#4E73CB]",
};

export default function Card({
  data,
  dialogData,
}: {
  data: IDataAngkatan;
  dialogData: (item: IDataAngkatan | null) => void;
}) {
  const tahun = data["NIM Jurusan"].toString().substring(3, 5);
  const prodi = data["NIM Jurusan"].toString().substring(0, 3);
  const lokasi =
    data.Kampus ??
    data.Jurusan.split(" ")[data.Jurusan.split(" ").length - 1] ??
    "";
  const toggleDialog = () => dialogData(data);
  return (
    <>
      <div
        onClick={toggleDialog}
        className="flex min-h-40 min-w-full cursor-pointer flex-col justify-between gap-4 rounded-md border border-[#BFDBFE] bg-gradient-to-br from-[#244296] to-[#354F9A] px-4 py-2 text-start drop-shadow-md transition-colors hover:from-[#354F9A] hover:to-[#244296] lg:w-3xl"
      >
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
            Kampus {lokasi ? lokasi : "-"}
          </p>
        </div>
      </div>
    </>
  );
}
