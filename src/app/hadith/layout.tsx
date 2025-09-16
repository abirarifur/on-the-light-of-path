import { HadithSidebar } from "@/components/islamic/hadith-sidebar";

export default function HadithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <HadithSidebar />
      <main className="h-full flex-1 px-4">{children}</main>
    </div>
  );
}
