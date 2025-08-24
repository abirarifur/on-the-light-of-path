"use client";

import { Button } from "@/components/ui/button";
import {
  Clock,
  Home,
  ChevronRight,
  Baby,
  Star,
  Sword,
  Crown,
  Map,
  Users,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const seerahSections = [
  {
    name: "Early Life",
    href: "/seerah-history/early-life",
    icon: Baby,
    description: "Birth to prophethood",
  },
  {
    name: "Meccan Period",
    href: "/seerah-history/meccan",
    icon: Star,
    description: "First 13 years",
  },
  {
    name: "Medinan Period",
    href: "/seerah-history/medinan",
    icon: Crown,
    description: "Last 10 years",
  },
  {
    name: "Battles & Expeditions",
    href: "/seerah-history/battles",
    icon: Sword,
    description: "Military campaigns",
  },
  {
    name: "Companions",
    href: "/seerah-history/companions",
    icon: Users,
    description: "Sahabah biographies",
  },
  {
    name: "Timeline",
    href: "/seerah-history/timeline",
    icon: Calendar,
    description: "Chronological events",
  },
  {
    name: "Islamic Expansion",
    href: "/seerah-history/expansion",
    icon: Map,
    description: "Post-prophetic history",
  },
];

interface SeerahSidebarProps {
  currentPath?: string;
}

export function SeerahSidebar({ currentPath }: SeerahSidebarProps) {
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
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Seerah & History</h2>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 pt-0">
        <div className="h-full overflow-y-auto space-y-1 pr-2 custom-scrollbar">
          {seerahSections.map((section) => {
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
