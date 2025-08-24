import { IslamicBreadcrumb } from "@/components/islamic/islamic-breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Book, Users, Gavel } from "lucide-react"

export default function FiqhPage() {
  return (
    <div>
      <IslamicBreadcrumb section="Fiqh" />
      
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Scale className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Fiqh (Islamic Jurisprudence)</h1>
            <p className="text-muted-foreground">
              Understanding Islamic law and its practical applications
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Worship (Ibadat)
              </CardTitle>
              <CardDescription>
                Rules related to acts of worship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Prayer, fasting, zakat, hajj, and other acts of worship 
                with their conditions and requirements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Transactions (Muamalat)
              </CardTitle>
              <CardDescription>
                Islamic commercial and civil law
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Business transactions, marriage, inheritance, and 
                social interactions according to Islamic principles.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5" />
                Four Schools of Thought
              </CardTitle>
              <CardDescription>
                Hanafi, Maliki, Shafi, Hanbali
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore the methodologies and opinions of the four 
                major schools of Islamic jurisprudence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
