"use client";

import { Button } from "@/components/ui/button";
import {
  Building,
  Home,
  ChevronRight,
  Crown,
  Eye,
  Shield,
  Zap,
  Users,
  BookOpen,
  Compass,
} from "lucide-react";
import Link from "next/link";

const aqeedahSections = [
  {
    name: "Tawheed",
    href: "/aqeedah/tawheed",
    icon: Crown,
    description: "Oneness of Allah",
  },
  {
    name: "Names & Attributes",
    href: "/aqeedah/names-attributes",
    icon: Eye,
    description: "99 Names of Allah",
  },
  {
    name: "Prophethood",
    href: "/aqeedah/prophethood",
    icon: Shield,
    description: "Belief in messengers",
  },
  {
    name: "Angels",
    href: "/aqeedah/angels",
    icon: Zap,
    description: "Belief in angels",
  },
  {
    name: "Day of Judgment",
    href: "/aqeedah/judgment",
    icon: Compass,
    description: "Afterlife & resurrection",
  },
  {
    name: "Predestination",
    href: "/aqeedah/qadar",
    icon: BookOpen,
    description: "Divine decree (Qadar)",
  },
  {
    name: "Sects & Differences",
    href: "/aqeedah/sects",
    icon: Users,
    description: "Islamic theology schools",
  },
];

interface AqeedahSidebarProps {
  currentPath?: string;
}

export function AqeedahSidebar({ currentPath }: AqeedahSidebarProps) {
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
          <Building className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Aqeedah</h2>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 pt-0">
        <div className="h-full overflow-y-auto space-y-1 pr-2 custom-scrollbar">
          {aqeedahSections.map((section) => {
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
