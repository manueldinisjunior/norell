import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

const Section = ({ id, eyebrow, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="py-12 md:py-16">
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-500">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="mt-3 font-serif text-3xl md:text-4xl">{title}</h2>}
          {description && <p className="mt-3 text-sm text-cocoa">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
