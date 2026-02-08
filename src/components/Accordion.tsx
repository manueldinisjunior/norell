import { ReactNode, useId, useState } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="mt-4 rounded-xl border border-sage-100 bg-sage-50/60 p-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-left text-sm font-semibold text-sage-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        <span>{title}</span>
        <span className="text-lg">{open ? "–" : "+"}</span>
      </button>
      <div id={contentId} hidden={!open} className="mt-3 text-sm text-cocoa">
        {children}
      </div>
    </div>
  );
};

export default Accordion;
