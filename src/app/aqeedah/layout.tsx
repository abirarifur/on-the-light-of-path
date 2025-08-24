import { AqeedahSidebar } from "@/components/islamic/aqeedah-sidebar";

export default function AqeedahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AqeedahSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
