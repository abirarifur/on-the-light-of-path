import HadithDetails from "@/app/hadith/_components/HadithDetails";
import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import { FileText, X } from "lucide-react";

import { HadithSidebarMobile } from "@/components/islamic/hadith-sidebar-mobile";
import { Button } from "@/components/ui/button";
import HadithsContainer from "@/app/hadith/_components/HadithsContainer";

export default async function page({
  params,
}: {
  params: { slug: string; name: string };
}) {
  const { slug, name } = await params;

  return (
    <>
      <div>
        <IslamicBreadcrumb section="Hadith" subsection={[slug]} />
        <HadithsContainer slug={slug} name={name} />
      </div>
    </>
  );
}
