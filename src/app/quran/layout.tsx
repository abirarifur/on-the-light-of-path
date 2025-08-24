import { QuranSidebar } from "@/components/islamic/quran-sidebar";

export default function QuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <QuranSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
