"use client";
import { DataTable } from "@/components/ui/DataTable";
import React, { useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

type Props = {
  slug: string;
};

export default function HadithList({ slug }: Props) {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [hadith, setHadith] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchHadith() {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HADITH_URL}/${slug}/chapters?apiKey=$2y$10$ichA6vai13wU1yiFOrMltwrd4Wz163Hg0HPKaUb5dG8Ab20hL9`,
          { cache: "no-store", next: { revalidate: 10 } }
        );
        const data = await res.json();
        setHadith(data?.chapters || []);
      } catch (error) {
        setHadith([]);
      } finally {
        setLoading(false);
      }
    }
    fetchHadith();
  }, [page, limit, slug]);

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "chapterNumber",
      header: "Chapter No.",
    },
    {
      accessorKey: "chapterArabic",
      header: "Chapter (Arabic)",
    },
    {
      accessorKey: "chapterEnglish",
      header: "Chapter (English)",
    },
    {
      header: "View",
      cell: ({ row }) => {
        return (
          <Link
            href={`${process.env.NEXT_PUBLIC_HADITH_URL}/${slug}/chapters?apiKey=$2y$10$ichA6vai13wU1yiFOrMltwrd4Wz163Hg0HPKaUb5dG8Ab20hL9`}
          >
            <Button className="w-8 h-8">
              <Eye />
            </Button>
          </Link>
        );
      },
    },
  ];
  return (
    <div className="w-full h-[700px] overflow-auto">
      <DataTable columns={columns} data={hadith} />
    </div>
  );
}
