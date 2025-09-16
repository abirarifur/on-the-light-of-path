import { QuranSidebar } from "@/components/islamic/quran-sidebar";

export default function QuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <QuranSidebar />
      <main className="h-full flex-1 px-4">{children}</main>
    </div>
  );
}
