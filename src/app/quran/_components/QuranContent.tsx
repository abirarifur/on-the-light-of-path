"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Book, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { value: "english", label: "English" },
  { value: "arabic2", label: "Arabic" },
  { value: "bengali", label: "Bangla" },
  { value: "urdu", label: "Urdu" },
];

export default function QuranContent({ surah }: { surah?: string }) {
  const surahNumber = surah || "1";

  const [language, setLanguage] = useState("arabic2");
  const [surahData, setSurahData] = useState<any>(null);
  const [isTafsirOpen, setIsTafsirOpen] = useState<boolean>(false);
  const [tafsir, setTafsir] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSurah() {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_QURAN_URL}/${surahNumber}.json`,
          { cache: "force-cache" }
        );
        const data = await res.json();
        setSurahData(data);
        setIsTafsirOpen(false);
        setTafsir({});
      } catch (error) {
        console.error("Error fetching surah:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSurah();
  }, [surahNumber]);

  const getTafsirData = async (surah: string, ayah: number) => {
    setIsTafsirOpen(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_QURAN_URL}/tafsir/${surah}_${ayah}.json`
    );
    const data = await res.json();
    console.log("=======================", data);

    setTafsir(data);
  };

  return (
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
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Total Ayahs: {surahData?.totalAyah}</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex gap-4 divide-x-2">
              <div className="space-y-4 flex-1">
                {surahData?.audio && surahData.audio[1] && (
                  <audio controls className="w-full mt-2">
                    <source
                      src={`${surahData.audio[1].originalUrl}`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                )}

                <ul className="space-y-2 h-[600px] overflow-auto ">
                  {surahData?.[language]?.map((ayah: any, index: number) => (
                    <li
                      key={index}
                      className="flex justify-between items-start gap-3 border-b pb-2 last:border-b-0"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <p className="font-medium text-primary">{index + 1}.</p>
                        <p
                          className={`${
                            language === "arabic1" ? "text-4xl" : "text-base"
                          } font-medium`}
                        >
                          {ayah}
                        </p>
                      </div>
                      <Button
                        variant="link"
                        onClick={() => getTafsirData(surahNumber, index + 1)}
                      >
                        Tafsir <ArrowRight />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              {isTafsirOpen && (
                <div className="flex-1 w-full px-4 max-h-[700px] overflow-auto ">
                  <X
                    className="ml-auto"
                    onClick={() => {
                      setIsTafsirOpen(false);
                      setTafsir({});
                    }}
                  />
                  {!tafsir.tafsirs ? (
                    <p>No data available.</p>
                  ) : (
                    <div className="max-h-fit overflow-auto ">
                      <h3 className="font-semibold ">
                        Surah: {tafsir?.surahNo}, Ayah: {tafsir?.ayahNo}
                      </h3>

                      {tafsir.tafsirs.map((item: any, idx: number) => (
                        <div key={idx} className="mb-4">
                          <h3 className="font-semibold">
                            Author:{" "}
                            <span className="italic">{item.author}</span>
                          </h3>
                          <p>{item.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
