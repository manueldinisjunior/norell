import { ReactNode, useRef, useState, KeyboardEvent } from "react";

type TabItem = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  initialIndex?: number;
};

const Tabs = ({ items, initialIndex = 0 }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const clamped = (index + items.length) % items.length;
    tabRefs.current[clamped]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const focusedIndex = tabRefs.current.findIndex(
      (tab) => tab === document.activeElement
    );
    const baseIndex = focusedIndex === -1 ? activeIndex : focusedIndex;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(baseIndex + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(baseIndex - 1);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Speisekarte Kategorien"
        className="flex flex-wrap gap-2 rounded-full border border-sage-100 bg-white/80 p-2 shadow-soft"
        onKeyDown={onKeyDown}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const tabId = `tab-${index}`;
          const panelId = `panel-${index}`;
          return (
            <button
              key={item.label}
              ref={(el) => (tabRefs.current[index] = el)}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveIndex(index);
                }
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                isActive
                  ? "bg-sage-500 text-white"
                  : "text-cocoa hover:text-sage-700"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={item.label}
            id={`panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            hidden={!isActive}
            className="mt-8"
          >
            {isActive && item.content}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
