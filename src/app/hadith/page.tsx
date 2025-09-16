import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, FileText } from "lucide-react";

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
    <div>
      <IslamicBreadcrumb section="Hadith" />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Hadith Collections</h1>
            <p className="text-muted-foreground">
              Sayings, actions, and approvals of Prophet Muhammad ﷺ
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hadithSections?.map((item: any, index: number) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Sahih al-Bukhari
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Compiled by Imam Bukhari, containing over 7,000 authentic
                    narrations covering all aspects of Islamic life.
                  </p>
                </CardContent>
              </Card>
            );
          })}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sahih al-Bukhari
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Compiled by Imam Bukhari, containing over 7,000 authentic
                narrations covering all aspects of Islamic life.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sahih Muslim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Compiled by Imam Muslim, known for its strict criteria and
                systematic arrangement of authentic narrations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sunan Abu Dawud
              </CardTitle>
              {/* <CardDescription>
                Second most authentic Hadith collection
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Compiled by Imam Muslim, known for its strict criteria and
                systematic arrangement of authentic narrations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sunan Ibn Majah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Compiled by Imam Muslim, known for its strict criteria and
                systematic arrangement of authentic narrations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Jami at-Tirmidhi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Compiled by Imam Muslim, known for its strict criteria and
                systematic arrangement of authentic narrations.
              </p>
            </CardContent>
          </Card>
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
