"use client";

import { SURAH } from "@/app/_data/surah";
import { Button } from "@/components/ui/button";
import {
  Book,
  Home,
  ChevronRight,
  BookOpen,
  Search,
  Volume2,
  Languages,
  Star,
  Library,
} from "lucide-react";
import Link from "next/link";

// const quranSections = [
//   {
//     name: "Surahs",
//     href: "/quran/surahs",
//     icon: BookOpen,
//     description: "All 114 chapters",
//   },
//   {
//     name: "Recitation",
//     href: "/quran/recitation",
//     icon: Volume2,
//     description: "Audio recitations",
//   },
//   {
//     name: "Translation",
//     href: "/quran/translation",
//     icon: Languages,
//     description: "Translations & meanings",
//   },
//   {
//     name: "Tafseer",
//     href: "/quran/tafseer",
//     icon: Search,
//     description: "Commentary & explanation",
//   },
//   {
//     name: "Favorites",
//     href: "/quran/favorites",
//     icon: Star,
//     description: "Bookmarked verses",
//   },
//   {
//     name: "Study Notes",
//     href: "/quran/notes",
//     icon: Library,
//     description: "Personal notes",
//   },
// ];

interface QuranSidebarProps {
  currentPath?: string;
}

export function QuranSidebar({ currentPath }: QuranSidebarProps) {
  return (
    <div className="w-64 bg-background border-r h-screen overflow-auto flex flex-col">
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
                  // variant={isActive ? "default" : "ghost"}
                  variant={"ghost"}
                  className="w-full justify-start cursor-pointer"
                  asChild
                >
                  {/* <Icon className="mr-2 h-4 w-4" /> */}
                  <div className="flex-1 text-left">
                    <div>{section.name}</div>
                    <div className="text-xs text-muted-foreground">
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
