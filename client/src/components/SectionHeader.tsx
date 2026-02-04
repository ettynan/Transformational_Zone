import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {subtitle && (
        <span className="block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-stone-800 mb-6">
        {title}
      </h2>
      <div className={cn("h-1 w-20 bg-primary/30 rounded-full", centered && "mx-auto")} />
    </div>
  );
}
