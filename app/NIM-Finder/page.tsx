"use client";
import { useCallback, useMemo, useState } from "react";
import Sparkle from "../components/Sparkle";
import {
  AlignLeft,
  ArrowDownUp,
  GraduationCap,
  MapPin,
  Search,
} from "lucide-react";
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
  const [sortNFilter, setSortNFilter] = useState({
    sortNIM: "",
    filterAngkatan: "",
    filterKampus: "",
    filterJurusan: "",
  });

  const finalDataAngkatan = useMemo(() => {
    let res = dataAngkatan;

    if (sortNFilter.filterJurusan) {
      res = res.filter((e) =>
        e["NIM Jurusan"]
          .toString()
          .startsWith(sortNFilter.filterJurusan == "IF" ? "135" : "182"),
      );
    }

    if (sortNFilter.filterKampus) {
      res = res.filter(
        (e) =>
          e.Jurusan.endsWith(sortNFilter.filterKampus) ||
          e.Kampus?.endsWith(sortNFilter.filterKampus),
      );
    }

    if (sortNFilter.filterAngkatan) {
      res = res.filter(
        (e) =>
          e["NIM Jurusan"].toString().substring(3, 5) ===
          sortNFilter.filterAngkatan,
      );
    }

    if (sortNFilter.sortNIM == "asc") {
      res = [...res].sort(
        (a, b) => Number(a["NIM Jurusan"]) - Number(b["NIM Jurusan"]),
      );
    } else if (sortNFilter.sortNIM == "desc") {
      res = [...res].sort(
        (a, b) => Number(b["NIM Jurusan"]) - Number(a["NIM Jurusan"]),
      );
    }

    return res;
  }, [dataAngkatan, sortNFilter]);

  return (
    <div className="relative flex h-dvh flex-col gap-4 overflow-hidden text-center">
      <Sparkle position="tr" />
      <p className="mt-16 md:mt-36">Our very own</p>
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
      <div className="mx-auto hidden flex-col items-center gap-2 *:w-max *:border *:border-[#7C98DC] *:bg-gradient-to-r *:from-[#244296] *:to-[#1E3A8A] **:font-medium *:*:last:*:bg-[#244296] *:*:last:p-2 *:*:last:text-center **:focus:outline-none lg:flex lg:flex-row">
        <div className="flex w-fit items-center gap-2 rounded-full px-4">
          <ArrowDownUp strokeWidth={1} />
          <select
            name="sortNIM"
            id="sortNIM"
            value={sortNFilter.sortNIM}
            onChange={(e) =>
              setSortNFilter((prev) => ({
                ...prev,
                sortNIM: e.target.value,
              }))
            }
          >
            <option value="">Sort by NIM</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-full px-4">
          <AlignLeft strokeWidth={1} />
          <select
            name="filterAngkatan"
            id="filterAngkatan"
            value={sortNFilter.filterAngkatan}
            onChange={(e) =>
              setSortNFilter((prev) => ({
                ...prev,
                filterAngkatan: e.target.value,
              }))
            }
          >
            <option value="">Semua Angkatan</option>
            <option value="21">2021</option>
            <option value="22">2022</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
          </select>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-full px-4">
          <MapPin strokeWidth={1} />
          <select
            name="filterKampus"
            id="filterKampus"
            value={sortNFilter.filterKampus}
            onChange={(e) =>
              setSortNFilter((prev) => ({
                ...prev,
                filterKampus: e.target.value,
              }))
            }
          >
            <option value="">Semua Kampus</option>
            <option value="Ganesha">Ganesha</option>
            <option value="Jatinangor">Jatinangor</option>
          </select>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-full px-4 text-nowrap">
          <GraduationCap strokeWidth={1} />
          <select
            name="filterJurusan"
            id="filterJurusan"
            value={sortNFilter.filterJurusan}
            onChange={(e) =>
              setSortNFilter((prev) => ({
                ...prev,
                filterJurusan: e.target.value,
              }))
            }
          >
            <option value="">Semua Jurusan</option>
            <option value="IF">Teknik Informatika</option>
            <option value="STI">Sistem dan Teknologi Informasi</option>
          </select>
        </div>
      </div>
      <div
        id="daftarDataAngkatan"
        className="mb-4 w-fit max-w-4xl grow space-y-4 self-center overflow-y-auto px-2 inset-shadow-sm"
      >
        {inputValue.trim().length > 4 ? (
          finalDataAngkatan.filter((e) =>
            searchValue.some((f) =>
              e[f]?.toString().toLowerCase().includes(inputValue.toLowerCase()),
            ),
          ).length > 0 ? (
            finalDataAngkatan
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
            <p>Results not found.</p>
          )
        ) : (
          <p>Type longer keyword</p>
        )}
        <Dialog
          data={curr}
          closeDialog={closeDialog}
          setCurr={(e: IDataAngkatan | null) => setCurr(e)}
        />
      </div>
    </div>
  );
}
