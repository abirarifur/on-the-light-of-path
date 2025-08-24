import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface IslamicBreadcrumbProps {
  section: string;
  subsection?: string;
}

export function IslamicBreadcrumb({
  section,
  subsection,
}: IslamicBreadcrumbProps) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/islamic-studies">
            Islamic Studies
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {subsection ? (
            <BreadcrumbLink
              href={`/${section.toLowerCase().replace("/", "-")}`}
            >
              {section}
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{section}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {subsection && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{subsection}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
