"use client";

import { useEffect, useState } from "react";
import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

const LANGUAGES = [
  { value: "english", label: "English" },
  { value: "arabic2", label: "Arabic" },
  { value: "bengali", label: "Bangla" },
  { value: "urdu", label: "Urdu" },
];

export default function QuranPage() {
  const surahNumber = useSearchParams().get("surah") || "1";

  const [language, setLanguage] = useState("arabic2");
  const [surahData, setSurahData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSurah() {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_QURAN_URL}/${surahNumber}.json`
      );
      const data = await res.json();
      setSurahData(data);
      setLoading(false);
    }
    fetchSurah();
  }, [surahNumber]);

  return (
    <div>
      <IslamicBreadcrumb section="Qur'an" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">
                {surahData?.surahName}{" "}
                <small className="text-sm font-medium">
                  ({surahData?.surahNameTranslation})
                </small>
              </h1>
              <p className="text-muted-foreground">
                {surahData?.revelationPlace}
              </p>
            </div>
          </div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Card className="h-[700px] overflow-auto">
          <CardHeader>
            <CardTitle>Total Ayahs: {surahData?.totalAyah}</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div className="space-y-4">
                {surahData?.audio && surahData.audio[1] && (
                  <audio controls className="w-full mt-2">
                    <source
                      src={`${surahData.audio[1].originalUrl}`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                )}

                <ul className="space-y-2">
                  {surahData?.[language]?.map((ayah: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 border-b pb-2 last:border-b-0"
                    >
                      <p className="font-medium text-primary">{index + 1}.</p>
                      <p
                        className={`${
                          language === "arabic1" ? "text-4xl" : "text-base"
                        } font-medium`}
                      >
                        {ayah}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
