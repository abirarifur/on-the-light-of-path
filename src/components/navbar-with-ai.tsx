"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Book, Bot, Home, Menu, Star, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col fixed top-0 left-0 right-0 z-50 max-h-[66px] min-h-[66px]">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">The Way of Light</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="flex items-center space-x-1 text-foreground/60 hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-1 text-foreground/60 hover:text-foreground transition-colors"
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Link
                href="/docs"
                className="flex items-center space-x-1 text-foreground/60 hover:text-foreground transition-colors"
              >
                <Book className="h-4 w-4" />
                <span>Docs</span>
              </Link>
            </div>

            {/* Mobile Menu Button, AI Toggle and Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                // onClick={toggleAIPanel}
                // className={`${isAIPanelOpen ? "bg-accent" : ""}`}
              >
                <Bot className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle AI Assistant</span>
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </div>

            {/* CTA Button, AI Toggle and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                // onClick={toggleAIPanel}
                // className={`${isAIPanelOpen ? "bg-accent" : ""}`}
              >
                <Bot className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle AI Assistant</span>
              </Button>
              <ThemeToggle />
              <Button asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content area with AI panel */}
    </div>
  );
}
