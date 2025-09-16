import { DuaDhikrSidebar } from "@/components/islamic/dua-dhikr-sidebar";

export default function DuaDhikrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <DuaDhikrSidebar />
      <main className="h-full flex-1 px-4">{children}</main>
    </div>
  );
}
