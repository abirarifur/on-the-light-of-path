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
  subsection?: string[];
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
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/islamic-studies">
            Islamic Studies
          </BreadcrumbLink>
        </BreadcrumbItem> */}
        {/* <BreadcrumbSeparator /> */}
        <BreadcrumbItem>
          {subsection ? (
            <BreadcrumbLink
              href={`/${section.toLowerCase().replaceAll("/", "-")}`}
              className="capitalize"
            >
              {section.replaceAll("-", " ").replaceAll("%20", " ")}
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>{section}</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {subsection &&
          subsection?.map((item: string) => {
            return (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/${section
                      .toLowerCase()
                      .replaceAll("/", "-")}/${item}`}
                  >
                    {" "}
                    <BreadcrumbPage className="capitalize">
                      {item.replaceAll("-", " ").replaceAll("%20", " ")}
                    </BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
