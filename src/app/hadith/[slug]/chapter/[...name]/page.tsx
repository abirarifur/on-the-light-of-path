import HadithDetails from "@/app/hadith/_components/HadithDetails";
import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, BookOpen, Users, Star } from "lucide-react";

export default async function page({
  params,
}: {
  params: { slug: string; name: string };
}) {
  const { slug, name } = await params;

  return (
    <div>
      <IslamicBreadcrumb section="Hadith" subsection={[slug, name[1]]} />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">
              {name[1].replaceAll("%20", " ")}
            </h1>
            {/* <p className="text-muted-foreground">
              Sayings, actions, and approvals of Prophet Muhammad ﷺ
            </p> */}
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1">
          {/* <HadithList slug={slug} /> */}
          <HadithDetails chapterNumber={name[0]} bookSlug={slug} />
        </div>
      </div>
    </div>
  );
}
