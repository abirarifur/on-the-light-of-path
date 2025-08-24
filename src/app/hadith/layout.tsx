import { HadithSidebar } from "@/components/islamic/hadith-sidebar";

export default function HadithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <HadithSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
