import { FiqhSidebar } from "@/components/islamic/fiqh-sidebar";

export default function FiqhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <FiqhSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
