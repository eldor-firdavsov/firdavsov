import { MaskedText } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-10 ${className}`}>
      {eyebrow ? <p className="label mb-2">{eyebrow}</p> : null}
      <MaskedText className="display text-[clamp(1.75rem,4vw,2.75rem)]">
        {title}
      </MaskedText>
    </div>
  );
}
