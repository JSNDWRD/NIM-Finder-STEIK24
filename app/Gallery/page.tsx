import Sparkle from "../components/Sparkle";

export default function Page() {
  return (
    <div className="relative h-dvh overflow-hidden">
      <Sparkle position="br" />
      <h1 className="text-gradient mt-40 pb-3 text-center font-serif italic">
        Gallery
      </h1>
      <p className="text-center">
        Let&apos;s venture back through our first year!
      </p>
    </div>
  );
}
