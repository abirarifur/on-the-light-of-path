import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Dynamically import the JSON file
  const duaDhikr = await import(`@/data/dua/${slug}/en.json`)
    .then((module) => module.default)
    .catch((error) => {
      console.error("Error loading JSON:", error);
      return null;
    });
  if (!duaDhikr) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Failed to load dua data</p>
      </div>
    );
  }

  return (
    <div>
      <IslamicBreadcrumb section="dua-dhikr" subsection={[slug]} />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">
              {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </h1>
            {/* <p className="text-muted-foreground">
              Sayings, actions, and approvals of Prophet Muhammad ﷺ
            </p> */}
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1">
          <div className="w-full h-[750px] overflow-auto grid grid-cols-1 gap-4">
            {duaDhikr.map((item: any, index: number) => (
              <Card key={index} className="h-full flex flex-col py-2">
                <CardContent className="px-2">
                  <p className="text-lg mb-2">Title: {item.title}</p>
                  <p className="text-base mb-2">Dua: {item.arabic}</p>
                  <p className="text-lg mb-2">
                    Translation: {item.translation}
                  </p>
                  <p className="text-lg mb-2">Benefits: {item.benefits}</p>
                  <p className="text-lg mb-2">Source: {item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
