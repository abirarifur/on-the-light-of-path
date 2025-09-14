import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, BookOpen, Users, Star } from "lucide-react";
import HadithList from "../_components/HadithList";

const HADITH_COLLECTION: Record<
  string,
  {
    name: string;
    href: string;
  }
> = {
  "sahih-bukhari": {
    name: "Sahih Bukhari",
    href: "/hadith/sahih-bukhari",
  },
  "sahih-muslim": {
    name: "Sahih Muslim",
    href: "/hadith?collection=muslim",
  },
  "abu-dawood": {
    name: "Sunan Abu Dawud",
    href: "/hadith?collection=abudawud",
  },
  "ibn-e-majah": {
    name: "Sunan Ibn Majah",
    href: "/hadith?collection=ibnmajah",
  },
  "al-tirmidhi": {
    name: "Jami at-Tirmidhi",
    href: "/hadith?collection=tirmidhi",
    // icon: CheckCircle,
  },
};

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  console.log();

  return (
    <div>
      <IslamicBreadcrumb section="Hadith" subsection={[slug]} />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">
              {HADITH_COLLECTION[slug].name}
            </h1>
            {/* <p className="text-muted-foreground">
              Sayings, actions, and approvals of Prophet Muhammad ﷺ
            </p> */}
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1">
          <HadithList slug={slug} />
        </div>
      </div>
    </div>
  );
}
