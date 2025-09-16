"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Book,
  FileText,
  Building,
  Scale,
  Clock,
  Heart,
  Hand,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { AIPanel } from "../ai-sidebar";

export default function Home() {
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);

  const toggleAIPanel = () => {
    setIsAIPanelOpen(!isAIPanelOpen);
  };
  return (
    <div className="h-full flex-1 flex">
      {/* Main content */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isAIPanelOpen ? "mr-0" : "mr-0"
        }`}
      >
        <div className="font-sans h-full px-2 lg:px-8 pb-8 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl justify-items-center">
            {[
              {
                icon: Book,
                title: "Qur'an",
                desc: "Study the Holy Qur'an and its teachings",
                content:
                  "Explore verses, translations, and commentary of Allah's final revelation.",
                href: "/quran?surah=1",
              },
              {
                icon: FileText,
                title: "Hadith",
                desc: "Collections of Prophet's sayings and actions",
                content:
                  "Discover authentic narrations from Prophet Muhammad ﷺ.",
                href: "/hadith",
              },
              {
                icon: Hand,
                title: "Dua/Dhikr",
                desc: "Supplications and remembrance of Allah",
                content:
                  "Learn authentic duas and forms of dhikr from Qur'an and Sunnah.",
                href: "/dua-dhikr",
              },
              {
                icon: Building,
                title: "Aqeedah",
                desc: "Islamic creed and fundamental beliefs",
                content:
                  "Learn about the six pillars of faith and Islamic theology.",
                href: "/aqeedah",
              },
              {
                icon: Scale,
                title: "Fiqh",
                desc: "Islamic jurisprudence and religious law",
                content: "Understand Islamic rulings and legal principles.",
                href: "/fiqh",
              },
              {
                icon: Clock,
                title: "Seerah/History",
                desc: "Biography of Prophet Muhammad ﷺ",
                content:
                  "Journey through the life and times of our beloved Prophet ﷺ.",
                href: "/seerah-history",
              },
              {
                icon: Heart,
                title: "Tasawwuf",
                desc: "Islamic spirituality and purification",
                content:
                  "Discover the path of spiritual purification and closeness to Allah.",
                href: "/tasawwuf",
              },

              {
                icon: Sparkles,
                title: "Adab/Akhlaq",
                desc: "Islamic etiquette and moral character",
                content:
                  "Develop beautiful character following Islamic teachings.",
                href: "/adab-akhlaq",
              },
            ].map(({ icon: Icon, title, desc, content, href }, i) => (
              <Link key={i} href={href} className="w-full max-w-xs">
                <Card className="w-full h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-8 h-8 text-primary" />
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                    <CardDescription>{desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {content}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-xs text-primary hover:text-primary/80">
                      Explore {title} →
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* AI Panel */}
      <AIPanel isOpen={isAIPanelOpen} onClose={() => setIsAIPanelOpen(false)} />
    </div>
  );
}
