import { DuaDhikrSidebar } from "@/components/islamic/dua-dhikr-sidebar";

export default function DuaDhikrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <DuaDhikrSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
