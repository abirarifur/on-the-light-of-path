import { SeerahSidebar } from "@/components/islamic/seerah-sidebar";

export default function SeerahHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SeerahSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
