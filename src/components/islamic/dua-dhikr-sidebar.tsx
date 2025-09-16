"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Hand,
  Home,
  Moon,
  Sun
} from "lucide-react";
import Link from "next/link";

const duaDhikrSections = [
  {
    name: "Daily Duas",
    href: "/dua-dhikr/daily-dua",
    icon: Sun,
    // description: "Morning & evening",
  },
  {
    name: "Morning Duas",
    href: "/dua-dhikr/morning-dhikr",
    icon: Sun,
    // description: "Morning & evening",
  },

  {
    name: "Prayer Duas",
    href: "/dua-dhikr/dhikr-after-salah",
    icon: Hand,
    // description: "Before & after salah",
  },
  {
    name: "Evening Duas",
    href: "/dua-dhikr/evening-dhikr",
    icon: Moon,
    // description: "Saved duas",
  },
  // {
  //   name: "Meal Duas",
  //   href: "/dua-dhikr/meals",
  //   icon: Utensils,
  //   description: "Food & drink",
  // },
  // {
  //   name: "Travel Duas",
  //   href: "/dua-dhikr/travel",
  //   icon: Plane,
  //   description: "Journey supplications",
  // },
  // {
  //   name: "Protection Duas",
  //   href: "/dua-dhikr/protection",
  //   icon: Shield,
  //   description: "Seeking refuge",
  // },
  // {
  //   name: "Night Duas",
  //   href: "/dua-dhikr/night",
  //   icon: Moon,
  //   description: "Before sleep & tahajjud",
  // },
  // {
  //   name: "Dhikr Collections",
  //   href: "/dua-dhikr/dhikr",
  //   icon: Heart,
  //   description: "Remembrance formulas",
  // },
  // {
  //   name: "Personal Collection",
  //   href: "/dua-dhikr/personal",
  //   icon: BookMarked,
  //   description: "Saved duas",
  // },
];

interface DuaDhikrSidebarProps {
  currentPath?: string;
}

export function DuaDhikrSidebar({ currentPath }: DuaDhikrSidebarProps) {
  return (
    <div className="w-64 bg-background border-r h-full flex flex-col">
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
          <Hand className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Dua & Dhikr</h2>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 pt-0">
        <div className="h-full overflow-y-auto space-y-1 pr-2 custom-scrollbar">
          {duaDhikrSections.map((section) => {
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
                    {/* <div className="text-xs text-muted-foreground">
                      {section.description}
                    </div> */}
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
