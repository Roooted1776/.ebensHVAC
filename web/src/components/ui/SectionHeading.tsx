import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  onDark = false,
  className,
  titleClassName,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-3", onDark && "eyebrow-on-dark")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "display text-3xl sm:text-4xl md:text-[2.75rem] text-balance",
          onDark ? "text-paper" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed text-balance",
            onDark ? "text-muted-on-dark" : "text-muted",
            align === "center" && "mx-auto",
            "max-w-xl",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
