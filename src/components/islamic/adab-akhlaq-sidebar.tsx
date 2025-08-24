"use client";

import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Home,
  ChevronRight,
  Users,
  MessageCircle,
  Utensils,
  Building,
  Heart,
  Book,
  Star,
} from "lucide-react";
import Link from "next/link";

const adabAkhlaqSections = [
  {
    name: "Social Etiquette",
    href: "/adab-akhlaq/social",
    icon: Users,
    description: "Interaction with others",
  },
  {
    name: "Speech & Communication",
    href: "/adab-akhlaq/speech",
    icon: MessageCircle,
    description: "Good speech manners",
  },
  {
    name: "Table Manners",
    href: "/adab-akhlaq/eating",
    icon: Utensils,
    description: "Eating & drinking etiquette",
  },
  {
    name: "Mosque Etiquette",
    href: "/adab-akhlaq/mosque",
    icon: Building,
    description: "Behavior in sacred places",
  },
  {
    name: "Character Building",
    href: "/adab-akhlaq/character",
    icon: Heart,
    description: "Noble characteristics",
  },
  {
    name: "Seeking Knowledge",
    href: "/adab-akhlaq/knowledge",
    icon: Book,
    description: "Student & teacher manners",
  },
  {
    name: "Prophetic Example",
    href: "/adab-akhlaq/prophetic",
    icon: Star,
    description: "Following the Sunnah",
  },
];

interface AdabAkhlaqSidebarProps {
  currentPath?: string;
}

export function AdabAkhlaqSidebar({ currentPath }: AdabAkhlaqSidebarProps) {
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
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold">Adab & Akhlaq</h2>
        </div>
      </div>

      <div className="flex-1 overflow-hidden p-4 pt-0">
        <div className="h-full overflow-y-auto space-y-1 pr-2 custom-scrollbar">
          {adabAkhlaqSections.map((section) => {
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
