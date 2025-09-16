import { Suspense } from "react";
import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import QuranContent from "./_components/QuranContent";
import Loading from "./loading";

export default async function page({ searchParams }: any) {
  const surahParam = await searchParams;
  return (
    <div className="h-full">
      <IslamicBreadcrumb section="Qur'an" />
      <Suspense fallback={<Loading />}>
        <QuranContent surah={surahParam?.surah} />
      </Suspense>
    </div>
  );
}
