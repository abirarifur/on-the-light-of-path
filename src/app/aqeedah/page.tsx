import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building, Heart, BookOpen, Users } from "lucide-react";

export default function AqeedahPage() {
  return (
    <div>
      <IslamicBreadcrumb section="Aqeedah" />

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Building className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Aqeedah (Islamic Creed)</h1>
            <p className="text-muted-foreground">
              The fundamental beliefs and theology of Islam
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Six Pillars of Faith
              </CardTitle>
              <CardDescription>
                The core beliefs every Muslim must hold
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Belief in Allah</li>
                <li>• Belief in Angels</li>
                <li>• Belief in Divine Books</li>
                <li>• Belief in Prophets</li>
                <li>• Belief in the Day of Judgment</li>
                <li>• Belief in Divine Decree</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Classical Texts
              </CardTitle>
              <CardDescription>
                Essential books on Islamic theology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Study classical works like Al-Aqeedah al-Tahawiyyah, Kitab
                al-Tawheed, and other foundational texts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Contemporary Issues
              </CardTitle>
              <CardDescription>Modern challenges to faith</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Address contemporary questions and doubts with classical Islamic
                scholarship and sound reasoning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
