import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, BookOpen, CheckCircle, Columns2, FileText } from "lucide-react";
import Link from "next/link";

const hadithSections = [
  {
    name: "Sahih Bukhari",
    href: "/hadith/sahih-bukhari",
    icon: CheckCircle,
  },
  {
    name: "Sahih Muslim",
    href: "/hadith/sahih-muslim",
    icon: CheckCircle,
  },
  {
    name: "Sunan Abu Dawud",
    href: "/hadith/abu-dawood",
    icon: CheckCircle,
  },
  {
    name: "Sunan Ibn Majah",
    href: "/hadith/ibn-e-majah",
    icon: CheckCircle,
  },
  {
    name: "Jami at-Tirmidhi",
    href: "/hadith/al-tirmidhi",
    icon: CheckCircle,
  },
];

export default function HadithPage() {
  return (
    <div className="h-full w-full p-4">
      <IslamicBreadcrumb section="Hadith" />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            <Button
              variant="default"
              size="icon"
              aria-label="Quran"
              className="flex md:hidden"
              // onClick={openSidebar}
            >
              <Columns2 />
            </Button>

            <div className="flex">
              <Book className="h-7 w-7 text-primary" />
              <div>
                <h1 className="text-lg md:text-2xl font-bold">
                  Hadith Collections
                </h1>
                <small className="text-sm text-muted-foreground">
                  Sayings, actions, and approvals of Prophet Muhammad ﷺ
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hadithSections?.map((item: any, index: number) => {
            return (
              <Link key={index} href={item.href}>
                <Card className="hover:shadow-lg transition-shadow border-2 ">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Compiled by Imam Bukhari, containing over 7,000 authentic
                      narrations covering all aspects of Islamic life.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* <Card>
          <CardHeader>
            <CardTitle>Featured Hadith</CardTitle>
            <CardDescription>
              Daily wisdom from the teachings of Prophet Muhammad ﷺ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <div className="text-lg mb-2">
                &quot;The best of people are those who benefit others.&quot;
              </div>
              <div className="text-sm text-muted-foreground">
                Narrated by Ahmad, graded as Hasan
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
