"use client";

import { Button } from "@/components/ui/button";
import {
  Scale,
  Home,
  ChevronRight,
  Church,
  Coins,
  Heart,
  Plane,
  Handshake,
  Users,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const fiqhSections = [
  {
    name: "Prayer (Salah)",
    href: "/fiqh/prayer",
    icon: Church,
    description: "Prayer rulings & methods",
  },
  {
    name: "Fasting (Sawm)",
    href: "/fiqh/fasting",
    icon: Church,
    description: "Ramadan & fasting rules",
  },
  {
    name: "Charity (Zakat)",
    href: "/fiqh/zakat",
    icon: Coins,
    description: "Wealth purification",
  },
  {
    name: "Pilgrimage (Hajj)",
    href: "/fiqh/hajj",
    icon: Plane,
    description: "Hajj & Umrah guide",
  },
  {
    name: "Marriage & Family",
    href: "/fiqh/marriage",
    icon: Heart,
    description: "Family law",
  },
  {
    name: "Business & Trade",
    href: "/fiqh/business",
    icon: Handshake,
    description: "Commercial law",
  },
  {
    name: "Schools of Fiqh",
    href: "/fiqh/schools",
    icon: Users,
    description: "Hanafi, Maliki, Shafi, Hanbali",
  },
  {
    name: "Contemporary Issues",
    href: "/fiqh/contemporary",
    icon: BookOpen,
    description: "Modern fiqh questions",
  },
];

interface FiqhSidebarProps {
  currentPath?: string;
}

export function FiqhSidebar({ currentPath }: FiqhSidebarProps) {
  return (
    <div className="w-64 bg-background border-r h-screen flex flex-col">
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
          <Scale className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Fiqh</h2>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 pt-0">
        <div className="h-full overflow-y-auto space-y-1 pr-2 custom-scrollbar">
          {fiqhSections.map((section) => {
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
                    <div className="text-xs text-muted-foreground">
                      {section.description}
                    </div>
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
