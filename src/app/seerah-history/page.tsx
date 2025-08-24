import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, User, MapPin, BookOpen } from "lucide-react";

export default function SeerahHistoryPage() {
  return (
    <div>
      <IslamicBreadcrumb section="Seerah/History" />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Clock className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Seerah & Islamic History</h1>
            <p className="text-muted-foreground">
              The life of Prophet Muhammad ﷺ and Islamic civilization
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Prophet&apos;s Life
              </CardTitle>
              <CardDescription>
                Complete biography of Prophet Muhammad ﷺ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                From birth in Mecca to the establishment of the Islamic state in
                Medina and beyond.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Islamic Expansion
              </CardTitle>
              <CardDescription>
                The spread of Islam across continents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                From the Arabian Peninsula to Spain, Central Asia, and beyond
                during the early Islamic conquests.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Islamic Civilization
              </CardTitle>
              <CardDescription>
                Golden Age achievements and legacy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Scientific discoveries, philosophical developments, and cultural
                contributions to world civilization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
