export default function Button({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <button className="bg-gradient relative flex min-w-72 items-center gap-1 rounded-full bg-white px-4 py-2 font-medium text-nowrap hover:cursor-pointer hover:scale-105 transition-transform">
      {children}
    </button>
  );
}
