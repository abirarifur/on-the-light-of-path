import { AdabAkhlaqSidebar } from "@/components/islamic/adab-akhlaq-sidebar";

export default function AdabAkhlaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdabAkhlaqSidebar />
      <main className="flex-1 min-h-screen overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
