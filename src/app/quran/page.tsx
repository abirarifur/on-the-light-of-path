import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import QuranContainer from "./_components/QuranContainer";

export default async function page({ searchParams }: any) {
  const surahParam = await searchParams;
  return (
    <div className="h-full w-full">
      <IslamicBreadcrumb section="Qur'an" />
      <QuranContainer surah={surahParam?.surah} />
    </div>
  );
}
