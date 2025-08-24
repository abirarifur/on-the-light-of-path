"use client";

import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AIToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAI = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleAI}
        className={`${isOpen ? "bg-accent" : ""}`}
      >
        <Bot className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle AI Assistant</span>
      </Button>
      {isOpen && <div className="ai-sidebar-placeholder" />}
    </>
  );
}

export { useState as useAIState };
