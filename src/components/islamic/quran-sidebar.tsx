"use client";

import { SURAH } from "@/app/_data/surah";
import { Button } from "@/components/ui/button";
import { Book, Home } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function QuranSidebar() {
  const params = useSearchParams();
  const surahParam = params.get("surah");
  return (
    <div className="w-[256px] bg-background border-r h-full overflow-y-auto flex flex-col">
      <div className="p-4 flex-shrink-0">
        {/* Home Link */}
        <Button variant="ghost" className="w-full justify-start mb-4" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <Book className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Qur&apos;an</h2>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 pt-0">
        <div className="h-full overflow-y-auto space-y-1 pr-2 custom-scrollbar">
          {SURAH.map((section) => {
            // const Icon = section.icon;
            // const isActive = currentPath === section.href;

            return (
              <Link href={`/quran?surah=${section.number}`} key={section.name}>
                <Button
                  variant={
                    Number(surahParam) === section.number || !surahParam
                      ? "secondary"
                      : "ghost"
                  }
                  // variant={"ghost"}
                  className="w-full justify-start cursor-pointer"
                  asChild
                >
                  {/* <Icon className="mr-2 h-4 w-4" /> */}
                  <div className="flex-1 text-left">
                    <div className="text-muted-foreground">
                      {section.englishName}
                    </div>
                  </div>
                  {/* {isActive && <ChevronRight className="ml-auto h-4 w-4" />} */}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
