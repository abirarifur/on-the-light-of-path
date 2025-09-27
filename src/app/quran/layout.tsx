import { QuranSidebar } from "@/components/islamic/quran-sidebar";
import { Suspense } from "react";

export default function QuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full">
      <Suspense fallback={<div>Loading…</div>}>
        <QuranSidebar />
      </Suspense>
      <main className="h-full flex-1 px-4 w-full">{children}</main>
    </div>
  );
}
