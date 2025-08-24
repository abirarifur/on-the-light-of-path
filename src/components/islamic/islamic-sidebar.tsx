"use client";

import { Button } from "@/components/ui/button";
import {
  Book,
  FileText,
  Building,
  Scale,
  Clock,
  Heart,
  Hand,
  Sparkles,
  Home,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const islamicSections = [
  {
    name: "Qur'an",
    href: "/quran",
    icon: Book,
    description: "Holy Qur'an study",
  },
  {
    name: "Hadith",
    href: "/hadith",
    icon: FileText,
    description: "Prophetic traditions",
  },
  {
    name: "Aqeedah",
    href: "/aqeedah",
    icon: Building,
    description: "Islamic creed",
  },
  {
    name: "Fiqh",
    href: "/fiqh",
    icon: Scale,
    description: "Islamic jurisprudence",
  },
  {
    name: "Seerah/History",
    href: "/seerah-history",
    icon: Clock,
    description: "Prophet's biography",
  },
  {
    name: "Tasawwuf",
    href: "/tasawwuf",
    icon: Heart,
    description: "Islamic spirituality",
  },
  {
    name: "Dua/Dhikr",
    href: "/dua-dhikr",
    icon: Hand,
    description: "Supplications",
  },
  {
    name: "Adab/Akhlaq",
    href: "/adab-akhlaq",
    icon: Sparkles,
    description: "Islamic etiquette",
  },
];

interface IslamicSidebarProps {
  currentSection: string;
}

export function IslamicSidebar({ currentSection }: IslamicSidebarProps) {
  return (
    <div className="w-64 bg-background border-r min-h-screen p-4">
      <div className="space-y-4">
        {/* Home Link */}
        <Button variant="ghost" className="w-full justify-start mb-4" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="space-y-1">
          <h3 className="text-lg font-semibold mb-3">Islamic Studies</h3>
          {islamicSections.map((section) => {
            const Icon = section.icon;
            const isActive = currentSection === section.name;

            return (
              <Button
                key={section.name}
                variant={isActive ? "default" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={section.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {section.name}
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
