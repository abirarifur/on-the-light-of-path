import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Lightbulb, Users, BookOpen } from "lucide-react";

export default function TasawwufPage() {
  return (
    <div>
      <IslamicBreadcrumb section="Tasawwuf" />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Heart className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">
              Tasawwuf (Islamic Spirituality)
            </h1>
            <p className="text-muted-foreground">
              The inner dimension of Islam and purification of the soul
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Purification of Soul
              </CardTitle>
              <CardDescription>
                Cleansing the heart from spiritual diseases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Understanding and overcoming pride, envy, anger, and other
                spiritual ailments through Islamic guidance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Spiritual Stations
              </CardTitle>
              <CardDescription>Levels of spiritual development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The journey through maqamat (stations) and ahwal (states) in the
                path of drawing closer to Allah.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Great Scholars
              </CardTitle>
              <CardDescription>
                Classical masters of Islamic spirituality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn from Al-Ghazali, Ibn Arabi, Rumi, and other renowned
                scholars of the spiritual path.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
