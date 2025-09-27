"use client";
import { Columns2, FileText, X } from "lucide-react";
import React from "react";
import HadithDetails from "./HadithDetails";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { HadithSidebarMobile } from "@/components/islamic/hadith-sidebar-mobile";
import { Button } from "@/components/ui/button";

type Props = {
  slug: string;
  name: string;
};

export default function HadithsContainer({ slug, name }: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="icon"
            aria-label="Quran"
            className="flex md:hidden"
            onClick={() => setOpen(true)}
          >
            <Columns2 />
          </Button>
          <div className="flex items-center">
            <FileText className="h-7 w-7 text-primary" />
            <div>
              <h1 className="text-lg md:text-2xl font-bold">
                {name[1].replaceAll("%20", " ")}
              </h1>
              {/* <p className="text-muted-foreground">
              Sayings, actions, and approvals of Prophet Muhammad ﷺ
            </p> */}
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1">
          {/* <HadithList slug={slug} /> */}
          <HadithDetails chapterNumber={name[0]} bookSlug={slug} />
        </div>
      </div>
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
            <HadithSidebarMobile />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
