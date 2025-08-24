"use client";

import { Bot, X, Send, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";

interface AIPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIPanel({ isOpen, onClose }: AIPanelProps) {
  const [message, setMessage] = useState("");
  const [width, setWidth] = useState(320);
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const minWidth = 280;
  const maxWidth = 600;

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would handle sending the message to your AI
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const newWidth = window.innerWidth - e.clientX;
      const clampedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
      setWidth(clampedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="bg-background border-l shadow-lg flex flex-col relative"
      style={{ width: `${width}px` }}
    >
      {/* Resize Handle */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary/50 flex items-center justify-center group"
        onMouseDown={startResizing}
      >
        <div className="w-1 h-8 bg-border group-hover:bg-primary/50 rounded-full flex items-center justify-center">
          <GripVertical className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b ml-2">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">AI Assistant</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close AI Assistant</span>
        </Button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 ml-2 overflow-y-auto">
        <div className="space-y-4">
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm">
              Hello! I&apos;m your AI assistant. How can I help you today?
            </p>
          </div>
          {/* Chat messages would go here */}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 ml-2 border-t">
        <div className="flex space-x-2">
          <Input
            placeholder="Ask me anything..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
