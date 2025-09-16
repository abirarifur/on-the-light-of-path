import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hand, Moon, Sun, Heart } from "lucide-react";

export default function DuaDhikrPage() {
  return (
    <div>
      <IslamicBreadcrumb section="dua-dhikr" />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Hand className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Dua & Dhikr</h1>
            <p className="text-muted-foreground">
              Supplications and remembrance of Allah from Qur&apos;an and Sunnah
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5" />
                Morning & Evening
              </CardTitle>
              <CardDescription>
                Daily supplications for morning and evening
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Authentic duas from the Qur&apos;an and Sunnah to start and end
                your day with remembrance of Allah.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Various Occasions
              </CardTitle>
              <CardDescription>
                Duas for different situations in life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Supplications for travel, illness, happiness, difficulty, and
                many other circumstances.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5" />
                Night Prayers
              </CardTitle>
              <CardDescription>
                Duas for sleeping and night worship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Supplications before sleep, for protection during the night, and
                for tahajjud prayers.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Featured Dua</CardTitle>
            <CardDescription>
              A beautiful supplication from the Qur&apos;an
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <div className="text-xl font-arabic mb-2">
                رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ
                حَسَنَةً وَقِنَا عَذَابَ النَّارِ
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                &quot;Our Lord, give us good in this world and good in the
                hereafter, and save us from the punishment of the Fire.&quot;
              </div>
              <div className="text-xs text-muted-foreground">
                Surah Al-Baqarah (2:201)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
