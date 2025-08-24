import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Users, Heart, Star } from "lucide-react";

export default function AdabAkhlaqPage() {
  return (
    <div>
      <IslamicBreadcrumb section="Adab/Akhlaq" />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Adab & Akhlaq</h1>
            <p className="text-muted-foreground">
              Islamic etiquette and noble character development
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Noble Character
              </CardTitle>
              <CardDescription>
                Following the example of Prophet Muhammad ﷺ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developing excellent character traits like truthfulness,
                patience, kindness, and humility.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Social Etiquette
              </CardTitle>
              <CardDescription>
                Proper conduct in social interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Islamic guidelines for dealing with family, friends, neighbors,
                and society at large.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Spiritual Manners
              </CardTitle>
              <CardDescription>
                Etiquette in worship and spiritual practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Proper conduct in prayer, dhikr, seeking knowledge, and other
                acts of worship.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Prophet&apos;s Character</CardTitle>
            <CardDescription>
              A beautiful description of the best of creation ﷺ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <div className="text-lg mb-2">
                &quot;He was not harsh, nor was he crude, nor did he shout in
                the markets. He did not repay evil with evil, rather he would
                pardon and overlook.&quot;
              </div>
              <div className="text-sm text-muted-foreground">
                Description by Imam Al-Bukhari
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
