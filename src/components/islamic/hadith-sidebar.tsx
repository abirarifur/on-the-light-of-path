"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, FileText, Home } from "lucide-react";
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

interface HadithSidebarProps {
  currentPath?: string;
}

export function HadithSidebar({ currentPath }: HadithSidebarProps) {
  return (
    <div className="w-64 bg-background border-r h-full overflow-y-auto flex flex-col">
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
          {hadithSections.map((section) => {
            const Icon = section.icon;
            const isActive = currentPath === section.href;

            return (
              <Button
                key={section.name}
                variant={isActive ? "default" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={section.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  <div className="flex-1 text-left">
                    <div>{section.name}</div>
                  </div>
                  {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
