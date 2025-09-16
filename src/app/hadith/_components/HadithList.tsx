"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {
  slug: string;
};

export default function HadithList({ slug }: Props) {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [hadith, setHadith] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchHadith() {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HADITH_URL}/${slug}/chapters?apiKey=$2y$10$ichA6vai13wU1yiFOrMltwrd4Wz163Hg0HPKaUb5dG8Ab20hL9`,
          { cache: "no-store", next: { revalidate: 10 } }
        );
        const data = await res.json();
        setHadith(data?.chapters || []);
      } catch (error) {
        setHadith([]);
      } finally {
        setLoading(false);
      }
    }
    fetchHadith();
  }, [page, limit, slug]);

  return (
    <div className="w-full h-[750px] overflow-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {hadith.map((item: any) => (
        <Card key={item.chapterNumber} className="h-full flex flex-col py-2">
          <CardHeader className="px-2">
            <Tooltip>
              <TooltipTrigger className="truncate">
                <h3 className="text-base lg:text-lg text-left font-semibold truncate">
                  {item.chapterEnglish} ({item.chapterArabic})
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {item.chapterEnglish} ({item.chapterArabic})
                </p>
              </TooltipContent>
            </Tooltip>

            <p className="text-sm text-muted-foreground">
              Chapter No: {item.chapterNumber}
            </p>
          </CardHeader>
          <CardContent className="px-2">
            <Link
              href={`/hadith/${slug}/chapter/${item.chapterNumber}/${item.chapterEnglish}`}
            >
              <Tooltip>
                <TooltipTrigger className="truncate w-full">
                  <Button className="w-full">Open</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {item.chapterEnglish} ({item.chapterArabic})
                  </p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
