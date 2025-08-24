import { TasawwufSidebar } from "@/components/islamic/tasawwuf-sidebar";

export default function TasawwufLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <TasawwufSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
