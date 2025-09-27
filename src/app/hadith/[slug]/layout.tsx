import { HadithSidebar } from "@/components/islamic/hadith-sidebar";

export default async function HadithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <HadithSidebar />
      <main className="h-full flex-1 px-4">{children}</main>
    </div>
  );
}
