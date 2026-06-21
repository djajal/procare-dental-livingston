import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation component for improved UX, SEO, and accessibility
 * Displays hierarchical navigation path with structured data
 * ADA compliant: proper aria-current, no nested anchors
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 py-3 px-4 mb-6 rounded-md border border-gray-200"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-primary hover:text-primary/80 hover:underline font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>

      {/* Schema.org BreadcrumbList structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href ? `${typeof window !== "undefined" ? window.location.origin : ""}${item.href}` : undefined,
          })),
        })}
      </script>
    </nav>
  );
}
