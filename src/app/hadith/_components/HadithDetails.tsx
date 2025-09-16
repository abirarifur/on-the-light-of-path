"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import React, { useEffect } from "react";

type Props = {
  chapterNumber?: string;
  bookSlug: string;
};

export default function HadithDetails({ chapterNumber, bookSlug }: Props) {
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(25);
  const [hadith, setHadith] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchHadith() {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HADITH_URL}/hadiths?apiKey=$2y$10$ichA6vai13wU1yiFOrMltwrd4Wz163Hg0HPKaUb5dG8Ab20hL9&book=${bookSlug}&chapter=${chapterNumber}&page=${page}`,
          { cache: "no-store", next: { revalidate: 10 } }
        );
        const data = await res.json();
        setHadith(data?.hadiths || {});
      } catch (error) {
        setHadith({});
      } finally {
        setLoading(false);
      }
    }
    fetchHadith();
  }, [page, chapterNumber, bookSlug]);

  return (
    <div className="w-full h-[750px] overflow-auto px-2">
      {loading ? (
        <div>Loading...</div>
      ) : hadith?.data?.length > 0 ? (
        hadith.data.map((item: any, idx: number) => (
          <div key={idx} className="mb-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
              <div
                className="text-base mb-2"
                style={{
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                {item.hadithArabic}
              </div>
              <div className="text-base">{item.hadithEnglish}</div>
            </div>
          </div>
        ))
      ) : (
        <div>No Hadith found.</div>
      )}
      {hadith?.links && hadith.links.length > 0 && (
        <Pagination>
          <PaginationContent>
            {hadith.links.map((link: any, idx: number) => {
              if (link.label.includes("Previous")) {
                return (
                  <PaginationItem key={idx}>
                    <PaginationPrevious
                      aria-disabled={!link.url}
                      className={
                        !link.url ? "pointer-events-none opacity-50" : ""
                      }
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.url) setPage(page - 1);
                        }}
                        disabled={!link.url}
                      />
                    </PaginationPrevious>
                  </PaginationItem>
                );
              }
              if (link.label.includes("Next")) {
                return (
                  <PaginationItem key={idx}>
                    <PaginationNext
                      aria-disabled={!link.url}
                      className={
                        !link.url ? "pointer-events-none opacity-50" : ""
                      }
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.url) setPage(page + 1);
                        }}
                        disabled={!link.url}
                      />
                    </PaginationNext>
                  </PaginationItem>
                );
              }
              if (link.label === "...") {
                return (
                  <PaginationItem key={idx}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              // Numbered page buttons
              return (
                <PaginationItem key={idx}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.url) setPage(Number(link.label));
                    }}
                    className={`px-3 py-1 rounded ${
                      link.active ? "bg-primary text-white" : "bg-card"
                    }`}
                    disabled={!link.url}
                  >
                    {link.label}
                  </button>
                </PaginationItem>
              );
            })}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
