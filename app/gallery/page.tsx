import path from "path";
import Sparkle from "../components/Sparkle";
import { promises } from "fs";
import Image from "next/image";

export default async function Page() {
  const galleryDir = path.join(process.cwd(), "/public/gallery");
  const galleryFns = await promises.readdir(galleryDir);
  return (
    <div className="relative h-dvh overflow-x-hidden overflow-y-auto">
      <Sparkle position="br" />
      <h1 className="text-gradient mt-20 pb-3 text-center font-serif italic md:mt-40">
        Gallery
      </h1>
      <p className="text-center">
        Let&apos;s venture back through our first year!
      </p>
      <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryFns.map((e, i) => {
          return (
            <div
              className="h-64 w-full rounded-lg border border-[#7C98DC]/30 bg-gradient-to-br from-[#244296] to-[#0891B2] p-4 shadow-inner shadow-[#7C98DC] max-md:h-48 max-md:w-72"
              key={e}
            >
              <div className="flex h-full flex-col">
                <h6 className="mb-2 flex flex-shrink-0 justify-center -space-x-3.5 text-center">
                  Acatrix #{i + 1}
                </h6>

                <div className="relative min-h-0 flex-1">
                  <Image
                    src={`/gallery/${e}`}
                    alt={e}
                    quality={70}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mb-20 text-center">and many more memories waiting...</p>
    </div>
  );
}
