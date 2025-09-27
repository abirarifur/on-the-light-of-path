"use client";
import { QuranSidebarMobile } from "@/components/islamic/quran-sidebar-mobile";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import React, { Suspense, useEffect } from "react";
import Loading from "../loading";
import QuranContent from "./QuranContent";

type Props = {
  surah?: string;
};

export default function QuranContainer({ surah }: Props) {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(false);
  }, [surah]);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <QuranContent surah={surah} openSidebar={() => setOpen(true)} />
      </Suspense>
      <Drawer open={open} onOpenChange={setOpen} direction="left">
        <DrawerContent>
          <div className="h-full w-full">
            <DrawerHeader className="p-2">
              <DrawerTitle className="flex justify-between items-center w-full">
                <p>Menu</p>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <X size={2} />
                </Button>
              </DrawerTitle>
            </DrawerHeader>
            <QuranSidebarMobile sidebarClose={() => setOpen(false)} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
