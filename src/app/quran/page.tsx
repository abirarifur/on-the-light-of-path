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

const LANGUAGES = [
  { value: "en.asad", label: "English" },
  { value: "ar.alafasy", label: "Arabic" },
];

export default function QuranPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const surahNumber = searchParams.surah || "1";
  const [language, setLanguage] = useState("ar.alafasy");
  const [surahData, setSurahData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSurah() {
      setLoading(true);
      const res = await fetch(
        `http://api.alquran.cloud/v1/surah/${surahNumber}/${language}`
      );
      const data = await res.json();
      setSurahData(data);
      setLoading(false);
    }
    fetchSurah();
  }, [surahNumber, language]);

  return (
    <div>
      <IslamicBreadcrumb section="Qur'an" />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">
                {surahData?.data?.englishName}{" "}
                <small className="text-sm font-medium">
                  {surahData?.data?.name}
                </small>
              </h1>
              <p className="text-muted-foreground">
                {surahData?.data?.revelationType}
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
            <CardTitle>
              Total Ayahs: {surahData?.data?.ayahs?.length ?? 0}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ul className="space-y-2">
                {surahData?.data?.ayahs?.map((ayah: any) => (
                  <li
                    key={ayah.number}
                    className="flex items-start gap-3 border-b pb-2 last:border-b-0"
                  >
                    <span className="font-medium text-primary">
                      {ayah.numberInSurah}.
                    </span>
                    <span>{ayah.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
