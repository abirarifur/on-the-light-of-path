"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, FileText, Home } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

interface HadithSidebarProps {
  currentPath?: string;
}

export function HadithSidebarMobile({ currentPath }: HadithSidebarProps) {
  const { hadiths } = useSelector((state: any) => state.hadith);

  return (
    <div className="w-full bg-background border-r h-full overflow-y-auto flex md:hidden flex-col">
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
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Hadith</h2>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 pt-0">
        <div className="h-full overflow-y-auto space-y-1 pr-2 custom-scrollbar">
          {hadiths.map((item: any, index: number) => {
            return (
              <Link
                href={`/hadith/${item.bookSlug}/chapter/${item.chapterNumber}/${item.chapterEnglish}`}
                key={index}
              >
                <Button
                  variant={item.bookSlug === currentPath ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <div className="flex-1 text-left overflow-hidden">
                    <p className="truncate">{item.chapterEnglish}</p>
                  </div>
                  {item.bookSlug === currentPath && (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
